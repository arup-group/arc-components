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
        pkgs = import nixpkgs {
          inherit system;
          config.allowUnfree = true;
        };

        nodejs = pkgs.nodejs_18;

        clean-install = pkgs.writeShellApplication {
          name = "clean-install";
          runtimeInputs = [nodejs];
          text = ''
            rm -rf node_modules
            rm -rf .angular
            rm -rf coverage
            rm -rf dist
            rm -rf tmp
            npm ci
            npx playwright install-deps
          '';
        };
      in {
        formatter = pkgs.alejandra;

        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs
            terraform
            azure-cli
            clean-install
          ];
          shellHook = ''export PATH=$PATH:$(npm bin)'';
        };
      }
    );
}
