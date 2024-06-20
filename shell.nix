{ pkgs }:

pkgs.mkShell {
  buildInputs = with pkgs; [ nodejs azure-cli ];

  shellHook = ''
    export PATH=$PATH:$(npm bin)
  '';
}
