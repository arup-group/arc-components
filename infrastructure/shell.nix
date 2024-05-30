{pkgs}:
pkgs.mkShell {
  buildInputs = with pkgs; [
    terraform
    terraform-ls
    azure-cli
  ];
}
