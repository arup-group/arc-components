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
    npmDepsHash = "sha256-Clv6fGOFoaFJi8Xo6wjmmm6qidixChLxKzNavQYkJcs=";

    npmInstallFlags = [
      # ignore legacy peer dependencies
      # due to peer conflics in npm deps
      "--legacy-peer-deps"
    ];
  }
