{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";
  inputs.nix-github-actions.url = "github:nix-community/nix-github-actions";
  inputs.nix-github-actions.inputs.nixpkgs.follows = "nixpkgs";

  outputs = { self, nixpkgs, flake-utils, nix-github-actions }:

    with nixpkgs.lib;
    with flake-utils.lib;
    with nix-github-actions.lib;

    eachSystem nixpkgs.legacyPackages.x86_64-linux.nodejs.meta.platforms
      (system:

        let
          pkgs = import nixpkgs {
            inherit system;
            overlays = [
              (final: prev: {
                lib = prev.lib // import ./lib.nix { pkgs = final; };
                react = final.callPackage ./packages/react { };
                components = final.callPackage ./packages/components { };
                documentation = final.callPackage ./apps/documentation { };
                storybook = final.callPackage ./packages/components/.storybook { };
              })
            ];
          };
        in

        rec {
          checks = packages;
          formatter = pkgs.nixpkgs-fmt;
          packages = { inherit (pkgs) components documentation react storybook; };
          devShells.default = pkgs.callPackage ./shell.nix { };
        }
      )

    //

    { githubActions = mkGithubMatrix { checks = getAttrs (attrNames githubPlatforms) self.checks; }; };
}
