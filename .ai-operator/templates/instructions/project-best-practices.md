# Project Best Practices

## Base Reference
This extends the base best practices from `ai-operator/instructions/best-practices.md`. Start by copying its content and then add project-specific customizations below.

## Language-Agnostic Practices

### Git Operations
- Use feature branches for all development work
- Write clear, descriptive commit messages
- Follow project's branching strategy (e.g., GitFlow)
- [Add project-specific git guidelines here]

### Testing
- Write tests for all new features and bug fixes
- Aim for high test coverage (target: 80%+)
- Use TDD where applicable
- [Add project-specific testing strategies here]

### DRY Principles
- Avoid code duplication through reusable functions and components
- Use abstractions and patterns to reduce repetition
- Regularly refactor to eliminate redundancy
- [Add project-specific DRY guidelines here]

### Error Handling
- Implement comprehensive error handling and logging
- Use consistent error reporting patterns
- Handle edge cases gracefully
- [Add project-specific error handling approaches here]

### Code Reviews
- Require code reviews for all changes
- Use clear review criteria and checklists
- Address all review feedback before merging
- [Add project-specific review processes here]

## Technology/Language Specific Additions
[Add tech stack-informed practices here, e.g., React component patterns, TypeScript async/await best practices, database query optimization]

### Examples
```typescript
// Example: TypeScript async error handling
export const fetchUserData = async (userId: string) => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    logger.error('Failed to fetch user data', { userId, error });
    throw new Error('User data fetch failed');
  }
};
```

## Integration
- These practices are informed by the project's code styles and tech stack analysis
- Referenced in copilot-instructions for mandatory context loading
- Updated regularly as the project evolves