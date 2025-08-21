# Analysis ADO MCP Setup Command

## Purpose

Analyze and set up Azure DevOps (ADO) MCP integration as part of the analysis workflow, ensuring proper configuration for fetching work items using AI team management and Copilot-optimized processes.

## Step-by-Step Instructions

### Step 1: Load Project Context

1. Review project roadmap in `.ai-operator/product/roadmap.md`.
2. Load coding standards from `.ai-operator/templates/code-styles/code-style.md`.
3. Ensure these files are open in VS Code for Copilot context.

### Step 2: Azure CLI Installation

- [ ] Install the Azure CLI: https://learn.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest
- [ ] Run `az login` to authenticate (any Azure subscription is fine; best practice is a dev instance)

### Step 3: ADO MCP Server Installation

- [ ] On VS Code, install the ADO MCP server by clicking the provided link and entering your Azure DevOps organization name (e.g., 'blackbaud')
- [ ] For Visual Studio, follow the instructions in the ADO MCP README and replace server details as described

### Step 4: Validation and Integration

- [ ] Ensure the MCP server is running and accessible before attempting to fetch work items.
- [ ] Integrate with the analysis workflow for seamless work item handling.

## Guidelines

### AI Team Management

- Leverage AI team management for coordinated execution.
- For git operations, only checkout to a feature branch via command line (e.g., `git checkout -b "feature/branch-name"`) upon explicit user approval. Avoid pushing changes, committing, or other potentially cumbersome actions.

### Setup Standards

- Consult official documentation or README for troubleshooting.
- Solicit user feedback if any step is unclear or fails, and iterate on setup as needed.
- Maintain version history of setup instructions if major changes are made.

## GitHub Copilot Integration

### Context Files

When working on this feature, ensure these files are open in VS Code:

- `src/components/[related-component].tsx`
- `src/types/[related-types].ts`
- `tests/[related-tests].test.ts`

### Code Examples

[Provide concrete examples that Copilot can reference, e.g., MCP setup scripts]

### Common Patterns

[Document project-specific patterns for Copilot to learn, e.g., standard ADO integration workflows]

---

Always follow this checklist to ensure the ADO MCP is properly installed and configured before use.
