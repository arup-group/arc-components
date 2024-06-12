{pkgs}:
pkgs.mkShell {
  buildInputs = with pkgs; [
    opentofu
    azure-cli
  ];
}
