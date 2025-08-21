# Best Practices

This file provides foundational best practices for all contributors and agents working in this repository. It should always be present and loaded as context for any agent or workflow, even before setup.

## General Principles

- **Clarity First:** Write code, documentation, and instructions that are easy to understand for both humans and AI agents.
- **Single Responsibility:** Each file, function, and command should do one thing well.
- **Explicitness:** Avoid hidden assumptions. State requirements, dependencies, and side effects clearly.
- **Fail Fast:** Validate inputs and fail early with clear error messages when something is wrong.
- **Iterate with Feedback:** Always seek user or reviewer feedback and be ready to refine your work.
- **Traceability:** Document decisions, changes, and rationale for future reference.

## Coding Practices

- Follow language-specific style guides and use project code style files where available.
- Write automated tests for all new features and bugfixes.
- Prefer composition over inheritance unless inheritance is clearly justified.
- Use meaningful names for variables, functions, and files.
- Keep functions and files small and focused.
- Avoid duplication; extract reusable logic.
- Handle errors and edge cases explicitly.

## Code Examples

### Single Responsibility Principle
```typescript
// Bad: Function does too many things
export const processUserData = (userData: UserData) => {
  validateUser(userData);
  saveToDatabase(userData);
  sendNotification(userData);
  logActivity(userData);
};

// Good: Each function has a single responsibility
export const validateUser = (userData: UserData): boolean => {
  // Validation logic only
  return userData.email && userData.name.length > 0;
};

export const saveToDatabase = (userData: UserData): Promise<void> => {
  // Database logic only
  return database.save(userData);
};

export const sendNotification = (userData: UserData): Promise<void> => {
  // Notification logic only
  return emailService.send(userData.email, 'Welcome!');
};
```

### Error Handling
```typescript
// Bad: Silent failure
export const fetchUser = async (userId: string) => {
  const response = await api.get(`/users/${userId}`);
  return response.data;
};

// Good: Explicit error handling
export const fetchUser = async (userId: string) => {
  try {
    const response = await api.get(`/users/${userId}`);
    if (!response.data) {
      throw new Error('User not found');
    }
    return response.data;
  } catch (error) {
    logger.error('Failed to fetch user', { userId, error });
    throw new Error(`Failed to fetch user ${userId}: ${error.message}`);
  }
};
```

### Testing Example
```typescript
// Example test structure
describe('fetchUser', () => {
  it('should return user data for valid id', async () => {
    const mockUser = { id: '123', name: 'John' };
    api.get.mockResolvedValue({ data: mockUser });

    const result = await fetchUser('123');
    expect(result).toEqual(mockUser);
  });

  it('should throw error for invalid id', async () => {
    api.get.mockRejectedValue(new Error('Not found'));

    await expect(fetchUser('invalid')).rejects.toThrow('Failed to fetch user');
  });
});
```

## Collaboration

- Communicate blockers, uncertainties, and risks early.
- Use checklists and templates for repeatable workflows.
- Reference related work items, documentation, and decisions in your deliverables.
- Review and update this file as the project evolves.

---

_This file is always loaded as context for all agents and should be referenced in all major workflows._
