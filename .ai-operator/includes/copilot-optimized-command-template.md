# GitHub Copilot Optimized Command Template

## Purpose

Enhanced command template optimized for GitHub Copilot integration in VS Code. This template ensures commands work seamlessly with Copilot's context understanding and VS Code's capabilities.

## Template Structure

```markdown
# [Command Name]

## Purpose

[Clear, one-sentence description of what this command accomplishes and its value]

## Prerequisites

- [ ] VS Code is open with the project workspace loaded
- [ ] GitHub Copilot is enabled and active
- [ ] Required project files are accessible in the workspace
- [ ] [Specific prerequisite 1]
- [ ] [Specific prerequisite 2]

## Context Setup

### Required Files
Ensure these files are open or accessible in VS Code:
- `.github/instructions/best-practices.instructions.md` - Project development standards
- `.github/instructions/code-style.instructions.md` - Coding style guidelines
- `.github/instructions/tech-stack.instructions.md` - Technology stack details
- [Additional context files specific to this command]

### Workspace Preparation
1. Open the VS Code integrated terminal
2. Ensure you're in the project root directory
3. Verify git status is clean or changes are intentional
4. [Additional preparation steps]

## Steps

### Step 1: [Descriptive Step Name]

**Objective**: [What this step accomplishes]

**Actions**:
1. [Specific action using VS Code features]
2. [Next action with clear context]
3. [Verification step]

**GitHub Copilot Context**:
- Open relevant files: `[file-pattern]`
- Use workspace symbols: `Ctrl+T` to find related code
- Reference patterns from `[example-file]`

**Expected Outcome**: [Clear success criteria]

### Step 2: [Descriptive Step Name]

**Objective**: [What this step accomplishes]

**Actions**:
1. Create new file: `[file-path]` using VS Code
2. Use template from `.ai-operator/templates/[template-name].md`
3. Apply project patterns from open context files

**GitHub Copilot Integration**:
```typescript
// Example pattern for Copilot reference
interface [ExampleInterface] {
  // Copilot will suggest similar patterns
  [property]: [type];
}
```

**Validation**:
- [ ] File follows project structure conventions
- [ ] Code matches style guide from context files
- [ ] Implementation follows established patterns

### Step 3: [Descriptive Step Name]

**Objective**: [What this step accomplishes]

**VS Code Integration**:
1. Use Command Palette (`Ctrl+Shift+P`) for [specific operation]
2. Leverage file explorer for [navigation task]
3. Use integrated git for [version control operation]

**Testing Integration**:
- Use VS Code Test Explorer to run related tests
- Verify functionality using built-in debugging tools
- Check test coverage using workspace extensions

## Guidelines

### GitHub Copilot Best Practices

#### Context Optimization
- Keep relevant files open in editor tabs
- Use clear, descriptive variable and function names
- Include comments that provide context for AI suggestions
- Reference established patterns in the codebase

#### Code Quality Standards
- Follow project conventions visible in open files
- Use TypeScript types for better AI understanding
- Include comprehensive JSDoc comments
- Follow consistent naming patterns

#### Error Handling
- Use VS Code's error detection and quick fixes
- Leverage Copilot suggestions for error resolution
- Reference error handling patterns from context files
- Follow project-specific error handling conventions

### VS Code Workflow Integration

#### File Operations
- Use VS Code's file explorer for navigation
- Leverage quick open (`Ctrl+P`) for file access
- Use workspace search (`Ctrl+Shift+F`) for code discovery
- Utilize symbol search (`Ctrl+T`) for code navigation

#### Development Workflow
- Use integrated terminal for command execution
- Leverage source control view for git operations
- Use problem panel for issue identification
- Utilize IntelliSense for code completion

#### Testing and Debugging
- Use Test Explorer for test execution
- Leverage integrated debugger for troubleshooting
- Use output panel for build and test results
- Utilize performance profiler when needed

## Outputs

- **Primary Deliverable**: [Main output with clear success criteria]
- **Supporting Files**: [Additional files created or modified]
- **Documentation Updates**: [Any documentation changes required]
- **Test Coverage**: [Testing deliverables and validation]

## Quality Gates

### Automated Validation
- [ ] All tests pass in VS Code Test Explorer
- [ ] No ESLint/TSLint errors in Problems panel
- [ ] Type checking passes (for TypeScript projects)
- [ ] Build completes successfully

### Manual Validation
- [ ] Code follows patterns established in context files
- [ ] Implementation matches acceptance criteria
- [ ] Documentation is updated and accurate
- [ ] Git commit includes appropriate changes

## Handoff

### Next Steps
1. **Recommended Follow-up**: [Next logical command or action]
2. **Integration Points**: [How this connects to other workflows]
3. **Validation Methods**: [How to verify successful completion]

### Context Preservation
- Keep relevant files open for continued development
- Update project documentation as needed
- Commit changes with descriptive messages
- Update team on progress and outcomes

## Template Customization

### Command-Specific Sections

Add these sections as needed for specific command types:

#### For Development Commands
```markdown
### Development Server
- [ ] Start development server using VS Code terminal
- [ ] Verify hot reload functionality
- [ ] Test in browser using Live Server extension
```

#### For Testing Commands
```markdown
### Test Configuration
- [ ] Configure test runner in VS Code
- [ ] Setup test coverage reporting
- [ ] Configure debug settings for tests
```

#### For Deployment Commands
```markdown
### Deployment Pipeline
- [ ] Verify build process in integrated terminal
- [ ] Check deployment configuration
- [ ] Monitor deployment status
```

### Variable Substitution

Use these patterns for dynamic content:
- `${workspaceFolder}` - VS Code workspace root
- `${file}` - Currently active file
- `${relativeFile}` - Relative path to active file
- `${command:extension.command}` - VS Code command execution

## Integration Examples

### Example 1: Component Creation
```typescript
// Context for GitHub Copilot
import React from 'react';
import { ComponentProps } from '../types';

// Copilot will suggest similar patterns
export const NewComponent: React.FC<ComponentProps> = ({ ...props }) => {
  // Implementation follows project patterns
  return <div>Component content</div>;
};
```

### Example 2: API Integration
```typescript
// Pattern for API service
import { ApiClient } from '../utils/api';

export class FeatureService {
  // Copilot understands the pattern
  async getFeatureData(id: string): Promise<FeatureData> {
    return this.apiClient.get(`/features/${id}`);
  }
}
```

This template ensures commands work seamlessly with GitHub Copilot while leveraging VS Code's full capabilities.