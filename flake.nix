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
          installCommands = ["npm ci --ignore-scirpts"];
        };

        react = final.noxide.buildPackage ./. {
          installCommands = ["npm ci --ignore-scirpts"];
        };
      };
    };

    packages = forAllSystems (system: {
      inherit (nixpkgsFor.${system}) components react;
      components = self.packages.${system}.components;
      react = self.packages.${system}.react;
    });

    devShells = forAllSystems (system: {
      default = nixpkgsFor.${system}.mkShell {
        packages = [node.${system}];
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
