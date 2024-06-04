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
    npmDepsHash = "sha256-BzSjmtT7/sNZ4Hd4KT/SYZ3kTnKzMI42LiJcLvKA3gY=";

    npmInstallFlags = [
      # ignore legacy peer dependencies
      # due to peer conflics in npm deps
      "--legacy-peer-deps"
    ];
  }
