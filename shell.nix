{ pkgs, mkShell, prefetch-npm-deps }:

mkShell {
  inputsFrom = with pkgs; [ components ];
  packages = with pkgs; [ opentofu azure-cli ];
  shellHook = ''
    export PATH=$PATH:$(npm bin)
  '';
}
