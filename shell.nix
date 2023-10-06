with import <nixpkgs> {};

pkgs.mkShell {
  name = "arc-development-enviroment";
  buildInputs = [ nodejs-slim ];
  shellHook = ''
    export PATH=$PATH:$(npm bin)
    npm install
  '';
}
