{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs =
    { self
    , nixpkgs
    , flake-utils
    ,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
        inherit (pkgs) callPackage;
      in
      {
        formatter = pkgs.nixpkgs-fmt;

        packages = {
          react = callPackage ./packages/react { };
          components = callPackage ./packages/components { };
          documentation = callPackage ./documentation { };
          storybook = callPackage ./packages/components/.storybook { };
        };

        devShells = {
          default = callPackage ./shell.nix { };
          infrastructure = callPackage ./infrastructure/shell.nix { };
        };
      }
    );
}
