# Code Review

## Purpose

As your code review specialist, I'll thoroughly assess code changes for quality, standards compliance, and test coverage to ensure production-ready code.

## Prerequisites

- [ ] VS Code is open with project workspace loaded
- [ ] GitHub Copilot is enabled for code analysis
- [ ] Code changes are available for review (commits, diffs, or pull request)
- [ ] Original specification or requirements are accessible

## Context Setup

### Required Files
Open in VS Code for review context:
- `.github/instructions/code-style.instructions.md` - Coding standards
- `.github/instructions/best-practices.instructions.md` - Quality guidelines
- `.github/instructions/tech-stack.instructions.md` - Technical constraints
- Original specification or task requirements
- Related test files and documentation

### Workspace Preparation
1. Open VS Code integrated terminal
2. Ensure git repository is current
3. Load changed files for review context

## Steps

### Step 1: Code Change Analysis

**Objective**: Understand scope and impact of changes

**Actions**:
1. Review git diff or pull request changes
2. Identify modified files and their purposes
3. Understand the feature or fix being implemented
4. Assess change complexity and scope

**GitHub Copilot Context**:
- Open modified files: `src/[changed-files]/**/*`
- Use file explorer to see change impact
- Reference related components for context

**Expected Outcome**: Clear understanding of what changed and why

### Step 2: Standards and Quality Assessment

**Objective**: Verify code meets project quality standards

**VS Code Integration**:
1. Use Problems panel to check for linting errors
2. Verify type checking passes (for TypeScript projects)
3. Check code formatting consistency
4. Review variable naming and structure

**Quality Checklist**:
- [ ] Code follows project style guidelines
- [ ] Functions and variables are well-named
- [ ] Complex logic is appropriately commented
- [ ] No obvious security vulnerabilities
- [ ] Performance considerations addressed

**GitHub Copilot Assessment**:
```typescript
// Example: Review pattern consistency
interface ReviewChecklist {
  // Copilot helps identify consistency issues
  styleCompliance: boolean;
  namingConventions: boolean;
  architecturalFit: boolean;
}
```

### Step 3: Functional Requirements Validation

**Objective**: Ensure implementation meets specifications

**Validation Process**:
1. Compare implementation to original requirements
2. Verify acceptance criteria are met
3. Check edge cases and error handling
4. Assess integration with existing code

**AI Team Integration**:
- Reference original specification from Planning Agent
- Validate against task requirements from DEV Agent
- Ensure Testing Agent can validate functionality

### Step 4: Test Coverage and Quality Review

**Objective**: Verify adequate testing and functionality

**Testing Assessment**:
1. Review test files for new functionality
2. Run tests using VS Code Test Explorer
3. Check test coverage reports
4. Validate test quality and comprehensiveness

**VS Code Testing Integration**:
- Use Test Explorer to run related tests
- Check test coverage using workspace extensions
- Verify all tests pass in integrated terminal

**Test Quality Criteria**:
- [ ] Unit tests cover new functionality
- [ ] Integration tests verify system behavior
- [ ] Edge cases are tested
- [ ] Error scenarios are handled

## Guidelines

### AI Team Code Review Standards
- **Code Review Agent (Me)**: Provide thorough, objective quality assessment
- **User**: Make final approval decisions and priority calls
- **DEV Agent**: Receive feedback and implement fixes
- **Testing Agent**: Validate fixes and re-test as needed

### Quality Standards for AI Teams
- Code must be maintainable for future AI development
- Comments must provide context for AI understanding
- Patterns must be consistent for AI assistance
- Architecture must support AI-assisted development

### GitHub Copilot Optimization
- Code reviews consider AI-assistable patterns
- Comments provide context for future AI work
- Structure supports Copilot suggestions
- Consistency enables better AI assistance

## Outputs
- **Review Report**: Comprehensive assessment with specific findings
- **Issue List**: Prioritized list of required fixes or improvements
- **Approval Decision**: Clear recommendation with rationale
- **Feedback for DEV Agent**: Specific guidance for any required changes

## Quality Gates
- [ ] Code meets all project quality standards
- [ ] Implementation fulfills original requirements
- [ ] Test coverage is adequate and tests pass
- [ ] No blocking issues or security concerns
- [ ] User has clear approval recommendation

## Handoff
**If Approved**: To User - Present approval recommendation and completed work
**If Changes Needed**: To DEV Agent - Run `execute-tasks.md` with specific fixes
**If Testing Issues**: To Testing Agent - Run `test-run.md` for validation
**Context Preservation**: Keep review artifacts available for follow-up work
