{ lib }:

lib.buildArcPackage {
  name = "material";

  # run the material build script
  buildPhase = ''
    npx nx run material:build
  '';

  installPhase = ''
    mkdir -p $out
    cp -r dist/packages/material/* $out
  '';
}
