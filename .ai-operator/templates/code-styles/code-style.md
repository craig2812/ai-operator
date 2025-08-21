# Code Style (General)

Purpose: Provide concise, enforceable conventions for this repo. Used by Copilot/agents when generating or reviewing code. Keep it brief and practical.

## Principles
- Prefer clarity over cleverness; optimize for maintainability.
- Small, cohesive units; single responsibility per function/module.
- Fail fast with actionable errors; log context, not secrets.

## Formatting
- Use an auto-formatter where available. Keep diffs minimal.
- Keep lines reasonable (<120 chars). Wrap long expressions.
- Delete dead code, commented-out blocks, and unused imports.

## Naming
- Use descriptive names; avoid abbreviations.
- Functions: verbs (e.g., `parseConfig`, `buildSpec`).
- Constants: UPPER_SNAKE_CASE where idiomatic, otherwise PascalCase.
- Private/internal helpers: clearly scoped and documented.

### Naming Examples
```typescript
// Good: Descriptive names
export const parseUserConfiguration = (config: RawConfig): UserConfig => {
  // Implementation
};

export const MAX_RETRY_ATTEMPTS = 3;

// Bad: Abbreviations and unclear names
export const parseCfg = (c: any): any => {
  // Implementation
};

export const maxRetries = 3; // Inconsistent casing
```

## Comments & Docs
- Explain "why", not "what". Inline comments for non-obvious logic.
- Public functions/modules: brief docstring with inputs/outputs/side-effects.

### Documentation Examples
```typescript
/**
 * Validates user input and returns sanitized data.
 * Throws ValidationError for invalid inputs.
 * @param input Raw user input
 * @returns Sanitized user data
 */
export const validateUserInput = (input: RawInput): SanitizedData => {
  // Complex validation logic here
  // Why: Business rule requires strict validation to prevent security issues
  if (!input.email.includes('@')) {
    throw new ValidationError('Invalid email format');
  }
  return { email: input.email.toLowerCase() };
};
```

## Errors & Logging
- Prefer typed/structured errors where idiomatic. Include actionable messages.
- Never log secrets or PII. Include correlation IDs where available.

### Error Handling Examples
```typescript
// Good: Typed error with actionable message
export class ValidationError extends Error {
  constructor(field: string, value: any) {
    super(`Invalid ${field}: ${value}. Must be a valid email address.`);
    this.name = 'ValidationError';
  }
}

// Bad: Generic error without context
throw new Error('Invalid input');
```

## Tests
- Co-locate tests or mirror structure in a `/tests` folder.
- Write focused tests per unit. Name tests by behavior: `does_X_when_Y`.
- Prefer fast, deterministic tests. Use integration tests for critical flows.

## Git Hygiene (ties to `instructions/git-workflow.md`)
- Branch name includes ADO Work Item ID when applicable.
- Commits reference the Work Item and describe intent (not implementation minutiae).

## Language-specific
- See `code-style-dotnet.md` and `code-style-javascript.md` for overrides.
