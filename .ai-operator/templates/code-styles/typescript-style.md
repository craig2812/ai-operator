# TypeScript Code Style

## Naming Conventions
- Use camelCase for variables and functions
- Use PascalCase for classes and interfaces
- Use UPPER_CASE for constants

## Type Definitions
```typescript
// Interface example
export interface User {
  id: string;
  name: string;
  email: string;
}

// Type alias example
export type UserRole = 'admin' | 'user' | 'guest';
```

## Code Structure
- Import statements at the top
- One export per file when possible
- Use async/await for promises

[Add more TypeScript-specific style guidelines]