{ lib }:

lib.buildArcPackage {
  name = "react";

  # run the react build script
  buildPhase = ''
    npx nx run react:build
  '';

  installPhase = ''
    mkdir -p $out
    cp -r dist/packages/react/* $out
  '';
}
