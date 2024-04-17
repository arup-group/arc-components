{
  noxide,
  nodejs,
}:
with noxide; let
  npmInstall = "npm install --ignore-scripts --legacy-peer-deps";
in {
  components = buildPackage ./. rec {
    npmCommands = [
      npmInstall
      "npx nx run components:build"
    ];
    installPhase = ''
      mkdir -p $out
      cp -r dist/packages/components/* $out
    '';
  };

  react = buildPackage ./. rec {
    npmCommands = [
      npmInstall
      "npx nx run react:build"
    ];
    installPhase = ''
      mkdir -p $out
      cp -r dist/packages/react/* $out
    '';
  };

  stroybook = buildPackage ./. rec {
    npmCommands = [
      npmInstall
      "npx nx run storybook:build"
    ];
    installPhase = ''
      mkdir -p $out
      cp -r dist/packages/storybook/* $out
    '';
  };

  docs = buildPackage ./. rec {
    npmCommands = [
      npmInstall
      "npx nx run docs:build"
    ];
    installPhase = ''
      mkdir -p $out
      cp -r dist/packages/docs/* $out
    '';
  };
}
