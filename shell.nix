{ mkShell
, components
, react
, material
, importNpmLock
, nodejs
, opentofu
, azure-cli
, writers
, writeShellApplication
, sbomnix
, zip
}:

mkShell {
  inputsFrom = [ components react material ];
  npmConfigHook = importNpmLock.npmConfigHook;
  npmDeps = importNpmLock.buildNodeModules {
    inherit nodejs;
    npmRoot = ./.;
    derivationArgs = {
      # ignore legacy peer dependencies
      # due to peer conflicts in npm deps
      npmFlags = [ "--legacy-peer-deps" ];
      # dont run the build scripts when rebuilding
      # npm dependencies as node-keytar will fail
      npmRebuildFlags = [ "--ignore-scripts" ];
    };
  };
  packages = [
    importNpmLock.hooks.linkNodeModulesHook
    opentofu
    azure-cli
    (writeShellApplication {
      name = "deploy-infrastructure";
      runtimeInputs = [ azure-cli opentofu ];
      text = ''
        az login
        tofu -chdir=infrastructure init
        tofu -chdir=infrastructure apply
      '';
    })
    (writers.writeRustBin "setup-npm-config" { } ''
      use std::fs::File;
      use std::io::Write;
      use std::env;

      fn main() {
        let npm_token = env::var("NPM_TOKEN").unwrap();
        let mut file = File::create(".npmrc").unwrap();
        file.write_all(format!("//registry.npmjs.org/:_authToken={}\nregistry=https://registry.npmjs.org/\nalways-auth=true\n", npm_token).as_bytes()).unwrap();
      }
    '')
    (writeShellApplication {
      name = "generate-sbom";
      runtimeInputs = [ sbomnix zip ];
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
    })
  ];
}
