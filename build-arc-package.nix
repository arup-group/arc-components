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
    npmDepsHash = "sha256-gqx8pPnDS3Xr13VJkBEuO+oPwqZT3ZFO8teugpef4us=";
    npmInstallFlags = ["--ignore-scripts" "--legacy-peer-deps"];
  }
