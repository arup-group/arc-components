{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs =
    { nixpkgs, flake-utils, ... }:

      with flake-utils.lib;

      eachDefaultSystem (system:

      let
        pkgs = import nixpkgs { inherit system; };
      in

      rec {
        checks = legacyPackages;
        formatter = pkgs.nixpkgs-fmt;
        legacyPackages = {
          react = pkgs.callPackage ./packages/react { };
          components = pkgs.callPackage ./packages/components { };
          documentation = pkgs.callPackage ./documentation { };
          storybook = pkgs.callPackage ./packages/components/.storybook { };
        };
        devShells = {
          default = pkgs.callPackage ./shell.nix { };
          infrastructure = pkgs.callPackage ./infrastructure/shell.nix { };
        };
      }
      );
}
