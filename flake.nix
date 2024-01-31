{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/master";
  inputs.systems.url = "github:nix-systems/default";

  outputs = {
    self,
    nixpkgs,
    flake-utils,
    systems,
    ...
  }:
    flake-utils.lib.eachSystem (import systems) (
      system: let
        inherit (pkgs.stdenv) isLinux;
        inherit (pkgs.lib) optional;

        pkgs = import nixpkgs {
          inherit system;
          # allow unfree packages required for:
          # - terraform
          # - google-chrome
          config.allowUnfree = true;
        };

        node = pkgs.nodejs_18;

        src = ./.;

        package = builtins.fromJSON (builtins.readFile (src + "/package.json"));
        package-lock = builtins.fromJSON (builtins.readFile (src + "/package-lock.json"));
        componentsPackage = builtins.fromJSON (builtins.readFile (src + "/packages/components/package.json"));
        reactPackage = builtins.fromJSON (builtins.readFile (src + "/packages/react/package.json"));
        name = "arc";

        deps = pkgs.lib.attrValues (removeAttrs package-lock.packages [
          ""
          # remove local dependencies
          "node_modules/@arc-web/components"
          "node_modules/@arc-web/react"
          "@arc-web/components"
          "@arc-web/react"
          "packages/components"
          "packages/react"
        ]);

        tarballs = map (dep:
          pkgs.fetchurl {
            url = dep.resolved;
            hash = dep.integrity;
          })
        deps;

        cacache =
          pkgs.runCommand "${name}-cacache" {
            passAsFile = ["tarballs"];
            tarballs = pkgs.lib.concatLines tarballs;
          }
          ''
            while read -r tarball; do
              echo "caching $tarball" >&2
              ${node}/bin/npm cache add --cache . "$tarball"
            done < "$tarballsPath"
            ${pkgs.coreutils}/bin/cp -r _cacache $out
          '';

        node_modules = pkgs.stdenv.mkDerivation {
          name = "${name}-node_modules";
          src = pkgs.runCommand "${name}-node-modules-src" {} ''
            mkdir -p $out/.npm
            ln -s ${src} $out/
            ln -s ${cacache} $out/.npm/_cacache
            ln -s ${src + "/package-lock.json"} $out/package-lock.json
          '';
          buildInputs = [node];
          outputs = ["out" "dev"];
          buildPhase = ''
            export HOME=$PWD
            export PATH=$PATH:$PWD/node_modules/.bin
            npm ci --ignore-scripts --no-audit
            mv node_modules $dev
            npm ci --ignore-scripts --no-audit -omit=dev
            mv node_modules $out
            chmod -R +w $out
            chmod -R +w $dev
          '';
        };

        copyNodeModules = ''
          rm -fR node_modules
          cp -r ${node_modules.dev} node_modules
          chmod -R +w node_modules
          export PATH=$PATH:$PWD/node_modules/.bin
        '';

        buildInputs = [node];
      in {
        formatter = pkgs.writeShellApplication {
          name = "${name}-formatter";
          runtimeInputs = with pkgs; [alejandra] ++ buildInputs;
          text = ''
            ${copyNodeModules}
            alejandra --exclude ./node_modules .
            npx nx format:write
            npx nx run-many --target=lint:fix,fmt
          '';
        };

        packages = {
          components = pkgs.stdenv.mkDerivation {
            inherit src buildInputs;
            pname = "${name}-components";
            version = "v${componentsPackage.version}";
            buildPhase = ''
              ${copyNodeModules}
              npx nx run components:build
            '';
            installPhase = ''
              mkdir $out
              cp -r dist/packages/components/components $out
              chmod -R +w $out
            '';
          };

          react = pkgs.stdenv.mkDerivation {
            inherit src buildInputs;
            pname = "${name}-react";
            version = "v${reactPackage.version}";
            buildPhase = ''
              ${copyNodeModules}
              npx nx run react:build
            '';
            installPhase = ''
              mkdir $out
              cp -r dist/packages/react/react $out
              chmod -R +w $out
            '';
          };

          storybook = pkgs.stdenv.mkDerivation {
            inherit src buildInputs;
            pname = "${name}-storybook";
            version = "v${componentsPackage.version}";
            buildPhase = ''
              ${copyNodeModules}
              npx nx run components:storybook:build
            '';
            installPhase = ''
              mkdir $out
              cp -r dist/packages/components/storybook-static $out
              chmod -R +w $out
            '';
          };

          linter = pkgs.writeShellApplication {
            name = "${name}-linter";
            runtimeInputs = with pkgs; [alejandra] ++ buildInputs;
            text = ''
              ${copyNodeModules}
              alejandra --check --exclude ./node_modules .
              npx nx format:check
              npx nx run-many --target=lint
            '';
          };

          playgrounds = pkgs.stdenv.mkDerivation {
            inherit src buildInputs;
            pname = "${name}-playgrounds";
            version = "v${componentsPackage.version}";
            buildPhase = ''
              ${copyNodeModules}
              npx nx run-many --target=build --projects=playgrounds
            '';
            installPhase = ''
              mkdir $out
              cp -r dist/packages/components/playgrounds $out
              chmod -R +w $out
            '';
          };
        };

        devShells = let
          shellHook = ''
            ${copyNodeModules}
            echo "Welcome to the ${name}!"
            echo "Please read the CONTRIBUTING.md file before making changes."
          '';
        in {
          default = pkgs.mkShell {
            # todo: add dep for google-chrome
            # on darwin hosts
            packages = with pkgs;
              [node]
              ++ optional isLinux [google-chrome];

            shellHook = ''
              ${shellHook}
              # todo: remove once google-chrome is added as a dep
              if [[ $(uname) == "Darwin" ]]; then
                # if google-chrome is not installed
                if ! command -v google-chrome &> /dev/null; then
                  echo "Please install google-chrome to run the ${name} dev shell."
                  echo "https://www.google.com/chrome/"
                fi
              fi
            '';
          };

          infratructure = pkgs.mkShell {
            inherit shellHook;
            packages = with pkgs; [
              node
              terraform
              terraform-ls
              azure-cli
            ];
          };
        };
      }
    );
}
