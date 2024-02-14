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
            npmCommands = [ "npm ci --ignore-scripts" ];
            installPhase = ''
              ${pkgs.coreutils}/bin/mkdir -p dist
              npx nx run components:prebuild

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
