# Execute Tasks

## Purpose
As your DEV agent, I'll implement the development work from your approved task list or ADO work items, then coordinate with other AI agents for review and testing.

## Prerequisites
- [ ] VS Code is open with project workspace loaded
- [ ] GitHub Copilot is enabled and active
- [ ] Task list exists (from `create-tasks.md`) or ADO work item is available

## Context Setup

### Required Files
Open in VS Code for context:
- `.ai-operator/instructions/best-practices.md` - Development standards
- `.github/instructions/code-style.instructions.md` - Coding guidelines
- Task list file or ADO work item details
- Related source files for the feature area

### Workspace Preparation
1. Open VS Code integrated terminal
2. Ensure you're in project root directory
3. Verify git status is clean

## Steps

### Step 1: Select and Understand Task

**Objective**: Choose the next task to implement

**Actions**:
1. Review task list and select highest priority item
2. Open related files in VS Code for Copilot context
3. Understand acceptance criteria and scope

**GitHub Copilot Context**:
- Open relevant source files: `src/[feature-area]/**/*`
- Use workspace symbols: `Ctrl+T` to find related code
- Reference similar implementations for patterns

**Expected Outcome**: Clear understanding of what to implement

### Step 2: Implement with Copilot Assistance

**Objective**: Write code using AI assistance

**VS Code Integration**:
1. Create/update files using VS Code editor
2. Use Copilot suggestions for code completion
3. Follow patterns from open context files
4. Use IntelliSense for type safety

**Development Workflow**:
```typescript
// Copilot understands project patterns from open files
export const [ComponentName] = ({ ...props }) => {
  // AI suggests implementation following project conventions
  // Based on similar components already open
};
```

**Testing Integration**:
- Write tests using VS Code Test Explorer
- Use Copilot for test generation
- Run tests in integrated terminal

### Step 3: Commit and Update Status

**Objective**: Save progress and update tracking

**Git Operations**:
1. Only checkout to a feature branch via command line (e.g., `git checkout -b "feature/branch-name"`) upon explicit user approval
2. Avoid pushing changes, committing, or other potentially cumbersome actions

**ADO Integration** (if using):
- Update work item status in ADO
- Add progress comments
- Link commits to work item

## Guidelines

### AI Team Workflow Integration
- **User (You)**: Make strategic decisions and provide direction
- **DEV Agent (Me)**: Implement code using GitHub Copilot assistance
- **Code Review Agent**: Review my implementation for quality
- **Testing Agent**: Validate functionality and test coverage
- **User**: Approve/reject work and direct next steps

### GitHub Copilot Optimization
- Keep related files open for better suggestions
- Use descriptive variable names for AI context
- Comment complex logic for AI understanding
- Leverage Copilot Chat for problem solving

## Outputs
- **Working Code**: Implemented feature or fix
- **Tests**: Automated tests for new functionality
- **Documentation**: Updated comments and docs as needed
- **ADO Updates**: Work item status and progress (if applicable)

## Quality Gates
- [ ] Code runs without errors
- [ ] Tests pass in VS Code Test Explorer
- [ ] Follows project coding standards
- [ ] ADO work item updated (if applicable)

## Handoff
**To Code Review Agent**: Run `code-review.md` to review my implementation
**To Testing Agent**: Run `test-run.md` and `test-coverage-validate.md` for validation
**To User**: Present completed work for approval and next direction
**Back to User**: Run `complete-tasks.md` when all tasks are done and reviewed

**Context Preservation**: Keep relevant files open for the review and testing team
