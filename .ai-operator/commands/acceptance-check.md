# Acceptance Validation

## Purpose

As your acceptance validation specialist, I'll verify that completed work meets all acceptance criteria and business requirements before final approval and deployment.

## Prerequisites

- [ ] VS Code is open with project workspace loaded
- [ ] GitHub Copilot is enabled for validation assistance
- [ ] All AI team work completed (development, testing, code review)
- [ ] Original specifications and acceptance criteria available

## Context Setup

### Required Files
Open in VS Code for acceptance validation:
- Original specification or ADO work item with acceptance criteria
- `.ai-operator/documentation/spec-lite.md` - Implementation specification
- Completed deliverables (code, tests, documentation)
- Test results and coverage reports
- Code review approvals and feedback

### Workspace Preparation
1. Open VS Code integrated terminal
2. Ensure all deliverables are accessible
3. Gather stakeholder feedback requirements

## Steps

### Step 1: Criteria Validation Against Deliverables

**Objective**: Systematically verify each acceptance criterion is met

**Actions**:
1. Load original acceptance criteria and requirements
2. Map each criterion to specific deliverables
3. Validate implementation against business requirements
4. Document evidence for each validated criterion

**GitHub Copilot Context**:
- Open deliverable files: `src/[implemented-features]/**/*`
- Open test files: `tests/[validation-tests]/**/*`
- Use workspace search to verify requirement coverage

**Validation Framework**:
```markdown
**Acceptance Criterion #1**: [Specific requirement]
- **Implementation**: [Code/feature that addresses this]
- **Evidence**: [Test results, functionality demonstration]
- **Status**: ✅ Met / ❌ Not Met / ⚠️ Partially Met
```

**AI Team Integration**:
- Verify DEV Agent implementation meets specifications
- Confirm Testing Agent validated all criteria
- Review Code Review Agent quality approvals

**Expected Outcome**: Comprehensive validation of all acceptance criteria

### Step 2: Business Value and Functional Validation

**Objective**: Ensure delivered functionality provides intended business value

**Business Validation Process**:
1. **User Experience Testing**: Validate end-user workflows
2. **Business Process Integration**: Confirm integration with existing systems
3. **Performance Validation**: Verify non-functional requirements
4. **Security and Compliance**: Ensure security standards are met

**VS Code Integration**:
1. Use integrated terminal to run acceptance tests
2. Test functionality using development server
3. Review performance metrics and benchmarks
4. Validate integration points and dependencies

**Functional Testing**:
- [ ] Core functionality works as specified
- [ ] Edge cases are handled appropriately
- [ ] Error scenarios are managed gracefully
- [ ] Performance meets requirements

**User Acceptance Criteria**:
- [ ] User workflows are intuitive and complete
- [ ] Business objectives are achieved
- [ ] Integration points function correctly
- [ ] Documentation supports user adoption

### Step 3: Quality and Compliance Verification

**Objective**: Confirm all quality standards and compliance requirements are met

**Quality Assurance Checklist**:
- [ ] Code quality meets project standards
- [ ] Test coverage is adequate and comprehensive
- [ ] Documentation is complete and accurate
- [ ] Security requirements are satisfied
- [ ] Performance benchmarks are achieved

**GitHub Copilot Assistance**:
```typescript
// Example: Validation of quality criteria
interface QualityValidation {
  // Copilot helps verify implementation quality
  codeStandards: boolean;
  testCoverage: number;
  performanceMetrics: PerformanceData;
  securityCompliance: boolean;
}
```

**Compliance Validation**:
- Security standards and best practices
- Accessibility requirements (if applicable)
- Industry-specific compliance needs
- Internal governance requirements

**Risk Assessment**:
- Deployment risks and mitigation strategies
- Rollback procedures and contingencies
- Monitoring and alerting requirements

### Step 4: Stakeholder Approval and Final Sign-off

**Objective**: Obtain formal approval from appropriate stakeholders

**Stakeholder Coordination**:
1. **User Approval**: Present completed work for user validation
2. **Business Sign-off**: Confirm business value delivery
3. **Technical Approval**: Validate technical implementation
4. **Deployment Readiness**: Confirm ready for production

**Approval Documentation**:
- **Executive Summary**: High-level accomplishment overview
- **Criteria Validation**: Evidence that all criteria are met
- **Quality Assurance**: Test results and quality metrics
- **Risk Assessment**: Deployment considerations and mitigation

**User Decision Points**:
- Accept work as meeting all criteria
- Request modifications or additional work
- Approve for production deployment
- Schedule follow-up validation or enhancements

**Final Validation**:
- [ ] All acceptance criteria demonstrably met
- [ ] Business value clearly delivered
- [ ] Quality standards exceeded
- [ ] Stakeholder approval obtained

## Guidelines

### AI Team Acceptance Standards
- **Acceptance Agent (Me)**: Validate comprehensive criteria fulfillment
- **User**: Make final acceptance decisions and approve deployment
- **All AI Agents**: Provide validation evidence and support materials
- **Business Stakeholders**: Confirm business value and approval

### Quality Standards for AI Teams
- Acceptance validation must be comprehensive and evidence-based
- All criteria must be demonstrably met through testing and review
- Business value must be clearly articulated and validated
- Documentation must support ongoing maintenance and operation

### GitHub Copilot Integration
- Use Copilot for validation script generation and testing
- Leverage AI assistance for comprehensive criteria checking
- Maintain validation patterns for future AI team reference
- Document acceptance processes for continuous improvement

## Outputs
- **Acceptance Report**: Comprehensive validation of all criteria and requirements
- **Evidence Documentation**: Specific proof that requirements are met
- **Quality Validation**: Confirmation of technical and business standards
- **Stakeholder Approval**: Formal sign-off for deployment and closure

## Quality Gates
- [ ] All acceptance criteria are demonstrably satisfied
- [ ] Business value delivery is confirmed and validated
- [ ] Quality standards meet or exceed project requirements
- [ ] All stakeholders have provided explicit approval
- [ ] Work is ready for production deployment

## Handoff
**If Approved**: To User - Present final approval and deployment readiness
**If Issues Found**: To appropriate AI Agent - Address specific gaps or issues
**To Deployment**: Coordinate production deployment if approved
**Context Preservation**: Archive acceptance validation for project records and future reference
