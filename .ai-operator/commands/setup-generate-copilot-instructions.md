# Analysis Generate Copilot Instructions Command

## Purpose

**Perform comprehensive codebase analysis** to generate or update `.github/copilot-instructions.md` with actual project-specific content. This command should produce a complete, analysis-driven copilot instructions file with **NO placeholder text or "to be populated" sections** - all content must be based on real analysis of the actual project.

## Critical Requirement

**🚨 DO NOT CREATE PLACEHOLDER CONTENT** - This command must analyze the actual codebase and populate all sections with real, discovered information. The output should be immediately useful for GitHub Copilot, not a template waiting for future population.

## Step-by-Step Instructions

### Step 1: Load Project Context
1. Review project roadmap in `.github/instructions/roadmap.instructions.md`.
2. Load coding standards from `.ai-operator/templates/code-styles/code-style.md`.
3. Ensure these files are open in VS Code for Copilot context.

### Step 2: Comprehensive Codebase Analysis  

**EXECUTE THIS PROMPT EXACTLY:**

Analyze this codebase to generate or update `.github/copilot-instructions.md` for guiding AI coding agents.

Focus on discovering the essential knowledge that would help an AI agents be immediately productive in this codebase. Consider aspects like:
- The "big picture" architecture that requires reading multiple files to understand - major components, service boundaries, data flows, and the "why" behind structural decisions
- Critical developer workflows (builds, tests, debugging) especially commands that aren't obvious from file inspection alone
- Project-specific conventions and patterns that differ from common practices
- Integration points, external dependencies, and cross-component communication patterns

Source existing AI conventions from `**/{.github/copilot-instructions.md,AGENT.md,AGENTS.md,CLAUDE.md,.cursorrules,.windsurfrules,.clinerules,.cursor/rules/**,.windsurf/rules/**,.clinerules/**,README.md}` (do one glob search).

Guidelines (read more at https://aka.ms/vscode-instructions-docs):
- If `.github/copilot-instructions.md` exists, merge intelligently - preserve valuable content while updating outdated sections
- Write concise, actionable instructions (~20-50 lines) using markdown structure
- Include specific examples from the codebase when describing patterns
- Avoid generic advice ("write tests", "handle errors") - focus on THIS project's specific approaches
- Document only discoverable patterns, not aspirational practices
- Reference key files/directories that exemplify important patterns

Update `.github/copilot-instructions.md` for the user, then ask for feedback on any unclear or incomplete sections to iterate.

**Additional Analysis Requirements:**
- [ ] **Ignore the `.ai-operator` folder** as part of the project codebase; treat it as a customizable workflow

### Step 3: Quality Guidelines for Analysis
- [ ] **Write concise, actionable instructions** (~20-50 lines) using markdown structure
- [ ] **Include specific examples** from the codebase when describing patterns  
- [ ] **Avoid generic advice** ("write tests", "handle errors") - focus on THIS project's specific approaches
- [ ] **Document only discoverable patterns**, not aspirational practices
- [ ] **Reference key files/directories** that exemplify important patterns

### Step 4: Perform Comprehensive Codebase Analysis
- [ ] **Analyze Project Overview** (populate immediately, don't leave as placeholder):
  - Read README.md, package.json, or similar to understand project purpose
  - Identify key features from actual code structure and functionality
  - Determine target users from documentation or code patterns
  - Extract business context from existing docs or code organization

- [ ] **Analyze Technology Stack** (populate immediately with discovered technologies):
  - Scan files to identify all programming languages actually used
  - Identify frameworks and libraries from package.json, requirements.txt, etc.
  - Document build tools (webpack, vite, gradle, etc.) found in config files
  - List deployment technologies found in Docker, CI/CD files, etc.

- [ ] **Analyze Project Structure** (populate immediately with actual directories):
  - Document key directories and their actual purposes (src/, tests/, docs/, etc.)
  - Identify important configuration files that actually exist
  - Find entry points (main.js, index.html, app.py, etc.) 
  - Document test structure as it actually exists

- [ ] **Analyze Workflow Information** (populate immediately with discovered workflows):
  - Check for actual git workflows in .github/ or documentation
  - Identify testing approach from existing test files and scripts
  - Document deployment process from actual CI/CD files or scripts

### Step 5: Generate Complete Copilot Instructions
- [ ] **Create comprehensive `.github/copilot-instructions.md`** with proper frontmatter and all sections populated:
  ```markdown
  ---
  description: "Core project context and AI coding guidelines that auto-load with GitHub Copilot"
  applyTo: "**"
  ---
  
  # GitHub Copilot Instructions
  [Content follows...]
  ```
  - NO placeholder text like "To be populated by setup agents"
  - ALL sections filled with actual analysis results
  - Specific examples from the real codebase
  - Concrete, actionable guidance based on what actually exists
  - **CRITICAL**: Include the frontmatter header with applyTo: "**" to ensure global application

- [ ] **If existing file exists**: Merge intelligently, preserving valuable content while updating with fresh analysis
- [ ] **Ensure quality**: Instructions should be specific to THIS project, not generic advice

### Step 6: Validate Analysis Quality
- [ ] **Review completeness**: Every section should have real content from analysis
- [ ] **Verify examples**: All examples should reference actual files/patterns from the project
- [ ] **Test usefulness**: The instructions should help AI understand this specific project immediately
- [ ] **Ask for feedback** on any unclear sections for iteration

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
