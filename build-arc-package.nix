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
    npmDepsHash = "sha256-isXDhfCDggMIy4hZ3uwGC2i3QpoWsWXCi5Yi/YEWtL8=";

    npmInstallFlags = [
      # ignore legacy peer dependencies
      # due to peer conflics in npm deps
      "--legacy-peer-deps"
    ];
  }
