{
  pkgs,
  nodejs,
}:
with pkgs;
  mkShell {
    buildInputs = [
      nodejs
    ];
  }
