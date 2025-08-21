# Templates Instruction File

## Purpose

Comprehensive templates instruction file containing standardized templates for specs, tasks, roadmaps, and other documentation. Provides guidance on template usage and customization for consistent project documentation.

## Specification Templates

### Spec-Lite Template

```markdown
# [Feature Name] - Specification

## Summary

[Brief, clear description of what this feature accomplishes and why it's needed]

## Goals

- [Primary objective 1]
- [Primary objective 2]
- [Primary objective 3]

## Non-Goals

- [Explicitly excluded scope item 1]
- [Explicitly excluded scope item 2]

## Scope & Out-of-Scope

### In Scope
- [Specific functionality included]
- [Integration points covered]
- [User experience elements]

### Out of Scope
- [Functionality explicitly excluded]
- [Future enhancements not included]

## Assumptions

- [Key assumption 1 about system state or dependencies]
- [Key assumption 2 about user behavior or requirements]

## Dependencies

- [External dependency 1]
- [Internal dependency 2]
- [Team or resource dependency 3]

## Risks

- **[Risk Category]**: [Description and potential impact]
- **[Risk Category]**: [Description and mitigation strategy]

## Acceptance Criteria

1. **[Criterion 1]**: [Specific, testable requirement]
2. **[Criterion 2]**: [Measurable outcome or behavior]
3. **[Criterion 3]**: [Verification method and success indicators]

## Test Plan

### Unit Testing
- [Component 1 testing approach]
- [Component 2 testing requirements]

### Integration Testing
- [Integration point 1 testing strategy]
- [End-to-end workflow testing]

## Implementation Notes

### Architecture
- [High-level architectural approach]
- [Key design patterns to follow]

### APIs and Data Models
- [API endpoints or interfaces needed]
- [Data structure requirements]

### Performance Considerations
- [Performance requirements or constraints]
- [Scalability considerations]

## Tasks

[Placeholder for task breakdown - to be populated by create-tasks.md]

## Links and References

- [Related documentation]
- [External resources]
- [Design mockups or wireframes]
```

## Task Templates

### Parent Task Template

```markdown
# [Task Category]: [Task Name]

## Description

[Clear description of what needs to be accomplished]

## Acceptance Criteria

- [ ] [Specific deliverable 1]
- [ ] [Specific deliverable 2]
- [ ] [Quality gate or verification step]

## Subtasks

### [Subtask 1 Name]
- [ ] [Specific action item]
- [ ] [Verification step]
- **Estimated effort**: [time estimate]

### [Subtask 2 Name]
- [ ] [Specific action item]
- [ ] [Testing requirement]
- **Estimated effort**: [time estimate]

## Dependencies

- [Dependency on other tasks or external factors]

## Notes

- [Implementation considerations]
- [Reference materials or documentation]
```

### Individual Task Template

```markdown
## [Task Number]: [Task Name]

**Description**: [What needs to be done]

**Acceptance Criteria**:
- [ ] [Specific outcome 1]
- [ ] [Specific outcome 2]
- [ ] [Testing/validation requirement]

**Implementation Notes**:
- [Technical approach or considerations]
- [Files or components to modify]

**Testing Requirements**:
- [Specific tests to create or update]
- [Manual testing steps if applicable]

**Estimated Effort**: [time estimate]
```

## Roadmap Templates

### Phase Template

```markdown
## Phase [Number]: [Phase Name] ([Duration])

**Goal**: [What this phase aims to accomplish]

**Success Criteria**: [How to measure phase completion]

### Must-Have Features

- [ ] **[Feature 1]**: [Brief description and value]
  - Acceptance criteria: [Key requirements]
  - Estimated effort: [time/complexity estimate]

- [ ] **[Feature 2]**: [Brief description and value]
  - Acceptance criteria: [Key requirements]
  - Estimated effort: [time/complexity estimate]

### Nice-to-Have Features

- [ ] **[Optional Feature 1]**: [Description and conditions for inclusion]

### Dependencies and Blockers

- [External dependencies for this phase]
- [Potential blockers and mitigation strategies]

### Phase Completion Criteria

- [ ] [All must-have features implemented and tested]
- [ ] [Documentation updated]
- [ ] [Performance benchmarks met]
- [ ] [User acceptance testing completed]
```

## Documentation Templates

### Best Practices Template

```markdown
# [Project Name] Best Practices

## Development Principles

### [Principle Category 1]
- [Specific practice or guideline]
- [Rationale and benefits]
- [Implementation examples]

### [Principle Category 2]
- [Specific practice or guideline]
- [Common pitfalls to avoid]

## Code Organization

### File Structure
- [Directory organization standards]
- [Naming conventions for files and folders]

### Module Design
- [Guidelines for creating reusable components]
- [Dependency management principles]

## Testing Standards

### Test Coverage Requirements
- [Minimum coverage thresholds]
- [Types of tests required]

### Test Organization
- [Test file naming and location standards]
- [Test data management approaches]

## Quality Assurance

### Code Review Guidelines
- [Review checklist items]
- [Approval requirements]

### Definition of Done
- [ ] [Code requirement 1]
- [ ] [Testing requirement 2]
- [ ] [Documentation requirement 3]
```

## Command and Agent Templates

### Command Template Reference

For standardized command creation, reference:
```
@.ai-operator/includes/command-template.md
```

### Agent Template Reference

For standardized agent creation, reference:
```
@.ai-operator/includes/agent-template.md
```

## Template Usage Guidelines

### Customization Principles

1. **Preserve Structure**: Maintain the established section headers and organization
2. **Adapt Content**: Customize the content to match project-specific needs
3. **Add Context**: Include project-specific examples and references
4. **Maintain Consistency**: Use consistent terminology and formatting across all documents

### Variable Replacement

When using templates, replace these common placeholders:
- `[Feature Name]`: Actual feature or component name
- `[Project Name]`: Current project identifier
- `[Task Number]`: Sequential task identifier
- `[Duration]`: Time estimates in consistent units
- `[Description]`: Specific, actionable descriptions

### Quality Checkpoints

Before finalizing any document from a template:
- [ ] All placeholder brackets `[...]` have been replaced
- [ ] Content is specific and actionable rather than generic
- [ ] Examples and references are relevant to the current project
- [ ] Formatting is consistent with project standards
- [ ] All sections are complete and provide value

## Template Maintenance

### Version Control

- Track template changes in project documentation
- Maintain backward compatibility when possible
- Document rationale for template modifications

### Team Adoption

- Ensure all team members understand template usage
- Provide training on customization guidelines
- Establish review processes for template adherence

### Continuous Improvement

- Regularly review template effectiveness
- Gather feedback from template users
- Update templates based on project evolution and lessons learned