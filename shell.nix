{ pkgs }:

let
  # script to create software carbon report
  software-carbon-report = pkgs.writeShellApplication {
    name = "software-carbon-report";
    text = ''
      npx if-run -m impact-framework.yml -s
    '';
  };
in

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs
    azure-cli
    lsb-release # required for @grnsft/if
    software-carbon-report
  ];

  shellHook = ''
    export PATH=$PATH:$(npm bin)
  '';
}
