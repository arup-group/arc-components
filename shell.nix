{ pkgs }:
pkgs.mkShell {
  buildInputs = with pkgs; [ nodejs azure-cli ];

  shellHook = ''
    # add node modules binaries to PATH
    export PATH=$PATH:./node_modules/.bin
  '';
}
