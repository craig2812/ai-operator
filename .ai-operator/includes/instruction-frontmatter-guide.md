# Instruction File Frontmatter Guide

## Purpose
All instruction files MUST include proper frontmatter with `applyTo` patterns to ensure VS Code Copilot correctly scopes the instructions to relevant file types.

## Required Frontmatter Format
```markdown
---
description: "Brief description for hover tooltip in VS Code"
applyTo: "glob pattern(s) for file targeting"
---

# Instruction Title
[Content follows...]
```

## Common applyTo Patterns

### Language-Specific Patterns
```yaml
# TypeScript files only
applyTo: "**/*.ts,**/*.tsx"

# JavaScript files only  
applyTo: "**/*.js,**/*.jsx"

# C# files only
applyTo: "**/*.cs"

# Python files only
applyTo: "**/*.py"

# Go files only
applyTo: "**/*.go"

# Java files only
applyTo: "**/*.java"

# CSS/Styling files
applyTo: "**/*.css,**/*.scss,**/*.less"

# Configuration files
applyTo: "**/*.json,**/*.yaml,**/*.yml,**/*.toml"

# Documentation files
applyTo: "**/*.md,**/*.rst,**/*.txt"
```

### Scope-Specific Patterns
```yaml
# All files (global application)
applyTo: "**"

# Source code only (exclude tests, docs, config)
applyTo: "**/src/**/*"

# Test files only
applyTo: "**/*.test.*,**/*.spec.*,**/tests/**/*"

# Frontend code only
applyTo: "**/src/**/*.{ts,tsx,js,jsx,vue,svelte}"

# Backend code only (example for Node.js)
applyTo: "**/server/**/*.{ts,js},**/api/**/*.{ts,js}"

# Build and config files
applyTo: "**/webpack.config.*,**/vite.config.*,**/package.json,**/tsconfig.json"
```

## Instruction File Categories & Recommended Patterns

### Global Instructions (Apply to All Files)
- `.github/copilot-instructions.md` → `applyTo: "**"`
- `best-practices.instructions.md` → `applyTo: "**"`
- `git-workflow.instructions.md` → `applyTo: "**"`
- `tech-stack.instructions.md` → `applyTo: "**"`

### Code Style Instructions (Language-Specific)
- `code-style.instructions.md` → `applyTo: "**"` (general fallback)
- `code-style-typescript.instructions.md` → `applyTo: "**/*.ts,**/*.tsx"`
- `code-style-javascript.instructions.md` → `applyTo: "**/*.js,**/*.jsx"`
- `code-style-dotnet.instructions.md` → `applyTo: "**/*.cs"`
- `code-style-python.instructions.md` → `applyTo: "**/*.py"`

### Framework-Specific Instructions
- `react-patterns.instructions.md` → `applyTo: "**/*.tsx,**/*.jsx"`
- `api-design.instructions.md` → `applyTo: "**/api/**/*,**/server/**/*"`
- `database-patterns.instructions.md` → `applyTo: "**/*{model,entity,repository}*,**/migrations/**/*"`

## Agent Instructions for File Generation

When generating instruction files, agents MUST:

1. **Always include frontmatter** with both `description` and `applyTo`
2. **Choose appropriate applyTo patterns** based on content scope
3. **Use specific patterns over general ones** when possible
4. **Test patterns** to ensure they match intended files
5. **Document the reasoning** for the chosen applyTo pattern

## Examples for Common Scenarios

### Scenario: Creating TypeScript Code Style
```markdown
---
description: "TypeScript coding standards and best practices"
applyTo: "**/*.ts,**/*.tsx"
---

# TypeScript Code Style
[TypeScript-specific guidance...]
```

### Scenario: Creating API Design Guidelines
```markdown
---
description: "REST API design patterns and conventions"
applyTo: "**/api/**/*,**/routes/**/*,**/controllers/**/*"
---

# API Design Guidelines
[API-specific guidance...]
```

### Scenario: Creating Test Writing Standards
```markdown
---
description: "Testing patterns and conventions"
applyTo: "**/*.test.*,**/*.spec.*,**/tests/**/*"
---

# Testing Standards
[Testing-specific guidance...]
```

## Validation Checklist

Before creating instruction files, verify:

- [ ] Frontmatter includes both `description` and `applyTo`
- [ ] `applyTo` pattern matches intended file types
- [ ] Description is concise and helpful for VS Code hover
- [ ] Pattern is as specific as possible while covering all relevant files
- [ ] Pattern doesn't conflict with other instruction files
- [ ] Pattern follows established conventions in this guide

## Common Mistakes to Avoid

1. **Missing frontmatter entirely** - VS Code won't scope properly
2. **Using applyTo: ""** - Empty pattern won't work
3. **Too broad patterns** - Global `**` when language-specific would be better
4. **Too narrow patterns** - Missing relevant file types
5. **Conflicting patterns** - Multiple instruction files targeting same files without coordination
6. **Invalid glob syntax** - Test patterns before deployment

## Testing applyTo Patterns

To verify your applyTo patterns work:

1. **Create test files** matching your expected pattern
2. **Open files in VS Code** with the instruction file present
3. **Check instruction loading** in VS Code Copilot context
4. **Verify scoping** works as expected
5. **Adjust patterns** if needed