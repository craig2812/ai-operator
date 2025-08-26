---
description: "JavaScript and TypeScript coding standards and best practices"
applyTo: "**/*.js,**/*.jsx,**/*.ts,**/*.tsx"
---

# Code Style – JavaScript/TypeScript General

## Language
- Prefer TypeScript. Enable `strict` in `tsconfig.json`.
- Use modern syntax: `const`/`let`, async/await, modules (ESM) or CommonJS consistently.

## Linting & Formatting
- ESLint with recommended rules; extend for TS if used.
- Prettier for formatting; do not fight the formatter.

## Naming & Structure
- Filenames: kebab-case or PascalCase for components/classes.
- Functions: lowerCamelCase verbs. Components: PascalCase.
- Keep modules small; one responsibility.

## Errors & Logging
- Throw `Error` with actionable messages. Avoid silent failures.
- Centralize logging; never log secrets or tokens.

## Imports
- Prefer explicit imports. Avoid deep relative paths; use path aliases when configured.

## Testing
- Jest/Vitest: name tests by behavior.
- Mock network/fs; keep tests fast and deterministic.

## Node vs Browser
- Node: handle process signals, async teardown.
- Browser: clean up event listeners; avoid blocking the main thread.

## Docs & Git
- Update `spec-lite.md` when behavior changes.
- Follow `instructions/git-workflow.md` for branches, commits, and PRs (include ADO IDs).
