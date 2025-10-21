# CI/CD and Security Baseline

This repository includes a minimal, language-aware CI/CD and security baseline to keep the monorepo healthy.

## Workflows

- Node CI (.github/workflows/node.yml)
  - pnpm install, eslint, prettier (check), vitest, turbo build
- Rust CI (.github/workflows/rust.yml)
  - cargo fmt (check), cargo clippy (-D warnings), cargo test (workspace)
- Solidity CI (.github/workflows/solidity.yml)
  - forge fmt (check), forge build, forge test
- CodeQL (.github/workflows/codeql.yml)
  - CodeQL configured for JavaScript/TypeScript
  - Placeholder jobs for Rust and Solidity (CodeQL does not support Solidity; Rust support may vary). Consider adding Slither/Mythril for Solidity and additional Rust analyzers as needed.
- Security Baseline (.github/workflows/security.yml)
  - gitleaks secret scanning
  - JS license and vulnerability checks (license-checker summary, pnpm audit)

All workflows are designed to pass with the provided skeleton code.

## Local Tooling

- ESLint/Prettier configured at repo root.
- TypeScript base config shared via tsconfig.base.json.
- rustfmt and Clippy configured via rustfmt.toml and Clippy.toml.
- Foundry configured via contracts/evm/foundry.toml.
- Husky hooks:
  - pre-commit: Prettier check + ESLint
  - commit-msg: commitlint (Conventional Commits)

Run common tasks from the repo root:

- pnpm run format:check / pnpm run format
- pnpm run lint
- pnpm run test
- pnpm run build

## Recommended Branch Protection

Enable the following on protected branches (e.g., main):

- Require a pull request before merging
  - At least 1 code review approval
  - Dismiss stale reviews on new commits
- Require status checks to pass before merging
  - Node CI: Lint, Format (check), Test, Build
  - Rust CI: Format (check), Clippy, Test
  - Solidity CI: Format (check), Build, Test
  - CodeQL: JavaScript/TypeScript analysis
  - Security Baseline: Secret scanning, JS license/audit checks
- Require branch to be up to date before merging
- Require signed commits (optional, recommended)
- Restrict who can push to matching branches (optional)

## Secret Scanning and Dependency Policies

- GitHub Advanced Security features (code scanning, secret scanning, dependency review) are recommended if available in your org. This repo adds a gitleaks step to provide baseline secret scanning even without GHAS.
- For license and dependency policies across ecosystems consider:
  - JavaScript/TypeScript: pnpm audit, license-checker, Snyk, Dependabot
  - Rust: cargo-audit, cargo-deny
  - Solidity: Slither, Mythril, Semgrep rules

## Notes

- The CI uses minimal, fast defaults to keep checks green on a skeleton repo. Tighten rules (e.g., stricter ESLint, Clippy pedantic, Slither) as the codebase grows.
- Husky hooks run locally once installed via `pnpm install` (prepare script). CI does not rely on Husky.
