# Monorepo Skeleton

This repository is a polyglot monorepo for fast multi-language development across:
- TypeScript (Node.js apps and SDK)
- Rust (chain services and SDK)
- Solidity (Foundry EVM contracts)

It uses pnpm workspaces and Turborepo for JS/TS orchestration, Cargo for Rust, and Foundry for Solidity.

## Repository Layout

- apps/
  - web/ (TS placeholder)
  - admin/ (TS placeholder)
  - api-gateway/ (TS placeholder)
  - indexer/ (TS placeholder)
  - relayer-aa/ (TS placeholder)
  - ai-agent/ (TS placeholder)
- chain/
  - nms-node/ (Rust bin placeholder)
  - crypto/ (Rust lib placeholder)
- contracts/
  - evm/ (Foundry workspace)
- sdk/
  - ts/ (TypeScript SDK placeholder)
  - rust/
    - core/ (Rust lib placeholder)
- infra/
  - docker/
  - helm/
  - k8s/
- docs/
  - rfcs/
  - api/
  - arch/
  - runbooks/
- tools/ (utility scripts and dev tools)

## Prerequisites

- Node.js 20+
- pnpm 8/9+ (recommended)
- Rust toolchain (rustup + cargo)
- Foundry (forge/cast/anvil) — install via `foundryup`

## Quick Start

1) Clone the repo

2) Bootstrap dependencies

```
pnpm install
```

3) Build everything (JS/TS via turbo, Rust workspace, Foundry contracts if installed)

```
pnpm run build:all
```

4) Development (placeholder)

```
pnpm run dev:all
```

Notes:
- If `cargo` or `forge` are not installed locally, the `build:all` script will skip those steps with a message.

## Workspace Managers

- Node: pnpm workspaces + Turborepo
  - Root config: `package.json`, `pnpm-workspace.yaml`, `turbo.json`, `tsconfig.base.json`
- Rust: Cargo workspaces
  - Root config: `Cargo.toml` with members `chain/*` and `sdk/rust/*`
- Solidity: Foundry workspace
  - Config: `contracts/evm/foundry.toml`

## Scripts (root)

- setup: installs Node deps and prints Foundry install instructions
- build:all: runs `turbo run build`, `cargo build --workspace` (if installed), and `forge build` (if installed)
- dev:all: placeholder
- fmt: placeholder
- lint: placeholder

## Roadmap / Next Steps

- Wire up real apps in `apps/*` (web, admin, api-gateway, indexer, relayer-aa, ai-agent)
- Add ESLint/Prettier, commit hooks, and CI workflows
- Expand SDKs and cross-language integration
- Add deployment configs in `infra/`

## Foundry setup

Install Foundry: https://book.getfoundry.sh/getting-started/installation

From `contracts/evm`, you can add dependencies (e.g., OpenZeppelin) with:

```
forge install OpenZeppelin/openzeppelin-contracts
```

Then build:

```
forge build
```
