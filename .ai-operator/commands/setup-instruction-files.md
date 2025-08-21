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
1. Review project roadmap in `.ai-operator/product/roadmap.md`.
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

- [ ] Create `.ai-operator/instructions/best-practices.md` based on project analysis
- [ ] Include project-specific development principles and patterns
- [ ] Document error handling standards and logging practices
- [ ] Define testing strategies and quality assurance approaches
- [ ] Include security best practices relevant to the project

### Step 3: Technology Stack Documentation

- [ ] Create `.ai-operator/instructions/tech-stack.md` with comprehensive stack details
- [ ] Document primary languages, frameworks, and versions
- [ ] Include build tools, package managers, and dependency management
- [ ] Document deployment tools and infrastructure components
- [ ] Add database systems and data storage solutions

### Step 4: Code Style Guidelines Creation

- [ ] Create base `.ai-operator/instructions/code-style.md` file
- [ ] Create language-specific style guides as needed:
  - `code-style-javascript.md` for JavaScript/TypeScript projects
  - `code-style-dotnet.md` for .NET projects
  - Additional language-specific files as identified
- [ ] Include formatting rules, naming conventions, and structure guidelines
- [ ] Document comment and documentation standards

### Step 5: Git Workflow Instructions

- [ ] Create `.ai-operator/instructions/git-workflow.md` with project workflow
- [ ] Define branching strategy and naming conventions
- [ ] Document commit message standards and PR requirements
- [ ] Include code review process and merge criteria
- [ ] Add deployment and release procedures

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

1. **Next Command**: @.ai-operator/commands/setup-documentation-structure.md to create documentation templates
2. **Deliverables**: Complete set of project-specific instruction files
3. **Validation**: All instruction files tested and integrated with project configuration