{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/master";
  inputs.systems.url = "github:nix-systems/default";
  inputs.napalm.url = "github:nix-community/napalm";

  outputs = {
    self,
    nixpkgs,
    flake-utils,
    systems,
    napalm,
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

        nodejs = pkgs.nodejs_18;
      in {
        packages = {
          components = napalm.legacyPackages.${system}.buildPackage ./. {
            inherit nodejs;
            installPhase = ''
              ${pkgs.coreutils}/bin/mkdir -p dist
              echo "Prebuilding components"
              npx nx run components:prebuild
              echo "Building components"
              npx nx run components:prebuild
              npx custom-elements-manifest analyze --litelement --globs \"dist/packages/components/src/**/*.js\" --outdir \"dist/packages/components\"

              ${pkgs.coreutils}/bin/mkdir -p $out
              ${pkgs.coreutils}/bin/mv dist $out
            '';
          };
        };

        devShells = {
          default = pkgs.mkShell {
            # todo: add dep for google-chrome
            # on darwin hosts
            packages = with pkgs;
              [nodejs]
              ++ optional isLinux [google-chrome];
          };

          infratructure = pkgs.mkShell {
            packages = with pkgs; [
              nodejs
              terraform
              terraform-ls
              azure-cli
            ];
          };
        };
      }
    );
}
