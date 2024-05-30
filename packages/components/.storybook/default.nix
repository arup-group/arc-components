{buildArcPackage}:
buildArcPackage {
  name = "arc-storybook";
  buildPhase = ''
    npx nx run storybook:build
  '';
  installPhase = ''
    mkdir -p $out
    cp -r dist/packages/storybook/* $out
  '';
}
