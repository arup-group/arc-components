{buildArcPackage}:
buildArcPackage {
  name = "@arc-web/react";
  buildPhase = ''
    npx nx run react:build
  '';
  installPhase = ''
    mkdir -p $out
    cp -r dist/packages/react/* $out
  '';
}
