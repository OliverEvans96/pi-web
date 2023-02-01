{
  inputs = {
    nixpkgs.url = "nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        # pkgs = nixpkgs.legacyPackages.${system};
        pkgs = import nixpkgs {
          inherit system;
          config.allowUnfree = true;
        };
        my-vscode = with pkgs;
          vscode-with-extensions.override {
            vscodeExtensions = with vscode-extensions; [
              vscodevim.vim
              astro-build.astro-vscode
            ];
          };
        deps = with pkgs; [
          nodejs
          my-vscode
        ];
        nodeDeps = with pkgs.nodePackages; [ yarn ];
        allDeps = deps ++ nodeDeps;
      in rec {
        packages.default = pkgs.hello;
        defaultPackage = packages.default;

        devShell = pkgs.mkShell {
          name = "astro-nix-shell";
          src = ./.;

          # build-time deps
          nativeBuildInputs = allDeps;
        };
      });
}
