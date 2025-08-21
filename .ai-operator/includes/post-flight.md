# Post-Flight Verification

## Purpose

Post-flight verification checklist that ensures commands completed successfully and all deliverables are in place. This file provides reusable validation steps that can be referenced at the end of major commands.

## Verification Steps

### 1. File Creation/Updates Verification

- [ ] Verify all expected files were created
- [ ] Check that file contents match specifications
- [ ] Ensure proper file permissions are set
- [ ] Validate that file formats are correct

### 2. Git Status Validation

- [ ] Check git status for any untracked files
- [ ] Verify that intended changes are staged
- [ ] Ensure no unintended files were modified
- [ ] Validate that git repository is in expected state

### 3. Test Execution Confirmation

- [ ] Confirm that tests were executed successfully
- [ ] Verify test results match expectations
- [ ] Check that no regressions were introduced
- [ ] Ensure test coverage requirements are met

### 4. Documentation Updates

- [ ] Verify that documentation was updated appropriately
- [ ] Check that changelog entries were created if needed
- [ ] Ensure that spec files reflect actual implementation
- [ ] Validate that roadmap updates are accurate

### 5. Command Objectives Validation

- [ ] Confirm all command objectives were met
- [ ] Verify that deliverables match requirements
- [ ] Check that success criteria were satisfied
- [ ] Ensure no critical steps were skipped

### 6. Integration Verification

- [ ] Verify that changes integrate properly with existing code
- [ ] Check that no breaking changes were introduced
- [ ] Ensure that dependencies are properly handled
- [ ] Validate that configuration is still consistent

## Deviation Documentation

If any deviations from planned execution occurred:

1. **Document the deviation** with clear explanation
2. **Explain the rationale** for the change
3. **Assess impact** on overall objectives
4. **Update relevant documentation** to reflect actual state

## Failure Response

If post-flight verification fails:

1. **Identify the specific failure point**
2. **Determine if it's critical or can be addressed later**
3. **Provide remediation steps** if possible
4. **Update command status** appropriately

## Integration Pattern

Include this file at the end of commands using:

```markdown
## Post-Flight Verification

@.ai-operator/includes/post-flight.md

Verify that all command objectives were met and deliverables are complete.
```

## Success Criteria

All verification steps should pass to consider the command successfully completed. Any failures should be documented and addressed according to their severity.