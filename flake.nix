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

    # The node package to use for this workspace.
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
        # Ignore scripts when installing npm packages to avoid encountering issues
        # with the postinstall scripts of some packages.
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

    devShells = forAllSystems (system: let
      pkgs = nixpkgsFor.${system};
      inherit (pkgs) mkShell;
      inherit (pkgs.stdenv) isLinux;
      inherit (pkgs.lib) optional;
    in {
      # The default development shell for this
      # workspace. Google Chrome is required for
      # running tests on the components package.
      # The nixpkgs.google-chrome package is only
      # available on Linux systems so we use the
      # optional function to conditionally include
      # it. Please ensure that your system has
      # Google Chrome installed if you are using
      # a different system than Linux.
      default = mkShell {
        packages = with pkgs;
          [node.${system}]
          ++ optional isLinux [google-chrome];

        shellHook = ''
          ${pkgs.lib.optionalString (!isLinux) ''
            echo "Google Chrome is required for running tests on the components package."
            echo "Please ensure that your system has Google Chrome installed."
          ''}
        '';
      };

      # A shell for interacting with infrastructure
      # defined within this workspace.
      infrastructure = mkShell {
        packages = with pkgs; [
          node.${system}
          terraform
          terraform-ls
          azure-cli
        ];
      };
    });
  };
}
