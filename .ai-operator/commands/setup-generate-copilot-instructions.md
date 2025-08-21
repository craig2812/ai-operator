# Analysis Generate Copilot Instructions Command

## Purpose

Analyze the project to generate or update `.github/copilot-instructions.md` as the final step in the analysis workflow, condensing outputs and ensuring all required references for auto context loading using AI team management and Copilot-optimized processes.

## Step-by-Step Instructions

### Step 1: Load Project Context
1. Review project roadmap in `.ai-operator/product/roadmap.md`.
2. Load coding standards from `.ai-operator/templates/code-styles/code-style.md`.
3. Ensure these files are open in VS Code for Copilot context.

### Step 2: Analyze Codebase and Existing Instructions
- [ ] Analyze this codebase to generate or update `.github/copilot-instructions.md` for guiding AI coding agents.
- [ ] Ignore the `.ai-operator` folder as part of the project codebase; treat it as a customizable workflow.
- [ ] Reference `.ai-operator/documentation/` and `.ai-operator/instructions/` for important docs, but ensure `.github/copilot-instructions.md` includes references to enforce mandatory loading.

### Step 3: Focus on Key Aspects
- [ ] Discover essential knowledge for AI productivity: architecture, workflows, conventions, and integration points.
- [ ] Source existing AI conventions from relevant files (e.g., via glob search for `.github/copilot-instructions.md`, `README.md`, etc.).

### Step 4: Generate and Update Instructions
- [ ] If `.github/copilot-instructions.md` exists, merge intelligently while preserving valuable content.
- [ ] Write concise, actionable instructions with specific examples and references.
- [ ] Ensure references to `.ai-operator/instructions/`, `.ai-operator/documentation/`, and `.github/instructions/project-best-practices.md` for mandatory context loading.
- [ ] Copy required code styles from `.ai-operator/` and handle missing styles (add to main or instructions).
- [ ] Validate that project-best-practices is correctly referenced for auto context loading.

### Step 5: Validate and Iterate
- [ ] Update `.github/copilot-instructions.md` and ask for feedback on unclear sections.
- [ ] Ensure all references for auto context loading are included.

## Guidelines

### AI Team Management
- Leverage AI team management for coordinated execution.
- For git operations, only checkout to a feature branch via command line (e.g., `git checkout -b "feature/branch-name"`) upon explicit user approval. Avoid pushing changes, committing, or other potentially cumbersome actions.

### Content Quality Standards
- Focus on project-specific approaches, not generic advice.
- Document discoverable patterns with examples.
- Ensure mandatory context loading for agents and Copilot.

## GitHub Copilot Integration

### Context Files
When working on this feature, ensure these files are open in VS Code:
- `src/components/[related-component].tsx`
- `src/types/[related-types].ts`
- `tests/[related-tests].test.ts`

### Code Examples
[Provide concrete examples that Copilot can reference, e.g., instruction templates]

### Common Patterns
[Document project-specific patterns for Copilot to learn, e.g., standard instruction structures]
