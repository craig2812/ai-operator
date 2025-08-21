# Test Execution

## Purpose

As your testing specialist, I'll execute targeted tests to validate functionality, identify issues, and ensure quality standards are met for your AI team's development work.

## Prerequisites

- [ ] VS Code is open with project workspace loaded
- [ ] GitHub Copilot is enabled for test analysis and debugging
- [ ] Development work completed by DEV Agent
- [ ] Test files and testing framework configured

## Context Setup

### Required Files
Open in VS Code for testing context:
- `.ai-operator/instructions/test-strategy.md` - Testing guidelines
- Test files related to current functionality
- Source files being tested
- Test configuration files (jest.config.js, etc.)
- Original specifications for acceptance criteria

### Workspace Preparation
1. Open VS Code integrated terminal
2. Ensure testing framework is properly configured
3. Verify test dependencies are installed

## Steps

### Step 1: Test Scope Identification

**Objective**: Determine appropriate test coverage for current changes

**Actions**:
1. Analyze code changes from DEV Agent work
2. Identify affected components and functions
3. Map changes to existing test coverage
4. Determine additional tests needed

**GitHub Copilot Context**:
- Open changed files: `src/[modified-components]/**/*`
- Open related test files: `tests/[related-tests]/**/*`
- Use workspace search: `Ctrl+Shift+F` to find existing test patterns

**Test Scope Planning**:
- [ ] Unit tests for modified functions
- [ ] Integration tests for component interactions
- [ ] End-to-end tests for user workflows
- [ ] Regression tests for existing functionality

**Expected Outcome**: Clear understanding of test requirements and scope

### Step 2: Test Execution and Validation

**Objective**: Run tests and validate functionality

**VS Code Testing Integration**:
1. Use Test Explorer to run targeted tests
2. Execute tests in integrated terminal
3. Monitor test output and results
4. Identify failures and performance issues

**Testing Workflow**:
```bash
# Example test execution patterns
npm test -- --testPathPattern=feature-name
npm run test:unit -- --coverage
npm run test:integration
```

**GitHub Copilot Assistance**:
- Use Copilot for test debugging and analysis
- Generate additional test cases as needed
- Analyze test failure patterns and solutions

**Test Categories**:
- **Unit Tests**: Validate individual function behavior
- **Integration Tests**: Verify component interactions
- **Acceptance Tests**: Confirm requirements are met

### Step 3: Issue Analysis and Resolution

**Objective**: Diagnose and resolve test failures

**Failure Analysis Process**:
1. Review test failure output and error messages
2. Use VS Code debugger for detailed investigation
3. Identify root causes of failures
4. Determine if issues are in code or tests

**GitHub Copilot Debug Support**:
```typescript
// Example: Debugging test failures with Copilot assistance
describe('Feature functionality', () => {
  it('should handle edge case', () => {
    // Copilot helps identify test scenarios and assertions
    expect(result).toMatchExpectedBehavior();
  });
});
```

**Resolution Options**:
- Fix code issues identified by tests
- Update tests to match corrected requirements
- Add missing test coverage
- Refactor code for better testability

### Step 4: Test Results Validation and Reporting

**Objective**: Confirm all tests pass and provide comprehensive results

**Final Validation**:
1. Run complete test suite to ensure no regressions
2. Verify test coverage meets project standards
3. Validate all acceptance criteria are tested
4. Document test results and any new tests added

**AI Team Integration**:
- Report results to Code Review Agent for quality assessment
- Provide feedback to DEV Agent if code changes needed
- Validate work meets original specifications from Planning Agent

**Test Metrics**:
- Test coverage percentages
- Performance benchmarks
- Success/failure counts
- New test cases added

## Guidelines

### AI Team Testing Standards
- **Testing Agent (Me)**: Execute comprehensive test validation
- **User**: Make decisions on acceptable test coverage and quality
- **DEV Agent**: Implement fixes for any test failures
- **Code Review Agent**: Review test quality and coverage

### Quality Standards for AI Teams
- Tests must validate all acceptance criteria
- Coverage must meet project standards
- Performance tests validate non-functional requirements
- Tests must be maintainable for future AI development

### GitHub Copilot Testing Integration
- Use Copilot for test case generation and debugging
- Leverage AI assistance for complex test scenarios
- Maintain test patterns that support AI development
- Document test strategies for future AI team reference

## Outputs
- **Test Results Report**: Comprehensive testing outcomes and metrics
- **Coverage Analysis**: Detailed test coverage assessment
- **Issue Documentation**: Any failures and their resolutions
- **Quality Validation**: Confirmation that acceptance criteria are met

## Quality Gates
- [ ] All tests pass successfully
- [ ] Test coverage meets project standards
- [ ] Performance benchmarks are satisfied
- [ ] Acceptance criteria are validated through tests
- [ ] No regressions introduced

## Handoff
**If Tests Pass**: To Code Review Agent - Run `code-review.md` for final quality validation
**If Issues Found**: To DEV Agent - Run `execute-tasks.md` with specific fixes needed
**To User**: Present test results and quality validation for approval
**Context Preservation**: Keep test results and artifacts available for review team
