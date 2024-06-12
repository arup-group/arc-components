{ pkgs }:

let
  lib = import ../lib.nix { inherit pkgs; };
in

with lib;

buildArcPackage {
  name = "storybook";

  # run the storybook build script
  buildPhase = ''
    npx nx run storybook:build
  '';

  installPhase = ''
    mkdir -p $out
    cp -r dist/packages/storybook/* $out
  '';
}
