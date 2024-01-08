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
        inherit (pkgs.stdenv) isLinux;
        inherit (pkgs.lib) optional;

        # Import nix packages for system
        pkgs = import nixpkgs {
          inherit system;

          # Allow unfree packages
          # Required for google-chrome
          config.allowUnfree = true;
        };

        # Set nodejs version
        node = pkgs.nodejs_18;

        # Derivation to install dependencies required for development
        clean-install = pkgs.writeShellApplication {
          name = "clean-install";
          runtimeInputs = [node];
          text = ''
            rm -rf node_modules
            rm -rf .angular
            rm -rf coverage
            rm -rf dist
            rm -rf tmp
            npm ci
          '';
        };

        # Derivation to format all workspace files
        formatter = pkgs.writeShellApplication {
          name = "formatter";
          runtimeInputs = with pkgs; [
            alejandra
            node
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
        # Formatter to format all workspace files
        formatter = formatter;

        # Buildable packages
        packages = {
          clean-install = clean-install;
        };

        # Development shell
        devShells.default = pkgs.mkShell {
          packages = with pkgs;
            [
              node
              terraform
              azure-cli
              clean-install
            ]
            ++ optional isLinux [google-chrome];
          shellHook = ''export PATH=$PATH:$(npm bin)'';
        };
      }
    );
}
