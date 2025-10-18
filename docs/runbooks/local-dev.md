# Local Development Runbook

This runbook outlines how to bootstrap a local dev environment for the monorepo.

## Prerequisites
- Node.js 20+
- pnpm 8/9+
- Rust toolchain (rustup + cargo)
- Foundry (forge/cast/anvil)

## Bootstrap

1. Install Node dependencies at repo root:
   - `pnpm install`

2. Install Foundry (if you plan to work on EVM contracts):
   - Follow: https://book.getfoundry.sh/getting-started/installation
   - `foundryup`

3. Build all workspaces:
   - `pnpm run build:all`

## Common Commands

- JS/TS build for all packages: `turbo run build`
- Rust build for all crates: `cargo build --workspace`
- Foundry build (from contracts/evm): `forge build`

## Troubleshooting

- If `cargo` or `forge` are not found, ensure they are installed and on your PATH.
- pnpm workspaces are defined in `pnpm-workspace.yaml`.
- Turborepo pipeline is defined in `turbo.json`.
