{ pkgs }:

with builtins;
with pkgs.lib;

let
  componentsPackageJson = fromJSON (builtins.readFile ./packages/components/package.json);
  reactPackageJson = fromJSON (builtins.readFile ./packages/react/package.json);
in

{
  # builds an arc package
  buildArcPackage =
    attrs @
    { name
    , buildPhase
    , installPhase
    , ...
    }:
      with pkgs.lib;
      with pkgs.lib.sources;

      pkgs.buildNpmPackage {
        inherit buildPhase installPhase;

        pname = "arc-web-${name}";
        version = if componentsPackageJson.version == reactPackageJson.version then componentsPackageJson.version else throw "version mismatch";
        src = cleanSource ./.;
        npmDepsHash = "sha256-Clv6fGOFoaFJi8Xo6wjmmm6qidixChLxKzNavQYkJcs=";

        # ignore legacy peer dependencies
        # due to peer conflics in npm deps
        npmInstallFlags = [
          "--legacy-peer-deps"
        ];
      };
}
