{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = {
    self,
    nixpkgs,
    flake-utils,
  }:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = import nixpkgs {inherit system;};
        buildArcPackage = import ./build-arc-package.nix {inherit pkgs;};
        arcPackages = {
          components = import ./packages/components/default.nix {inherit buildArcPackage;};
          react = import ./packages/react/default.nix {inherit buildArcPackage;};
        };
        arcDocumentation = import ./apps/docs/default.nix {inherit buildArcPackage;};
        arcDevelopmentShell = import ./shell.nix {inherit pkgs;};
        arcInfrastructureShell = import ./infrastructure/shell.nix {inherit pkgs;};
      in {
        formatter = pkgs.alejandra;
        packages = rec {
          inherit arcPackages arcDocumentation;
          default = arcPackages.components;
        };
        devShells = rec {
          inherit arcDevelopmentShell arcInfrastructureShell;
          default = arcDevelopmentShell;
        };
      }
    );
}
