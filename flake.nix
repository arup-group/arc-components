{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  inputs.noxide.url = "github:dominicegginton/noxide";

  outputs = {
    self,
    nixpkgs,
    noxide,
  }: let
    version = builtins.substring 0 8 self.lastModifiedDate;
    supportedSystems = ["x86_64-linux" "x86_64-darwin"];

    forAllSystems = f:
      nixpkgs.lib.genAttrs supportedSystems (system: f system);

    nixpkgsFor = forAllSystems (system:
      import nixpkgs {
        inherit system;
        config.allowUnfree = true;
        overlays = [
          self.overlays.default
          noxide.overlays.default
        ];
      });

    node = forAllSystems (
      system:
        nixpkgsFor.${system}.nodejs_20
    );
  in {
    formatter = forAllSystems (
      system:
        nixpkgsFor.${system}.alejandra
    );
    overlays = {
      default = final: prev: {
        components = final.noxide.buildPackage ./. {
          buildInputs = with nixpkgsFor.${final.system}; [
            gcc
            python3
          ];
          installCommands = [
            "export npm_config_python=${nixpkgsFor.${final.system}.python3}/bin/python"
            "npm install --loglevel verbose --ignore-scripts"
          ];
        };

        react = final.noxide.buildPackage ./. {
          buildInputs = with nixpkgsFor.${final.system}; [
            gcc
            python3
          ];
          installCommands = [
            "export npm_config_python=${nixpkgsFor.${final.system}.python3}/bin/python"
            "npm install --loglevel verbose --ignore-scripts"
          ];
        };
      };
    };

    packages = forAllSystems (system: {
      inherit (nixpkgsFor.${system}) components react;
    });

    devShells = forAllSystems (system: {
      default = nixpkgsFor.${system}.mkShell {
        packages = with nixpkgsFor.${system}; [
          node.${system}
          google-chrome
        ];
      };

      infrastructure = nixpkgsFor.${system}.mkShell {
        packages = with nixpkgsFor (system: nixpkgs.${system}); [
          node.${system}
          terraform
          terraform-ls
          azure-cli
        ];
      };
    });
  };
}
