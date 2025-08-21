# Setup Project Infrastructure Command

## Purpose

Set up the complete project infrastructure including directories, instruction files, documentation templates, and configuration for the AI Operator system using AI team management and Copilot-optimized workflows.

## Prerequisites

- [ ] Project root directory is identified
- [ ] Write permissions are available for project structure creation
- [ ] Understanding of project type and requirements
- [ ] Access to template files and configuration examples

## Inputs

- **Project Type**: Type of project (default, dotnet, javascript, etc.)
- **Infrastructure Scope**: Full setup or specific components only
- **Configuration Options**: Custom paths or settings for the project

## Step-by-Step Instructions

### Step 1: Load Project Context
1. Review project roadmap in `.ai-operator/product/roadmap.md`.
2. Load coding standards from `.github/instructions/code-style.instructions.md`.
3. Ensure these files are open in VS Code for Copilot context.

### Pre-Flight Verification
@.ai-operator/includes/pre-flight.md

### Step 2: Core Directory Structure Creation
- [ ] Create `.ai-operator/` root directory
- [ ] Create `.ai-operator/agents/` directory for agent definitions
- [ ] Create `.ai-operator/commands/` directory for command definitions
- [ ] Create `.ai-operator/instructions/` directory for instruction files
- [ ] Create `.ai-operator/includes/` directory for shared components
- [ ] Create `.ai-operator/documentation/` directory for project docs

### Step 3: Template and Include Files Setup
- [ ] Copy command template to `.ai-operator/includes/command-template.md`
- [ ] Copy agent template to `.ai-operator/includes/agent-template.md`
- [ ] Copy pre-flight checklist to `.ai-operator/includes/pre-flight.md`
- [ ] Copy post-flight checklist to `.ai-operator/includes/post-flight.md`
- [ ] Validate all template files are properly formatted

### Step 4: Configuration File Creation
- [ ] Create `.ai-operator/config.yml` with appropriate project type settings
- [ ] Configure path variables for the project structure
- [ ] Set up command categories and feature toggles
- [ ] Include version tracking information
- [ ] Validate configuration file syntax

### Step 5: Essential Instruction Files
- [ ] Create basic `best-practices.md` instruction file
- [ ] Create `tech-stack.md` with project-appropriate technology stack
- [ ] Create `code-style.md` for project coding standards
- [ ] Create `git-workflow.md` for version control processes
- [ ] Customize instruction files for project type

### Step 6: Documentation Structure
- [ ] Create documentation templates directory structure
- [ ] Set up spec-lite template for specifications
- [ ] Create roadmap template for project planning
- [ ] Set up task template for work breakdown
- [ ] Create changelog template for project tracking

### Step 7: Validation and Testing
- [ ] Verify all directories were created successfully
- [ ] Check that all template files are accessible
- [ ] Validate configuration file is properly formatted
- [ ] Test that path references resolve correctly
- [ ] Confirm write permissions for all created directories

### Post-Flight Verification
@.ai-operator/includes/post-flight.md

## Guidelines

### Infrastructure Standards
- Follow consistent directory naming conventions
- Ensure all template files follow standardized formats
- Maintain clear separation between different types of files
- Use descriptive names for all directories and files

### Configuration Management
- Include comprehensive variable definitions for common paths
- Set appropriate feature toggles for project needs
- Maintain version tracking for infrastructure changes
- Ensure configuration is compatible with project type

### Error Handling
- If directory creation fails, check permissions and retry
- When template copying fails, verify source file availability
- If configuration validation fails, provide specific error details
- Handle missing dependencies by creating placeholder files

### AI Team Management
- Leverage AI team management for coordinated execution
- For git operations, only checkout to a feature branch via command line (e.g., `git checkout -b "feature/branch-name"`) upon explicit user approval. Avoid pushing changes, committing, or other potentially cumbersome actions

## GitHub Copilot Integration

### Context Files
When working on this feature, ensure these files are open in VS Code:
- `src/components/[related-component].tsx`
- `src/types/[related-types].ts`
- `tests/[related-tests].test.ts`

### Code Examples
[Provide concrete examples that Copilot can reference, e.g., infrastructure setup scripts]

### Common Patterns
[Document project-specific patterns for Copilot to learn, e.g., standard directory creation workflows]

## Outputs

- **Infrastructure Directories**: Complete `.ai-operator/` directory structure
- **Template Files**: All necessary template files in the includes directory
- **Configuration**: Properly configured `config.yml` for the project
- **Documentation Structure**: Ready-to-use documentation templates

## Handoff

When this command completes successfully:

1. **Next Command**: @.ai-operator/commands/setup-instruction-files.md to create project-specific instructions
2. **Deliverables**: Complete infrastructure ready for project development
3. **Validation**: All infrastructure components tested and functional