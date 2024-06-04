{buildArcPackage}:
buildArcPackage {
  name = "arc-documentation";
  buildInputs = [pkgs.python3];
  buildPhase = ''
    npx nx run docs:build
  '';
  installPhase = ''
    mkdir -p $out
    cp -r dist/packages/docs/* $out
  '';
}
