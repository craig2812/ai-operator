# Create Specification

## Purpose

As your specification specialist, I'll transform your requirements or ADO work items into detailed, actionable specifications that guide your AI development team.

## Prerequisites

- [ ] VS Code is open with project workspace loaded
- [ ] GitHub Copilot is enabled for context understanding
- [ ] User requirements or ADO work item details available
- [ ] Project architecture and constraints are accessible

## Context Setup

### Required Files
Open in VS Code for specification context:
- `.github/instructions/tech-stack.instructions.md` - Technology constraints
- `.github/instructions/best-practices.instructions.md` - Development standards  
- `.github/instructions/code-style.instructions.md` - Implementation patterns
- Existing architecture/design documents
- Similar feature specifications for reference

### Workspace Preparation
1. Open VS Code integrated terminal
2. Review project structure for architecture context
3. Gather user requirements or ADO work item details

## Steps

### Step 1: Requirements Analysis and Clarification

**Objective**: Transform user input into clear, detailed requirements

**Actions**:
1. Analyze user requirements or ADO work item details
2. Ask clarifying questions about problem, desired outcome, constraints
3. Define business value and success metrics with user
4. Identify stakeholders and decision makers
5. Document assumptions and external dependencies

**GitHub Copilot Context**:
- Open similar feature files: `src/[similar-features]/**/*`
- Use workspace search: `Ctrl+Shift+F` to find related implementations
- Reference existing patterns for consistency

**User Decision Points**:
- Scope boundaries and feature priorities
- Acceptance criteria approval
- Timeline and resource constraints

**Expected Outcome**: Clear, approved requirements foundation

### Step 2: Technical Architecture Assessment

**Objective**: Understand technical context and constraints

**VS Code Integration**:
1. Examine existing project architecture
2. Review similar implementations in codebase
3. Assess integration points and dependencies
4. Identify technical risks and constraints

**GitHub Copilot Assistance**:
```typescript
// Example: Analyze existing patterns for new feature
interface ExistingArchitecture {
  // Copilot helps understand current patterns
  components: ComponentType[];
  dataFlow: DataFlowPattern;
  integrations: IntegrationPoint[];
}
```

**Architecture Considerations**:
- Compatibility with existing tech stack
- Performance and scalability requirements
- Security and compliance constraints
- Maintainability and testing strategies

### Step 3: Specification Development

**Objective**: Create comprehensive specification document

**Document Structure**:
1. **Executive Summary**: Feature overview and business value
2. **Goals & Objectives**: What success looks like
3. **Acceptance Criteria**: Specific, testable outcomes
4. **Technical Approach**: Architecture and implementation strategy
5. **Testing Strategy**: Validation and quality assurance plan

**AI Team Integration**:
- Write requirements clear enough for DEV agent implementation
- Create acceptance criteria specific enough for Testing agent validation
- Include technical details sufficient for Code Review agent assessment
- Structure for easy task breakdown by Planning agent

**Template Usage**:
```markdown
# [Feature Name] Specification

## Business Value
[Clear statement of why this feature matters]

## Acceptance Criteria
- [ ] Specific, testable criterion 1
- [ ] Specific, testable criterion 2

## Technical Implementation
[Architecture approach optimized for AI development]
```

### Step 4: Validation and Approval

**Objective**: Ensure specification meets user needs and AI team requirements

**Quality Validation**:
- Requirements are clear and actionable
- Acceptance criteria are specific and testable
- Technical approach is feasible with AI assistance
- Scope is appropriate for AI team implementation

**User Review Process**:
1. Present draft specification for review
2. Address feedback and concerns
3. Refine based on user input
4. Get final approval before handoff

## Guidelines

### AI Team Specification Standards
- **Specification Agent (Me)**: Create clear, actionable requirements documentation
- **User**: Provide direction, approve scope, make strategic decisions
- **Planning Agent**: Receives clear specifications for task breakdown
- **DEV Agent**: Gets sufficient technical context for implementation

### Quality Standards for AI Teams
- Requirements must enable autonomous AI implementation
- Acceptance criteria must be specific enough for AI testing validation
- Technical specifications must leverage AI development capabilities
- Documentation must support context-rich AI development workflows

### GitHub Copilot Optimization
- Specifications reference existing codebase patterns
- Technical approaches consider AI-assistable implementation
- Requirements include context for better Copilot suggestions
- Architecture decisions support AI development workflows

## Outputs
- **Specification Document**: Complete specification optimized for AI team implementation
- **Technical Context**: Architecture assessment and implementation guidance
- **User Approval**: Validated requirements with clear acceptance criteria
- **ADO Integration**: Work item linked with detailed specification (if applicable)

## Quality Gates
- [ ] Requirements are clear and comprehensive
- [ ] Acceptance criteria are specific and testable
- [ ] Technical approach is AI-team friendly
- [ ] User has approved scope and priorities
- [ ] Specification provides sufficient context for implementation

## Handoff
**To Planning Agent**: Run `create-tasks.md` to break down implementation
**To User**: Present specification for final approval and direction
**Context Preservation**: Keep specification and architecture context open for planning team
