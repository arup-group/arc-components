{pkgs}: {
  name,
  buildPhase,
  installPhase,
}:
with pkgs.lib;
  pkgs.buildNpmPackage {
    inherit
      name
      buildPhase
      installPhase
      ;

    src = sources.cleanSource ./.;
    npmDepsHash = "sha256-Nvne0wDdYzXa3G2iP+wtYjXoemmYj5wViCT5tU3JiX0=";

    npmInstallFlags = [
      # ignore legacy peer dependencies
      # due to peer conflics in npm deps
      "--legacy-peer-deps"
    ];
  }
