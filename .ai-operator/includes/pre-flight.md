# Pre-Flight Checklist

## Purpose

Comprehensive pre-flight checklist that ensures proper setup before executing any command. This file provides reusable verification steps that can be referenced at the beginning of major commands.

## Verification Steps

### 1. Configuration File Verification

- [ ] Verify `.ai-operator/config.yml` exists and is properly formatted
- [ ] Check that `project_type` is set appropriately
- [ ] Validate that required paths are defined in configuration
- [ ] Ensure feature toggles are configured correctly

### 2. Instruction Files Verification

- [ ] Verify that instruction files referenced in config exist
- [ ] Check that best practices file is accessible
- [ ] Validate code style guidelines are available
- [ ] Ensure git workflow instructions are present

### 3. Git Repository Status

- [ ] Confirm current directory is a git repository
- [ ] Check that there are no uncommitted critical changes
- [ ] Verify git remote is properly configured
- [ ] Ensure working directory is clean or changes are intentional

### 4. Workspace Cleanliness

- [ ] Check for any blocking file permissions issues
- [ ] Verify write access to necessary directories
- [ ] Ensure no conflicting processes are running
- [ ] Validate that required directories exist

### 5. ADO Connectivity (if applicable)

- [ ] Verify ADO MCP connection if using ADO-related commands
- [ ] Check that ADO authentication is valid
- [ ] Ensure ADO workspace access is properly configured
- [ ] Validate that ADO work item access is available

### 6. Project Context Validation

- [ ] Verify that required documentation files exist
- [ ] Check that spec-lite template is available if needed
- [ ] Ensure task templates are accessible
- [ ] Validate that roadmap exists if required

## Failure Handling

If any pre-flight check fails:

1. **Document the failure** clearly
2. **Provide specific remediation steps** where possible
3. **Block command execution** until issues are resolved
4. **Offer guidance** on how to fix configuration issues

## Integration Pattern

Include this file at the beginning of commands using:

```markdown
## Pre-Flight Verification

@.ai-operator/includes/pre-flight.md

Before proceeding with this command, ensure all pre-flight checks pass.
```

## Success Criteria

All verification steps must pass before proceeding with the main command execution. Any failures should be addressed before continuing with the workflow.