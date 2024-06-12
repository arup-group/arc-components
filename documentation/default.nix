{ pkgs }:

let
  lib = import ../lib.nix { inherit pkgs; };
in

with lib;

buildArcPackage {
  name = "documentation";

  # run the documentation build script
  buildPhase = ''
    npx nx run documentation:build
  '';

  installPhase = ''
    mkdir -p $out
    cp -r dist/packages/docs/* $out
  '';
}
