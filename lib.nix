{ pkgs }:

with pkgs;
with pkgs.lib;

let
  componentsPackageJson = importJSON ./packages/components/package.json;
  reactPackageJson = importJSON ./packages/react/package.json;
  materialPackageJson = importJSON ./packages/material/package.json;
in

assert (componentsPackageJson.version == reactPackageJson.version && componentsPackageJson.version == materialPackageJson.version);

{
  buildNpmPackage = attrs @ { name, buildPhase, installPhase, ... }:
    pkgs.buildNpmPackage (attrs // rec {
      inherit buildPhase installPhase;
      pname = "arc-web-${name}";
      version = componentsPackageJson.version;
      src = sources.cleanSource ./.;
      npmConfigHook = importNpmLock.npmConfigHook;
      npmDeps = importNpmLock {
        npmRoot = src;
      };
      # dont run the build scripts when rebuilding
      # npm dependencies as node-keytar will fail
      npmRebuildFlags = [ "--ignore-scripts" ];
      # ignore legacy peer dependencies
      # due to peer conflicts in npm deps
      npmInstallFlags = [ "--legacy-peer-deps" ];
    });
}
