# Analysis Code Styles Command

## Purpose

Analyze the project to generate and update code style files based on tech stack analysis, ensuring they are informed by project conventions and moved to `.github/instructions/` for agent context using AI team management and Copilot-optimized workflows.

## Step-by-Step Instructions

### Step 1: Load Project Context
1. Review project roadmap in `.ai-operator/product/roadmap.md`.
2. Load coding standards from `.github/instructions/code-style.instructions.md`.
3. Ensure these files are open in VS Code for Copilot context.

### Step 2: Analyze Existing Code Styles
- [ ] Check for existing code style files in `.ai-operator/instructions/code-styles/`.
- [ ] Read the general code style guidance from `.github/copilot-instructions.md`.
- [ ] Analyze tech stack to inform required code styles.

### Step 3: Identify and Suggest Missing Styles
- [ ] Suggest creation of any missing code style files (e.g., `typescript.md`, `python.md`, etc.) based on tech stack.
- [ ] Present a checklist for user confirmation:
  - [ ] Confirm language(s) and style(s) to add
  - [ ] Review suggested style conventions
  - [ ] Approve file creation

### Step 4: Generate and Update Styles
- [ ] Upon user approval, implement the missing code style files with clear, project-specific conventions.
- [ ] Update existing styles informed by tech stack analysis.
- [ ] Move required code styles to `.github/instructions/*-code-style.instructions.md` for GitHub Copilot context.

### Step 5: Validate and Iterate
- [ ] Ensure all code styles are properly integrated and referenced.
- [ ] Iterate as needed for refinement.

## Guidelines

### AI Team Management
- Leverage AI team management for coordinated execution.
- For git operations, only checkout to a feature branch via command line (e.g., `git checkout -b "feature/branch-name"`) upon explicit user approval. Avoid pushing changes, committing, or other potentially cumbersome actions.

## GitHub Copilot Integration

### Context Files
When working on this feature, ensure these files are open in VS Code:
- `src/components/[related-component].tsx`
- `src/types/[related-types].ts`
- `tests/[related-tests].test.ts`

### Code Examples
[Provide concrete examples that Copilot can reference, e.g., style guide templates]

### Common Patterns
[Document project-specific patterns for Copilot to learn, e.g., standard code style structures]
