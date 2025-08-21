# Agent Template

## Purpose

Standardized template for all agents with consistent sections. This template ensures uniformity across all agent definitions and provides clear structure for agent documentation.

## Template Structure

```markdown
# [Agent Name]

## General Introduction

[Brief description of the agent's role and primary responsibilities in 1-2 sentences]

## Persona

### Role Definition

[Detailed description of the agent's role, expertise, and approach to work]

### Expertise Areas

- **[Area 1]**: [Specific expertise and capabilities]
- **[Area 2]**: [Specific expertise and capabilities]
- **[Area 3]**: [Specific expertise and capabilities]

### Working Style

[Description of how the agent approaches tasks, communicates, and collaborates]

## Interaction Guidelines

### Communication Style

- [How the agent communicates]
- [Tone and approach used]
- [Level of detail provided]

### Collaboration Approach

- [How the agent works with users]
- [When to ask for clarification]
- [How to handle conflicts or blockers]

### Decision Making

- [Agent's authority and decision scope]
- [When to escalate decisions]
- [How to document choices made]

## Commands List

### Core Commands

#### [Command Category 1]

- **[command-name.md]**: [Brief description of what this command does]
- **[command-name.md]**: [Brief description of what this command does]

#### [Command Category 2]

- **[command-name.md]**: [Brief description of what this command does]
- **[command-name.md]**: [Brief description of what this command does]

### Supporting Commands

- **[supporting-command.md]**: [Description]
- **[supporting-command.md]**: [Description]

### Available Commands Reference

For a complete list of available commands, use:
```
@.ai-operator/commands/
```

## User Interaction Examples

### Example 1: [Scenario Name]

**User Request**: "[Example user request]"

**Agent Response**: 
```
[Example of how the agent would respond, including which commands would be used]
```

### Example 2: [Scenario Name]

**User Request**: "[Example user request]"

**Agent Response**: 
```
[Example of how the agent would respond, including which commands would be used]
```

## Deliverables

### Primary Deliverables

- **[Deliverable 1]**: [Description of what is produced and its format]
- **[Deliverable 2]**: [Description of what is produced and its format]

### Quality Standards

- [Standard 1 - acceptance criteria for deliverables]
- [Standard 2 - testing and validation requirements]
- [Standard 3 - documentation and handoff requirements]

### Success Metrics

- [Metric 1 - how to measure success]
- [Metric 2 - quality indicators]
- [Metric 3 - completion criteria]

## Context Loading Policy

### Required Context

Always load these files when activated:
- [Essential file 1] - [Why it's needed]
- [Essential file 2] - [Why it's needed]

### Conditional Context

Load these files when relevant to the task:
- [Conditional file 1] - [When to load and why]
- [Conditional file 2] - [When to load and why]

### Context Management

- [How to manage context size]
- [When to refresh context]
- [How to prioritize information]

## Integration Points

### Other Agents

- **[Agent Name]**: [How this agent collaborates with other agents]
- **[Agent Name]**: [Handoff procedures and shared responsibilities]

### External Systems

- **[System Name]**: [How the agent interacts with external systems]
- **[System Name]**: [Authentication and access requirements]

### Tools and Utilities

- [Primary tools used by the agent]
- [Specialized utilities or scripts]
- [Configuration requirements]
```

## Formatting Standards

### Section Organization

- Follow the template structure exactly
- Use consistent header levels
- Include all required sections

### Command References

- Use full command file names with `.md` extension
- Organize commands by logical categories
- Include brief descriptions for each command

### Example Format

- Provide realistic, practical examples
- Show both user input and expected agent responses
- Include context about when examples would apply

### Context Documentation

- Be specific about which files are needed when
- Explain the rationale for context loading decisions
- Provide clear guidance on context management

## Customization Guidelines

### Agent-Specific Sections

Add these sections as needed for specific agent types:
- Special capabilities or tools
- Unique workflow requirements
- Specialized knowledge areas
- Integration-specific details

### Variable Usage

- Use placeholder brackets `[VARIABLE]` for customizable content
- Reference config.yml variables where appropriate
- Maintain consistency with command templates