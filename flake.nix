{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";
  inputs.noxide.url = "github:dominicegginton/noxide";

  outputs = {
    self,
    nixpkgs,
    flake-utils,
    noxide,
  }:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = import nixpkgs {
          inherit system;

          overlays = [
            noxide.overlays.default
          ];
        };

        nodejs = pkgs.nodejs;
      in {
        formatter = pkgs.alejandra;

        packages = rec {
          arc = import ./default.nix {
            inherit (pkgs) noxide;
            inherit nodejs;
          };

          default = arc.components;
        };

        devShells = {
          default = import ./shell.nix {inherit pkgs nodejs;};
          infrastructure = import ./infrastructure/shell.nix {inherit pkgs;};
        };
      }
    );
}
