{ pkgs, lib, mkShell, nodejs, prefetch-npm-deps, makeSetupHook, writeScript }:

let

  nodejsShellHook = makeSetupHook
    { name = "nodejs-shell-hook"; substitutions = { npm = "${nodejs}/bin/npm"; }; }
    (writeScript "nodejs-shell-hook.sh" ''
      export PATH=$PATH:$(@npm@ bin)
      export PATH=$PATH:./node_modules/.bin
    '');

in

mkShell {
  inputsFrom = with pkgs; [ components ];
  packages = with pkgs; [ opentofu azure-cli prefetch-npm-deps lib.setup-npm-config ];
  buildInputs = [ nodejsShellHook ];
}
