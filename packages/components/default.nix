{buildArcPackage}:
buildArcPackage {
  name = "@arc-web/components";
  buildPhase = ''
    npx nx run components:build
  '';
  installPhase = ''
    mkdir -p $out
    cp -r dist/packages/components/* $out
  '';
}
