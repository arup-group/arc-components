{ buildNpmPackage }:

buildNpmPackage {
  name = "react";
  buildPhase = ''
    npx nx run react:build
  '';
  installPhase = ''
    mkdir -p $out
    cp -r dist/packages/react/* $out
  '';
  meta.description = "ARC React Components";
}
