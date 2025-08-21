# Create Tasks From Spec

## Purpose
As your planning specialist, I'll break down specifications or ADO work items into actionable development tasks for your AI development team.

## Prerequisites
- [ ] VS Code is open with project workspace loaded
- [ ] GitHub Copilot is enabled for development context
- [ ] Specification file or ADO work item details available

## Context Setup

### Required Files
Open in VS Code for planning context:
- `.ai-operator/documentation/spec-lite.md` - Current specification
- `.ai-operator/instructions/best-practices.md` - Development standards
- Related project files for understanding existing architecture
- ADO work item details (if applicable)

### Workspace Preparation
1. Open VS Code integrated terminal
2. Ensure specification is current and approved
3. Review project structure for context

## Steps

### Step 1: Analyze Specification and Requirements

**Objective**: Understand the full scope and requirements

**Actions**:
1. Load and analyze the specification file
2. Extract goals, scope, and acceptance criteria
3. Review technical constraints and dependencies
4. Identify integration points with existing code

**GitHub Copilot Context**:
- Open relevant architecture files: `src/[domain]/**/*`
- Use workspace search: `Ctrl+Shift+F` to find related patterns
- Reference similar implementations for complexity estimation

**Expected Outcome**: Complete understanding of requirements and scope

### Step 2: Break Down Into Development Tasks

**Objective**: Create actionable tasks for the DEV agent

**Task Creation Process**:
1. Decompose features into implementable units (1-3 hours each)
2. Order tasks to minimize risk and enable early validation
3. Identify dependencies between tasks
4. Plan for testability and code review points

**Task Structure** (for each task):
```markdown
**Task [#]: [Title]**
- **Description**: Clear implementation requirement
- **Acceptance Criteria**: Specific, testable outcomes
- **Dependencies**: Previous tasks or external requirements
- **Estimated Complexity**: Simple/Medium/Complex
- **Agent Assignment**: DEV → Code Review → Testing
```

**GitHub Copilot Integration**:
- Reference existing patterns for similar features
- Consider component structure from project architecture
- Plan for maintainable, AI-assistable code patterns

### Step 3: Present Plan and Get Approval

**Objective**: Get user confirmation on task breakdown and priorities

**Deliverable Structure**:
1. **Executive Summary**: High-level overview of the implementation plan
2. **Task List**: Numbered, prioritized tasks with clear outcomes
3. **Dependencies Map**: Visual representation of task relationships
4. **Risk Assessment**: Potential blockers and mitigation strategies

**User Decision Points**:
- Task priority and ordering
- Scope adjustments or additions
- Resource allocation decisions
- Timeline expectations

## Guidelines

### AI Team Workflow Integration
- **Planning Agent (Me)**: Creates detailed task breakdown
- **DEV Agent**: Implements each task with GitHub Copilot
- **Code Review Agent**: Reviews implementation quality
- **Testing Agent**: Validates functionality and coverage
- **User**: Makes strategic decisions and provides direction

### Task Quality Standards
- Each task should be independently testable
- Clear handoff criteria between agents
- Specific acceptance criteria for validation
- Appropriate complexity for AI implementation

### ADO Integration
- Link tasks to work item ID when applicable
- Update work item with task breakdown
- Track progress through ADO status updates
- Maintain traceability from requirement to implementation

## Outputs
- **Detailed Task List**: Numbered, prioritized development tasks
- **Implementation Plan**: Strategy and approach overview  
- **ADO Updates**: Work item linked with task breakdown (if applicable)
- **Agent Assignments**: Clear delegation to specialist agents

## Quality Gates
- [ ] All requirements covered by tasks
- [ ] Tasks are appropriately sized for implementation
- [ ] Dependencies clearly identified and sequenced
- [ ] Acceptance criteria are specific and testable
- [ ] User has approved the plan

## Handoff
**To DEV Agent**: Run `execute-tasks.md` to begin implementation
**To User**: Review and approve task priorities and scope
**Context Preservation**: Keep specification and architecture files open for the development team
