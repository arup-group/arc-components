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
        npmDepsHash = "sha256-fFtpvA2IpYxDHlPJuvgkgx/sQDBdCWvIv9vGwSM6Q7o=";

        # dont run the build scripts when rebuilding
        # npm dependencies as node-keytar will fail
        npmRebuildFlags = [ "--ignore-scripts" ];

        # ignore legacy peer dependencies
        # due to peer conflics in npm deps
        npmInstallFlags = [ "--legacy-peer-deps" ];
      };

  # writes the npm config file with the NPM_TOKEN
  setup-npm-config = writers.writeRustBin "setup-npm-config" { } ''
    use std::fs::File;
    use std::io::Write;
    use std::env;

    fn main() {
      let npm_token = env::var("NPM_TOKEN").unwrap();
      let mut file = File::create(".npmrc").unwrap();
      file.write_all(format!("//registry.npmjs.org/:_authToken={}\nregistry=https://registry.npmjs.org/\nalways-auth=true\n", npm_token).as_bytes()).unwrap();
    }
  '';

  # script to generate sbom, vulerability scan &
  # list of outdated nix packages dependencies
  generate-sbom = pkgs.writeShellApplication {
    name = "generate-sbom";
    runtimeInputs = with pkgs; [ sbomnix zip ];
    text = ''
      sbomnix .#components --buildtime --depth 2
      nixgraph .#components --buildtime --depth 2
      vulnxscan .#components --buildtime
      nix_outdated .#components --buildtime

      mkdir -p ./reports
      mv sbom.cdx.json ./reports/components-sbom.cdx.json
      mv sbom.csv ./reports/components-sbom.csv
      mv sbom.spdx.json ./reports/components-sbom.spdx.json
      mv graph.png ./reports/components-graph.png
      mv vulns.csv ./reports/components-vulns.csv
      mv nix_outdated.csv ./reports/components-nix_outdated.csv

      sbomnix .#react --buildtime --depth 2
      nixgraph .#react --buildtime --depth 2
      vulnxscan .#react --buildtime
      nix_outdated .#react --buildtime

      mkdir -p ./reports
      mv sbom.cdx.json ./reports/react-sbom.cdx.json
      mv sbom.csv ./reports/react-sbom.csv
      mv sbom.spdx.json ./reports/react-sbom.spdx.json
      mv graph.png ./reports/react-graph.png
      mv vulns.csv ./reports/react-vulns.csv
      mv nix_outdated.csv ./reports/react-nix_outdated.csv

      zip -r reports.zip ./reports
    '';
  };
}
