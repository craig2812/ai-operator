# Command Template

## Purpose

Standardized template for all commands with consistent sections. This template ensures uniformity across all commands and provides clear structure for command documentation.

## Template Structure

```markdown
# [Command Name]

## Purpose

[Clear, one-sentence description of what this command accomplishes]

## Prerequisites

- [ ] [Prerequisite 1 - required setup or state]
- [ ] [Prerequisite 2 - dependencies or access needed]
- [ ] [Prerequisite 3 - configuration requirements]

## Inputs

- **[Input Name]**: [Description of required input]
- **[Optional Input]**: [Description of optional input] (Optional)

## Steps

### Pre-Flight Verification

@.ai-operator/includes/pre-flight.md

### Step 1: [Step Name]

- [ ] [Specific action to take]
- [ ] [Verification checkpoint]
- [ ] [Expected outcome]

### Step 2: [Step Name]

- [ ] [Specific action to take]
- [ ] [Verification checkpoint]
- [ ] [Expected outcome]

### Step 3: [Step Name]

- [ ] [Specific action to take]
- [ ] [Verification checkpoint]
- [ ] [Expected outcome]

### Post-Flight Verification

@.ai-operator/includes/post-flight.md

## Guidelines

### Execution Principles

- [Principle 1 - how to approach the work]
- [Principle 2 - what to prioritize]
- [Principle 3 - how to handle errors]

### Quality Standards

- [Standard 1 - acceptance criteria]
- [Standard 2 - testing requirements]
- [Standard 3 - documentation requirements]

### Error Handling

- [How to handle common errors]
- [When to escalate issues]
- [Recovery procedures]

## Outputs

- **[Output Name]**: [Description of expected deliverable]
- **[Output Name]**: [Description of expected deliverable]

## Handoff

When this command completes successfully:

1. **Next Command**: [Recommended next step or command]
2. **Deliverables**: [What should be ready for next phase]
3. **Validation**: [How to verify readiness for handoff]

## Variables and Includes

### Variable Usage

- Use `${variable_name}` for config.yml variables
- Reference paths from config.yml when possible
- Use consistent naming conventions

### Include References

- Use `@.ai-operator/includes/file.md` for shared components
- Reference other commands with full paths
- Include relevant instruction files

## Examples

### Example Usage

```
[Example of how to invoke this command]
```

### Expected Results

```
[Example of expected output or results]
```
```

## Formatting Standards

### Section Headers

- Use `##` for main sections
- Use `###` for subsections
- Use clear, descriptive names

### Checklists

- Use `- [ ]` for actionable items
- Use `- [x]` for completed items
- Include verification steps

### Code Blocks

- Use appropriate language tags
- Include context and explanation
- Keep examples concise but complete

### File References

- Use `@` prefix for file paths
- Use relative paths from project root
- Include full context for references