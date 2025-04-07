{ lib }:

lib.buildArcPackage {
  name = "documentation";

  # run the storybook build script
  buildPhase = ''
    npx nx run documentation:build
  '';

  installPhase = ''
    mkdir -p $out
    cp -r dist/documentation/* $out
  '';
}
