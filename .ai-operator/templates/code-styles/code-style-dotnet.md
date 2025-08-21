# Code Style – .NET / C#

## Language & Project
- Use latest LTS .NET (e.g., .NET 8). Enable nullable reference types.
- File-scoped namespaces; `implicit usings` where appropriate.
- Analyzer rules: enable warnings as errors for critical categories if feasible.

## Naming
- Classes/Interfaces: PascalCase (`IService`), methods: PascalCase, locals: camelCase.
- Async methods end with `Async`.
- Constants: PascalCase or UPPER_SNAKE_CASE per team preference; be consistent.

## Design
- Prefer dependency injection; avoid service locators/singletons.
- Keep classes small and focused; favor composition over inheritance.
- Return `Task`/`Task<T>` for async; avoid `async void` (except event handlers).

## Exceptions & Logging
- Throw specific exceptions. Avoid swallowing exceptions; log with context.
- Use structured logging (e.g., `ILogger<T>` with named parameters).

## Formatting
- 120-char line length guideline.
- Expression-bodied members for trivial getters.
- Place `using` directives at top; sort and remove unused.

## Testing
- xUnit (or NUnit/MSTest): name tests `Method_ShouldDoX_WhenY`.
- Keep tests deterministic; mock external dependencies.

## Project Layout
- Group by feature when practical (feature folders) or by layer (Domain/App/Infra).
- Separate contracts (DTOs) from entities. Keep DTOs lean.

## Docs & Git
- Update `spec-lite.md` when behavior changes.
- Follow `instructions/git-workflow.md` for branches, commits, and PRs (include ADO IDs).
