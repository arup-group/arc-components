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

        packages.arc = {
          components = callPackage ./packages/components { };
          react = callPackage ./packages/react { };
          documentation = callPackage ./documentation { };
        };

        devShells = rec {
          arcDevelopmentShell = callPackage ./shell.nix { };
          arcInfrastructureShell = callPackage ./infrastructure/shell.nix { };
          default = arcDevelopmentShell;
        };
      }
    );
}
