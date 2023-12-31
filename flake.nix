{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11";
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
          '';
        };

        formatter = pkgs.writeShellApplication {
          name = "formatter";
          runtimeInputs = with pkgs; [
            alejandra
            nodejs_18
            terraform
            terraform-ls
          ];

          text = ''
            alejandra format . --exclude node_modules
            npm install
            npx nx format:write
            npx nx run-many --target=lint:fix,fmt
          '';
        };
      in {
        formatter = formatter;

        utils.clean-install = clean-install;

        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs
            terraform
            azure-cli
            clean-install
            google-chrome
          ];
          shellHook = ''export PATH=$PATH:$(npm bin)'';
        };
      }
    );
}
