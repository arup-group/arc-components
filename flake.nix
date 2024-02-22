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
      default = final: prev: let
        npmCommands = ["npm install --loglevel=verbose --no-fund --ignore-scripts"];
        nodejs = node.${final.system};
      in {
        components = final.noxide.buildPackage ./. {
          inherit npmCommands nodejs;
          postNpmHook = ''
            npx nx run components:build
          '';
          installPhase = ''
            mkdir -p $out
            cp -r dist/packages/components/* $out
          '';
        };

        react = final.noxide.buildPackage ./. {
          inherit npmCommands nodejs;
          postNpmHook = ''
            npx nx run react:build
          '';
          installPhase = ''
            mkdir -p $out
            cp -r dist/packages/react/* $out
          '';
        };

        storybook = final.noxide.buildPackage ./. {
          inherit npmCommands nodejs;
          postNpmHook = ''
            npx nx run components:storybook:build
          '';
          installPhase = ''
            mkdir -p $out
            cp -r dist/packages/storybook/* $out
          '';
        };
      };
    };

    packages = forAllSystems (system: {
      inherit (nixpkgsFor.${system}) components react storybook;
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
