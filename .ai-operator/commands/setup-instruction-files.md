# Analysis Instruction Files Command

## Purpose

Analyze a current project or mission statement to create GitHub Copilot instructions, best practices, code styles, and steering docs for new or existing projects using AI team management and Copilot-optimized workflows.

## Prerequisites

- [ ] Project infrastructure is set up (`.ai-operator/` directories exist)
- [ ] Project codebase is available for analysis
- [ ] Understanding of project technology stack and practices
- [ ] Access to existing project documentation (if any)

## Inputs

- **Project Analysis Results**: Findings from codebase analysis
- **Technology Stack**: Identified languages, frameworks, and tools
- **Team Preferences**: Known coding standards and workflow preferences
- **Template Overrides**: Any custom templates or specific requirements

## Step-by-Step Instructions

### Step 1: Load Project Context
1. Review project roadmap in `.github/instructions/roadmap.instructions.md`.
2. Load coding standards from `.github/instructions/code-style.instructions.md`.
3. Ensure these files are open in VS Code for Copilot context.

### Pre-Flight Verification

@.ai-operator/includes/pre-flight.md

### Step 2: Project Analysis and Context Gathering

- [ ] Analyze existing codebase for technology stack identification
- [ ] Review existing documentation and coding patterns
- [ ] Identify team preferences and established workflows
- [ ] Document project-specific requirements and constraints
- [ ] Gather input on preferred tools and methodologies

### Step 2: Best Practices Instruction File Creation

- [ ] Create `.github/instructions/best-practices.instructions.md` with proper frontmatter:
  ```markdown
  ---
  description: "Project-specific development principles and best practices"
  applyTo: "**"
  ---
  
  # Best Practices
  [Content follows...]
  ```
- [ ] Include project-specific development principles and patterns
- [ ] Document error handling standards and logging practices
- [ ] Define testing strategies and quality assurance approaches
- [ ] Include security best practices relevant to the project
- [ ] **CRITICAL**: Include applyTo: "**" to apply to all files globally

### Step 3: Technology Stack Documentation

- [ ] Create `.github/instructions/tech-stack.instructions.md` with proper frontmatter:
  ```markdown
  ---
  description: "Technology stack details and framework specifications"
  applyTo: "**"
  ---
  
  # Technology Stack
  [Content follows...]
  ```
- [ ] Document primary languages, frameworks, and versions
- [ ] Include build tools, package managers, and dependency management
- [ ] Document deployment tools and infrastructure components
- [ ] Add database systems and data storage solutions
- [ ] **CRITICAL**: Use applyTo: "**" for global application

### Step 4: Code Style Guidelines Creation

- [ ] Create base `.github/instructions/code-style.instructions.md` file with frontmatter:
  ```markdown
  ---
  description: "General code style guidelines for all programming languages"
  applyTo: "**"
  ---
  ```
- [ ] Create language-specific style guides with targeted frontmatter:
  - `code-style-javascript.instructions.md` → `applyTo: "**/*.js,**/*.jsx"`
  - `code-style-typescript.instructions.md` → `applyTo: "**/*.ts,**/*.tsx"`
  - `code-style-dotnet.instructions.md` → `applyTo: "**/*.cs"`
  - Additional language-specific files with appropriate applyTo patterns
- [ ] Include formatting rules, naming conventions, and structure guidelines
- [ ] Document comment and documentation standards
- [ ] **CRITICAL**: Each style guide must have applyTo frontmatter targeting relevant file extensions

### Step 5: Git Workflow Instructions

- [ ] Create `.github/instructions/git-workflow.instructions.md` with proper frontmatter:
  ```markdown
  ---
  description: "Git workflow, branching strategy, and version control practices"
  applyTo: "**"
  ---
  
  # Git Workflow
  [Content follows...]
  ```
- [ ] Define branching strategy and naming conventions
- [ ] Document commit message standards and PR requirements
- [ ] Include code review process and merge criteria
- [ ] Add deployment and release procedures
- [ ] **CRITICAL**: Use applyTo: "**" for global workflow application

### Step 6: Template-Driven File Creation

- [ ] Use standardized templates for all instruction files
- [ ] Apply project-specific customizations while maintaining consistency
- [ ] Validate that all instruction files follow the established format
- [ ] Cross-reference instruction files for consistency
- [ ] Test instruction file accessibility and formatting

### Step 7: Integration and Validation

- [ ] Update `.ai-operator/config.yml` to reference created instruction files
- [ ] Verify that all instruction files are properly linked
- [ ] Test loading of instruction files in relevant commands
- [ ] Validate that project type configuration is correct
- [ ] Confirm that all team requirements are addressed

### Post-Flight Verification

@.ai-operator/includes/post-flight.md

## Guidelines

### Content Quality Standards

- Base all instruction content on actual project analysis rather than generic templates
- Ensure instruction files reflect current project state and team practices
- Maintain consistency across all instruction files while allowing for specificity
- Include practical examples and specific guidance rather than abstract principles

### Template Usage Guidelines

- Use established templates as starting points but customize for project needs
- Maintain standard sections while adding project-specific content
- Ensure that all template placeholders are replaced with actual content
- Follow naming conventions and formatting standards consistently

### Error Handling

- If project analysis is incomplete, identify specific gaps and request clarification
- When conflicting practices are found, document alternatives and recommend resolution
- If instruction files conflict with existing project practices, prioritize project needs
- Handle missing information by creating placeholders with clear TODO items

### AI Team Management
- Leverage AI team management for coordinated execution
- For git operations, only checkout to a feature branch via command line (e.g., `git checkout -b "feature/branch-name"`) upon explicit user approval. Avoid pushing changes, committing, or other potentially cumbersome actions

## Outputs

- **Best Practices File**: Comprehensive project-specific best practices documentation
- **Tech Stack File**: Complete technology stack documentation
- **Code Style Files**: Language-specific coding standards and style guides
- **Git Workflow File**: Project-appropriate version control and process documentation

## GitHub Copilot Integration

### Context Files
When working on this feature, ensure these files are open in VS Code:
- `src/components/[related-component].tsx`
- `src/types/[related-types].ts`
- `tests/[related-tests].test.ts`

### Code Examples
[Provide concrete examples that Copilot can reference, e.g., instruction file analysis scripts]

### Common Patterns
[Document project-specific patterns for Copilot to learn, e.g., standard analysis and doc generation workflows]

## Handoff

When this command completes successfully:

1. **Next Command**: @.ai-operator/commands/ado-mcp-setup.md to configure MCP servers (optional)
2. **Deliverables**: Complete set of project-specific instruction files
3. **Validation**: All instruction files tested and integrated with project configuration