{ buildNpmPackage }:

buildNpmPackage {
  name = "material";
  buildPhase = ''
    npx nx run material:build
  '';
  installPhase = ''
    mkdir -p $out
    cp -r dist/packages/material/* $out
  '';
}
