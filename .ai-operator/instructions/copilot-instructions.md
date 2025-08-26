---
description: "Core project context and AI coding guidelines that auto-load with GitHub Copilot"
applyTo: "**"
---

# GitHub Copilot Instructions

This file provides context and instructions for GitHub Copilot and AI agents working with this project.

## Purpose

This file contains essential project information and guidelines for AI coding assistance. It should be kept up-to-date as the project evolves and is automatically loaded by GitHub Copilot for all interactions.

## AI Operator System

This project uses the AI Operator system for AI-assisted development workflows. Key components:

- **Chatmodes**: Specialized GitHub Copilot chatmodes that embody agent personas (if installed)
- **Agent Prompts**: Direct agent invocation via prompt files (if installed)  
- **Commands**: Structured workflow templates in `.ai-operator/commands/`
- **Context Files**: Manual instructions accessible in `.github/instructions/`
- **Configuration**: Project settings in `.ai-operator/config.yml` and user overrides in `.ai-operator/config.local.yml`

## Configuration Files

The AI Operator system uses YAML configuration files to customize behavior:

- **Main Configuration**: `.ai-operator/config.yml` contains project-wide settings, feature toggles, and project type definitions
- **Local Overrides**: `.ai-operator/config.local.yml` contains user-specific settings that override the main configuration (not committed to version control)

Key configuration options:
- `project_type`: Determines which instruction files are preferred (default, dotnet, javascript, etc.)
- `features`: Enable/disable workflow components
- `copilot`: Toggle for GitHub Copilot integration hints
- `paths`: Common path variables for referencing files in commands

## Project Overview

[TEMPLATE SECTION - REPLACE WITH ACTUAL ANALYSIS]
This section should contain the actual project analysis:
- Real project purpose extracted from README/docs/code
- Actual key features identified from codebase structure
- Business context discovered from documentation
- Target users determined from code patterns or docs

## Technology Stack

[TEMPLATE SECTION - REPLACE WITH ACTUAL ANALYSIS]  
This section should list technologies actually found in the project:
- Programming languages identified by file scanning
- Frameworks/libraries from package.json/requirements.txt/etc.
- Build tools found in config files (webpack.config.js, vite.config.js, etc.)
- Deployment tech from Docker/CI-CD files

## Code Style Guidelines

[These will be created by subsequent setup steps based on actual code analysis]
- **General**: `.github/instructions/code-style.instructions.md`
- **Language-specific**: Files created for languages actually found in project
- **Project-specific**: `.github/instructions/project-best-practices.instructions.md`

## Project Structure

[TEMPLATE SECTION - REPLACE WITH ACTUAL ANALYSIS]
This section should document the actual project structure discovered:
- Key directories that actually exist and their real purposes
- Important config files that are actually present  
- Actual entry points found (main.js, index.html, app.py, etc.)
- Real test structure as it currently exists

## Workflow Information

[TEMPLATE SECTION - REPLACE WITH ACTUAL ANALYSIS]
- **Git workflow**: Document actual workflow found in .github/ or docs
- **AI workflows**: Use appropriate chatmodes or agent prompts
- **Testing approach**: Document actual testing setup found in project
- **Deployment process**: Document actual deployment from CI/CD files or scripts

## Important Notes for AI Agents

1. Always refer to the instruction files in `.github/instructions/` for project-specific guidelines
2. Follow the code style guidelines strictly
3. Maintain consistency with existing code patterns
4. Ask for clarification when requirements are unclear

## Next Steps

To improve this file:
1. Run the analysis workflow to automatically populate project details
2. Update this file with project-specific information as it evolves