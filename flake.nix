{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";
  inputs.nix-github-actions.url = "github:nix-community/nix-github-actions";
  inputs.nix-github-actions.inputs.nixpkgs.follows = "nixpkgs";

  nixConfig = {
    substituters = [ "https://arup-group-arc-components.cachix.org" ];
    trusted-public-keys = [ "arup-group-arc-components.cachix.org-1:/e9giLE0vuWhodoWCzibaAgv1rXwsUArAhcKYABiQ7k=" ];
  };

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
                lib = prev.lib // { maintainers = prev.lib.maintainers // { arup = { name = "Arup"; }; }; };
                buildNpmPackage =
                  let
                    componentsPackageJson = importJSON ./packages/components/package.json;
                    reactPackageJson = importJSON ./packages/react/package.json;
                    materialPackageJson = importJSON ./packages/material/package.json;
                  in

                  assert componentsPackageJson.version == reactPackageJson.version;
                  assert componentsPackageJson.version == materialPackageJson.version;
                  assert reactPackageJson.peerDependencies."@arc-web/components" == "${componentsPackageJson.version}";
                  assert materialPackageJson.peerDependencies."@arc-web/components" == "${componentsPackageJson.version}";

                  attrs @ { name, buildPhase, installPhase, ... }:

                  prev.buildNpmPackage ((builtins.removeAttrs attrs [ "name" ]) // rec {
                    inherit buildPhase installPhase;
                    pname = "arc-web-${name}";
                    version = componentsPackageJson.version;
                    src = prev.lib.sources.cleanSource ./.;
                    npmConfigHook = prev.importNpmLock.npmConfigHook;
                    npmDeps = prev.importNpmLock {
                      npmRoot = src;
                    };
#                    npmRebuildFlags = [ "--ignore-scripts" ];
                    npmInstallFlags = [ "--legacy-peer-deps" ];
                    meta = (attrs.meta or { }) // {
                      license = prev.lib.licenses.mit;
                      maintainers = [ prev.lib.maintainers.arup ];
                    };
                  });
                components = final.callPackage ./packages/components { };
                react = final.callPackage ./packages/react { };
                material = final.callPackage ./packages/material { };
                documentation = final.callPackage ./documentation { };
              })
            ];
          };
        in

        rec {
          checks = packages;
          formatter = pkgs.nixpkgs-fmt;
          packages = { inherit (pkgs) components react material documentation; };
          devShells.default = pkgs.callPackage ./shell.nix { };
        }
      )

    //

    { githubActions = mkGithubMatrix { checks = getAttrs (attrNames githubPlatforms) self.checks; }; };
}
