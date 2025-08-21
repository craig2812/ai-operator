# Workitem Release Command

## Purpose

Prepare a single work item for release or deployment, validate readiness, and communicate status to stakeholders using AI team management and Copilot-optimized workflows.

## Step-by-Step Instructions

### Step 1: Load Work Item Context
1. Review the work item details from the project roadmap in `.ai-operator/product/roadmap.md`.
2. Load coding standards from `.github/instructions/code-style.instructions.md`.
3. Ensure these files are open in VS Code for Copilot context.

### Step 2: Validate Readiness
- [ ] Confirm the work item meets all release or deployment criteria.
- [ ] Run final tests and quality checks for this work item using VS Code test explorer.

### Step 3: Prepare Documentation
- [ ] Prepare documentation or release notes specific to the work item.
- [ ] Reference related components and tests for context.

### Step 4: Stakeholder Review
- [ ] Present the work item for stakeholder review and approval.
- [ ] Document any known issues, risks, or follow-up actions.

### Step 5: Communicate and Release
- [ ] Communicate release status and next steps to relevant parties.
- [ ] Maintain a record of release decisions and communications for this work item.

## Guidelines

- Ensure all criteria for this work item are met before proceeding.
- Solicit explicit approval from stakeholders before release.
- For git operations, only checkout to a feature branch via command line (e.g., `git checkout -b "feature/branch-name"`) upon explicit user approval. Avoid pushing changes, committing, or other potentially cumbersome actions.
- Leverage AI team management for coordinated execution.

## GitHub Copilot Integration

### Context Files
When working on this feature, ensure these files are open in VS Code:
- `src/components/[related-component].tsx`
- `src/types/[related-types].ts`
- `tests/[related-tests].test.ts`

### Code Examples
[Provide concrete examples that Copilot can reference, e.g., release validation scripts]

### Common Patterns
[Document project-specific patterns for Copilot to learn, e.g., standard release checklist]
