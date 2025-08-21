# Test Coverage Validation

## Purpose

As your test coverage specialist, I'll analyze test coverage metrics, identify gaps, and ensure quality standards are met before code deployment.

## Prerequisites

- [ ] VS Code is open with project workspace loaded
- [ ] GitHub Copilot is enabled for test analysis and generation
- [ ] Testing framework with coverage reporting configured
- [ ] Code changes completed by DEV Agent and tested by Testing Agent

## Context Setup

### Required Files
Open in VS Code for coverage analysis:
- `.ai-operator/instructions/test-strategy.md` - Coverage requirements
- Test coverage reports and configuration files
- Source files requiring coverage validation
- Existing test files for coverage analysis
- Project quality standards documentation

### Workspace Preparation
1. Open VS Code integrated terminal
2. Ensure test coverage tools are installed and configured
3. Verify test runners can generate coverage reports

## Steps

### Step 1: Coverage Analysis and Measurement

**Objective**: Generate comprehensive test coverage metrics

**Actions**:
1. Run test suite with coverage reporting enabled
2. Analyze coverage reports for completeness
3. Identify uncovered code paths and functions
4. Map coverage gaps to business-critical functionality

**VS Code Integration**:
1. Use Test Explorer with coverage extensions
2. Generate coverage reports in integrated terminal
3. Use coverage visualization tools in editor
4. Review coverage data using VS Code panels

**Coverage Analysis Commands**:
```bash
# Example coverage commands
npm run test:coverage
jest --coverage --coverageReporters=text-lcov
npm run coverage:report
```

**GitHub Copilot Context**:
- Open source files: `src/[coverage-target]/**/*`
- Open test files: `tests/[related-tests]/**/*`
- Use workspace search to find coverage patterns

**Expected Outcome**: Detailed understanding of current test coverage status

### Step 2: Gap Identification and Prioritization

**Objective**: Identify critical coverage gaps and prioritize fixes

**Gap Analysis Process**:
1. **Critical Path Analysis**: Identify business-critical uncovered code
2. **Risk Assessment**: Evaluate impact of uncovered functionality
3. **Complexity Review**: Assess effort required for coverage improvements
4. **Quality Impact**: Determine effect on overall system reliability

**Coverage Quality Metrics**:
- [ ] Line coverage percentage meets project standards
- [ ] Branch coverage includes all decision paths
- [ ] Function coverage validates all public interfaces
- [ ] Integration coverage tests system interactions

**AI Team Integration**:
- Reference original specifications from Planning Agent
- Validate coverage aligns with acceptance criteria
- Coordinate with DEV Agent for additional test implementation

**Prioritization Framework**:
- **High Priority**: Critical business logic, user-facing features
- **Medium Priority**: Integration points, error handling
- **Low Priority**: Utility functions, configuration code

### Step 3: Coverage Enhancement and Validation

**Objective**: Improve test coverage to meet quality standards

**Enhancement Strategies**:
1. **Generate Missing Tests**: Use Copilot to create test cases
2. **Improve Existing Tests**: Enhance coverage of current tests
3. **Add Integration Tests**: Cover component interactions
4. **Validate Edge Cases**: Test boundary conditions and errors

**GitHub Copilot Test Generation**:
```typescript
// Example: Copilot-assisted test generation
describe('Feature functionality', () => {
  it('should handle edge case scenario', () => {
    // Copilot suggests comprehensive test scenarios
    const result = featureFunction(edgeCaseInput);
    expect(result).toMatchExpectedBehavior();
  });
});
```

**VS Code Testing Workflow**:
- Use Test Explorer to run new tests
- Leverage debugging tools for test analysis
- Use Copilot Chat for test strategy guidance
- Monitor coverage improvements in real-time

**Quality Validation**:
- [ ] All critical paths covered by tests
- [ ] Coverage percentages meet project standards
- [ ] New tests pass consistently
- [ ] No regressions introduced

### Step 4: Coverage Reporting and Approval

**Objective**: Document coverage results and obtain approval

**Coverage Report Generation**:
1. **Executive Summary**: High-level coverage metrics and improvements
2. **Detailed Analysis**: Specific coverage gaps and resolutions
3. **Quality Metrics**: Before/after coverage comparisons
4. **Risk Assessment**: Remaining uncovered areas and justifications

**AI Team Coordination**:
- Report to Code Review Agent for quality assessment
- Provide feedback to DEV Agent for any additional work needed
- Coordinate with Testing Agent for integrated test validation

**User Decision Points**:
- Accept current coverage levels
- Request additional test coverage
- Approve for deployment with documented exceptions
- Require coverage improvements before approval

## Guidelines

### AI Team Coverage Standards
- **Coverage Agent (Me)**: Analyze coverage and identify gaps
- **User**: Set coverage standards and make approval decisions
- **DEV Agent**: Implement additional tests as needed
- **Testing Agent**: Validate new test functionality

### Quality Standards for AI Teams
- Coverage reports must be comprehensive and accurate
- Gap analysis must prioritize business-critical functionality
- New tests must be maintainable for future AI development
- Coverage standards must support continuous AI-assisted development

### GitHub Copilot Integration
- Use Copilot for intelligent test case generation
- Leverage AI assistance for coverage gap analysis
- Maintain test patterns that support AI development
- Document coverage strategies for future AI team reference

## Outputs
- **Coverage Report**: Comprehensive analysis of test coverage metrics
- **Gap Analysis**: Prioritized list of coverage improvements needed
- **Quality Assessment**: Validation against project coverage standards
- **Approval Recommendation**: Clear recommendation with supporting evidence

## Quality Gates
- [ ] Coverage percentages meet or exceed project standards
- [ ] Critical business logic is fully covered
- [ ] All new functionality has appropriate test coverage
- [ ] Coverage gaps are documented and approved
- [ ] Test quality meets maintainability standards

## Handoff
**If Coverage Adequate**: To Code Review Agent - Run `code-review.md` for final validation
**If Gaps Identified**: To DEV Agent - Run `execute-tasks.md` with specific test requirements
**To User**: Present coverage analysis and approval recommendation
**Context Preservation**: Keep coverage reports and test artifacts available for review team
