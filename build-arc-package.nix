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
    npmDepsHash = "sha256-jSY4KWr+Z6BmESH5ukbFOlRZcGnht1eB5TmecdkbHb8=";

    npmInstallFlags = [
      # ignore legacy peer dependencies
      # due to peer conflics in npm deps
      "--legacy-peer-deps"
    ];
  }
