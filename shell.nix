{ pkgs, lib, mkShell, nodejs, prefetch-npm-deps, makeSetupHook, writeScript }:

let
  nodejsShellHook = makeSetupHook
    { name = "nodejs-shell-hook"; }
    (writeScript "nodejs-shell-hook.sh" ''export PATH=$PATH:./node_modules/.bin'');
in

mkShell {
  buildInputs = [ nodejsShellHook ];
  inputsFrom = with pkgs; [ components react ];
  packages = with pkgs; [
    opentofu
    azure-cli
    prefetch-npm-deps
    lib.setup-npm-config
    lib.generate-sbom
  ];
}
