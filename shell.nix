with import <nixpkgs> { config.allowUnfree = true; };

let
  clean-install = pkgs.writeShellApplication {
    name = "clean-install";
    runtimeInputs = with pkgs; [
      nodejs_18
    ];
    text = ''
      rm -rf node_modules
      rm -rf .angular
      rm -rf coverage
      rm -rf dist
      rm -rf tmp
      npm ci
      npx playwright install-deps
    '';
  };
in

pkgs.mkShell {
  nativeBuildInputs = with pkgs.buildPackages; [
    git
    nodejs_18
    terraform
    azure-cli
    clean-install
  ];

  shellHook = ''
    export PATH=$PATH:$(npm bin)
  '';
}
