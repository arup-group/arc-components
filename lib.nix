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
        version =
          if componentsPackageJson.version == reactPackageJson.version
          then componentsPackageJson.version
          else throw "version mismatch";


        # this workspace is a monorepo and all dependencies
        # are resolved via the workspace root package.json
        src = cleanSource ./.;
        npmDepsHash = "sha256-KUwZX369yhjIInrkjH6qKnM22ViJ3UscOQQdetlgZjE=";

        # dont run the build scripts when rebuilding
        # npm dependencies as node-keytar will fail
        npmRebuildFlags = [ "--ignore-scripts" ];

        # ignore legacy peer dependencies
        # due to peer conflics in npm deps
        npmInstallFlags = [ "--legacy-peer-deps" ];
      };
}
