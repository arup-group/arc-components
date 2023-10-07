with import <nixpkgs> {};

pkgs.mkShell {
  nativeBuildInputs = with pkgs.buildPackages; [ nodejs_18 ];

  shellHook = ''
    export PATH=$PATH:$(npm bin)
  '';
}
