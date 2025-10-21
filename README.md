# Monorepo Skeleton

This repository is a polyglot monorepo for fast multi-language development across:
- TypeScript (Node.js apps and SDK)
- Rust (chain services and SDK)
- Solidity (Foundry EVM contracts)

It uses pnpm workspaces and Turborepo for JS/TS orchestration, Cargo for Rust, and Foundry for Solidity.

## Repository Layout

- apps/
  - web/ (Next.js 14 DApp)
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

4) Start and preview apps

- Web: http://localhost:3000
- Admin: http://localhost:3001
- API Gateway: http://localhost:4000

Commands:

```
# 启动单个应用
pnpm run start:web
pnpm run start:admin
pnpm run start:api

# 或并行启动以上三个应用（本地开发演示）
pnpm run start:apps
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
- dev: start the Next.js web app (`pnpm dev` is an alias for `pnpm start:web`)
- dev:all: placeholder
- fmt: prettier formatting
- lint: eslint across the repo

## apps/web – Next.js 14 DApp

This app is a scaffolded web DApp built with:
- Next.js 14 (App Router)
- Tailwind CSS (with shared theme tokens via `@repo/config`)
- wagmi + viem (Ethereum client + WalletConnect)
- Zustand (lightweight state management)
- Telemetry stub (replaceable with OpenTelemetry/browser)
- Test scaffolding (Vitest unit; Playwright config placeholder)

### Run locally

```
# From repo root
pnpm install

# Start the web app (http://localhost:3000)
pnpm dev
# or
pnpm run start:web
```

### Wallet / Chain configuration

The app is pre-configured for a local Anvil node.

Environment variables (place in `apps/web/.env.local` or export in shell):

```
NEXT_PUBLIC_RPC_URL=http://127.0.0.1:8545
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=<your_walletconnect_project_id>
```

Notes:
- If `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` is not set, WalletConnect uses a demo placeholder. For real usage, create a project at https://cloud.walletconnect.com and paste the Project ID.
- Injected wallets (e.g., MetaMask) are also supported for convenience in local dev.

### Pages and navigation

- `/` — Home with Connect Wallet and a mock balance component (Zustand-backed)
- `/wallet` — Wallet connection view with the same components
- `/nft` — Placeholder page for future NFT interactions

### Theming

Tailwind tokens are shared via `@repo/config` and consumed in `apps/web/tailwind.config.ts`. Customize tokens in `packages/config/tailwind/tokens.js`.

### Telemetry

A simple telemetry stub logs pageviews and events to the console. Replace `apps/web/lib/telemetry.ts` with OpenTelemetry/browser wiring when ready.

### Tests

- Unit tests: Vitest config in `apps/web/vitest.config.ts` (add tests in `apps/web` and run `pnpm --filter @repo/web test`)
- E2E tests: `apps/web/playwright.config.ts` is a placeholder; wire Playwright tests under `apps/web/e2e/`.

### Linting and Type-checking

```
# Lint whole repo
pnpm lint

# Type-check web app
pnpm --filter @repo/web typecheck

# Unit tests (root tests run by default)
pnpm test
```

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
