{ pkgs }:

let
  lib = import ../lib.nix { inherit pkgs; };
in

with lib;

buildArcPackage {
  name = "components";

  # run the components build script
  buildPhase = ''
    npx nx run components:build
  '';

  installPhase = ''
    mkdir -p $out
    cp -r dist/packages/components/* $out
  '';
}
