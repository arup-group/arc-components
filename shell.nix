with import <nixpkgs> {};

pkgs.mkShell {
  nativeBuildInputs = with pkgs.buildPackages; [
    nodejs_18
    terraform
    azure-cli
  ];

  shellHook = ''
    export PATH=$PATH:$(npm bin)
  '';
}
