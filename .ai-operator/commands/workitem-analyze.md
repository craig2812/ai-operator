# Work Item Analysis

## Purpose

As your analysis specialist, I'll thoroughly examine ADO work items or project requirements to assess readiness for development and identify any blockers or clarifications needed.

## Prerequisites

- [ ] VS Code is open with project workspace loaded
- [ ] GitHub Copilot is enabled for context understanding
- [ ] ADO work item details or requirements document available
- [ ] Project context files accessible

## Context Setup

### Required Files
Open in VS Code for analysis context:
- `.ai-operator/instructions/best-practices.md` - Development standards
- `.ai-operator/instructions/tech-stack.md` - Technical constraints
- ADO work item details or requirements document
- Related architecture/design documents
- Previous analysis reports (if available)

### Workspace Preparation
1. Open VS Code integrated terminal
2. Gather work item ID and access to ADO system
3. Review project documentation for context

## Steps

### Step 1: Gather and Review Work Item Details

**Objective**: Collect complete information about the work item or requirement

**Actions**:
1. Retrieve work item details from ADO or requirements document
2. Extract title, description, acceptance criteria, and priority
3. Identify stakeholders, dependencies, and timeline constraints
4. Document current status and any previous analysis

**GitHub Copilot Context**:
- Open related codebase files: `src/[relevant-domain]/**/*`
- Use workspace search: `Ctrl+Shift+F` to find similar implementations
- Reference architectural patterns for complexity assessment

**Expected Outcome**: Complete understanding of work item scope and context

### Step 2: Requirements Clarity Assessment

**Objective**: Evaluate if requirements are clear and actionable

**Analysis Framework**:
1. **Business Value**: Is the "why" clearly stated?
2. **Functional Requirements**: Are the "what" details specific?
3. **Technical Constraints**: Are limitations and dependencies noted?
4. **Success Criteria**: Are outcomes measurable and testable?

**AI Team Integration**:
- Assess if requirements provide sufficient context for DEV agent
- Verify acceptance criteria are specific enough for Testing agent
- Check if complexity is appropriate for AI implementation

**Deliverable**: Requirements clarity score and gap analysis

### Step 3: Technical Feasibility Analysis

**Objective**: Assess implementation complexity and technical risks

**VS Code Integration**:
1. Examine existing codebase for similar patterns
2. Use file explorer to understand current architecture
3. Reference tech stack documentation for constraints
4. Identify integration points with existing systems

**GitHub Copilot Assistance**:
```typescript
// Example: Analyze existing patterns for new feature
interface ExistingPattern {
  // Copilot helps identify similar implementations
  implementation: ImplementationType;
  complexity: 'Simple' | 'Medium' | 'Complex';
}
```

**Risk Assessment**:
- Technical complexity vs. AI capabilities
- Integration risks with existing code
- Dependencies on external systems
- Timeline feasibility

### Step 4: Readiness Determination

**Objective**: Decide if work item is ready for development or needs clarification

**Decision Criteria**:
- [ ] Requirements are clear and specific
- [ ] Acceptance criteria are testable
- [ ] Technical approach is feasible
- [ ] Dependencies are identified and available
- [ ] Scope is appropriate for AI team implementation

**User Decision Points**:
- Proceed to development vs. request clarification
- Priority level and timeline adjustments
- Resource allocation decisions
- Risk tolerance and mitigation strategies

## Guidelines

### AI Team Analysis Standards
- **Analysis Agent (Me)**: Provide thorough, objective assessment
- **User**: Make final decisions on readiness and priority
- **Planning Agent**: Receives clear analysis for task breakdown
- **DEV Agent**: Gets sufficient context for implementation

### Quality Standards for AI Team
- Requirements must be clear enough for AI implementation
- Acceptance criteria must be specific enough for AI testing
- Technical complexity must be appropriate for AI capabilities
- Dependencies must be clearly identified for workflow planning

### GitHub Copilot Integration
- Analysis leverages existing codebase patterns
- Technical assessment considers AI-assistable implementation
- Complexity evaluation accounts for Copilot capabilities
- Context preparation supports subsequent AI development

## Outputs
- **Analysis Report**: Comprehensive readiness assessment with specific findings
- **Risk Assessment**: Technical and timeline risks with mitigation strategies
- **Readiness Decision**: Clear go/no-go recommendation with rationale
- **ADO Updates**: Work item analysis results and status updates (if applicable)

## Quality Gates
- [ ] All work item details thoroughly reviewed
- [ ] Technical feasibility assessed against project architecture
- [ ] Requirements clarity sufficient for AI team implementation
- [ ] Dependencies and blockers clearly identified
- [ ] User has clear decision points and recommendations

## Handoff
**If Ready**: To Planning Agent - Run `create-spec.md` or `create-tasks.md`
**If Issues Found**: To User - Present specific clarification needs
**If Blocked**: To User - Present blocker resolution options
**Context Preservation**: Keep analysis artifacts open for planning team
