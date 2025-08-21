# Git Workflow

Purpose: Keep contributions consistent and traceable to ADO Work Items. This doc guides human contributors and AI helpers.

## Branch Naming
- Feature: `feature/<ADO-ID>-<short-slug>`
- Bugfix: `bugfix/<ADO-ID>-<short-slug>`
- Chore: `chore/<short-slug>`
- Release: `release/<version>`

## Commits
- Format: `[<ADO-ID>] <concise intent>` (example: `[1234] Add spec-from-ADO parser`)
- One logical change per commit. Keep diffs small.
- Reference the Work Item in the body if additional context is needed.

## Pull Requests
- Title includes ADO ID and clear scope.
- Checklist:
  - [ ] Linked Work Item
  - [ ] Tests added/updated
  - [ ] Docs updated (e.g., `spec-lite.md`, instructions if needed)
  - [ ] Acceptance criteria met
- Request review early; iterate in small steps.

## Reviews
- Focus on correctness, readability, and test coverage.
- Suggest improvements with rationale; avoid nitpicks covered by linters/formatters.

## Merging
- Prefer squash merge. Ensure the final message references the ADO ID.

## Releases & Tags
- Tag format: `v<major>.<minor>.<patch>`
- Changelog entries reference ADO IDs and key user-facing changes.

## Integration with Commands
- `workitem-clarify.md` fetches/plans from ADO.
- `create-spec-from-ado.md` generates condensed spec when needed.
- `test-run.md` supports targeted testing per Work Item or changed scope.
