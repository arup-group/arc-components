{ buildNpmPackage }: 

buildNpmPackage {
  name = "documentation";
  buildPhase = ''
    npx nx run documentation:build
  '';
  installPhase = ''
    mkdir -p $out
    cp -r dist/documentation/* $out
  '';
}
