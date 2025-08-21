# Analysis Project Best Practices Command

## Purpose

Analyze the project and code styles to identify and generate project-specific best practices, ensuring they are informed by tech stack and integrated into the analysis workflow using AI team management and Copilot-optimized processes.

## Step-by-Step Instructions

### Step 1: Load Project Context
1. Review project roadmap in `.ai-operator/product/roadmap.md`.
2. Load coding standards from `.github/instructions/code-style.instructions.md`.
3. Ensure these files are open in VS Code for Copilot context.

### Step 2: Review Existing Practices
- [ ] Read `.ai-operator/instructions/best-practices.md` to understand current global best practices.
- [ ] Analyze the project and code styles to identify improvements or project-specific practices not yet captured.

### Step 3: Create Project-Specific Version
- [ ] Copy all content from the base best-practices file.
- [ ] Add project-specific details and customizations.
- [ ] Place the updated file in `.github/instructions/project-best-practices.md` for structural context loading.

### Step 4: Validate and Reference
- [ ] Ensure the file is correctly referenced in copilot-instructions for agent context.
- [ ] Iterate as needed for clarity and completeness.
- [ ] Integrate with the overall analysis workflow.

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
[Provide concrete examples that Copilot can reference, e.g., best practice templates]

### Common Patterns
[Document project-specific patterns for Copilot to learn, e.g., standard best practice structures]
