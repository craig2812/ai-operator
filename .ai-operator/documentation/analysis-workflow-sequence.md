# Analysis Workflow Sequence

## Overview
This document outlines the complete analysis workflow for new or existing projects, ensuring a structured approach to generating steering docs for GitHub Copilot and AI team management.

## Workflow Steps

### Step 1: Initiate Analysis
- **Actor**: Operator
- **Action**: "analyze my project"
- **Prerequisites**: Project codebase available, VS Code open
- **Output**: Analysis request to Setup & Analysis Agent ("Bootstrap")

### Step 2: Project Analysis
- **Actor**: Setup & Analysis Agent ("Bootstrap")
- **Action**: Analyze codebase for architecture, patterns, and conventions
- **Prerequisites**: Access to project files
- **Output**: Analysis findings

### Step 3: Create Project Best Practices
- **Actor**: Setup & Analysis Agent ("Bootstrap")
- **Action**: Read `ai-operator/instructions/best-practices.md` → Implement project-specific version with all content copied and project specifics added → Place in `.github/instructions/project-best-practices.md`
- **Prerequisites**: Analysis findings
- **Output**: Updated `.github/instructions/project-best-practices.md` with project-specific best practices

### Step 4: Create Tech Stack
- **Actor**: Setup & Analysis Agent ("Bootstrap")
- **Action**: Generate tech stack documentation from codebase analysis
- **Prerequisites**: Project dependencies identified
- **Output**: Updated `.ai-operator/instructions/tech-stack.md`

### Step 5: Generate/Update Code Styles
- **Actor**: Setup & Analysis Agent ("Bootstrap")
- **Action**: Create missing code styles and suggest updates informed by tech stack
- **Prerequisites**: Tech stack analysis
- **Output**: Updated code style files, moved to `.github/instructions/*-code-style.instructions.md`

### Step 6: Fill .github/instructions/
- **Actor**: Setup & Analysis Agent ("Bootstrap")
- **Action**: Ensure required documentation is correctly placed
- **Prerequisites**: Generated files from previous steps
- **Output**: Populated `.github/instructions/` folder

### Step 7: Generate Copilot Instructions
- **Actor**: Setup & Analysis Agent ("Bootstrap")
- **Action**: Create/update `.github/copilot-instructions.md` with all references
- **Prerequisites**: All previous steps completed
- **Output**: Final copilot instructions with auto context loading references

## Error Handling
- If analysis is incomplete, request clarification from user
- Handle missing files by creating placeholders
- Validate each step before proceeding

## Integration with Commands
- `setup-project-best-practices.md`: Step 3
- `setup-code-styles.md`: Step 5
- `setup-instruction-files.md`: Step 6
- `setup-generate-copilot-instructions.md`: Step 7 (generate first-time or regenerate)

## Workflow Diagram
[Insert diagram here if available]