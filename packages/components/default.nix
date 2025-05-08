{ buildNpmPackage }:

buildNpmPackage {
  name = "components";
  buildPhase = ''
    npx nx run components:build
  '';
  installPhase = ''
    mkdir -p $out
    cp -r dist/packages/components/* $out
  '';
  meta.description = "ARC Components";
}
