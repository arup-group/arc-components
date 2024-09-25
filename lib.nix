{ pkgs, writers }:

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
        npmDepsHash = "sha256-q3e3I3fgbr9rsQsXUR/Xs9+fGnJKv54tovx4zLPmphA=";

        # dont run the build scripts when rebuilding
        # npm dependencies as node-keytar will fail
        npmRebuildFlags = [ "--ignore-scripts" ];

        # ignore legacy peer dependencies
        # due to peer conflics in npm deps
        npmInstallFlags = [ "--legacy-peer-deps" ];
      };

  # writes the npm config file with the NPM_TOKEN
  setup-npm-config = writers.writeRustBin "setup-npm-config" {} ''
    use std::fs::File;
    use std::io::Write;
    use std::env;

    fn main() {
      let npm_token = env::var("NPM_TOKEN").unwrap();
      let mut file = File::create(".npmrc").unwrap();
      file.write_all(format!("//registry.npmjs.org/:_authToken={}\n", npm_token).as_bytes()).unwrap();
    }
  '';
}
