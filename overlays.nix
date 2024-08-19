_:

{
  default = final: prev: {
    lib = prev.lib // import ./lib.nix { pkgs = final; };
    react = final.callPackage ./packages/react { };
    components = final.callPackage ./packages/components { };
    documentation = final.callPackage ./documentation { };
    storybook = final.callPackage ./packages/components/.storybook { };
  };
}
