# Analysis Code Styles Command

## Purpose

Analyze the actual project codebase to identify languages used, extract existing patterns, and create/update code style instruction files. Remove redundant pre-installed templates and generate project-specific coding standards based on real code patterns.

## Step-by-Step Instructions

### Step 1: Load Project Context and Analysis
1. **Load the comprehensive project analysis** from `.github/copilot-instructions.md` (created in Step 2)
2. **Extract technology stack information** discovered in the copilot instructions:
   - Programming languages identified
   - Frameworks and libraries found
   - Build tools and deployment technologies
3. **Use this analysis to guide** which code styles need to be created
4. Review any existing code style files in `.github/instructions/`

### Step 2: Use Previous Analysis to Focus Code Style Work
- [ ] **Reference the technology stack** from copilot instructions to prioritize languages:
  - If copilot instructions show "C# with .NET Core" → prioritize creating detailed C# code style
  - If copilot instructions show "TypeScript React app" → focus on TypeScript/React patterns
  - If copilot instructions show "Python FastAPI" → create Python-specific style guide
- [ ] **Build on codebase patterns** already identified in copilot instructions
- [ ] **Deepen the analysis** for each language found:
  - Naming conventions (functions, variables, classes, files)
  - Formatting patterns (indentation, line length, bracket placement)  
  - Import/export patterns
  - Error handling approaches
  - Testing patterns
  - Documentation style

### Step 3: Review Pre-installed Code Style Templates
- [ ] **Check available templates** in `.ai-operator/templates/code-styles/`:
  - `code-style.md` (general)
  - `code-style-javascript.md`
  - `code-style-typescript.md` 
  - `code-style-dotnet.md`
- [ ] **Identify relevant templates** based on actual project languages
- [ ] **Flag redundant templates** that don't match project tech stack

### Step 4: Present Code Style Plan for User Approval
- [ ] **Provide comprehensive summary** of planned changes:
  ```
  📋 Code Style Plan Based on Project Analysis:
  
  ✅ CREATING (languages found in project):
  - code-style-csharp.instructions.md (found .NET Core project with 47 .cs files)
  - code-style-typescript.instructions.md (found React components in src/)
  
  ❌ REMOVING/IGNORING (templates not needed):
  - code-style-javascript.md template (no JS files found, project is TypeScript-only)
  
  🔄 UPDATING:
  - code-style.instructions.md (general guide will reference the specific language styles)
  ```
- [ ] **Wait for user confirmation** before proceeding with file creation
- [ ] **Show template source** for each planned style guide for transparency

### Step 5: Generate Project-Specific Code Styles (After User Approval)

**🚨 CRITICAL REQUIREMENT: ALWAYS CREATE LANGUAGE-SPECIFIC INSTRUCTION FILES**

- [ ] **MANDATORY: Create language-specific instruction files** for EVERY language found in the project:
  - Even if existing patterns are good, ALWAYS create the instruction files
  - Even if general code style exists, ALWAYS create language-specific files
  - NEVER skip file creation with "patterns are already good" responses
  - The goal is to create scoped instruction files, not just analyze existing code

- [ ] **For each language found in the project** (MUST create files):
  - **Use relevant pre-installed template** as starting point:
    - TypeScript → Use `.ai-operator/templates/code-styles/code-style-typescript.md` as base
    - JavaScript → Use `.ai-operator/templates/code-styles/code-style-javascript.md` as base
    - C# → Use `.ai-operator/templates/code-styles/code-style-dotnet.md` as base
    - Other languages → Create new style guide using general template patterns
  - **Enhance template with actual project patterns** discovered in analysis
  - **Include specific examples** from the actual codebase (file names, patterns, etc.)

- [ ] **MANDATORY: Create separate instruction files** in `.github/instructions/` with proper frontmatter:
  ```markdown
  ---
  description: "[Language]-specific coding standards and best practices"
  applyTo: "**/*.[file-extension],**/*.[additional-extensions]"
  ---
  
  # [Language] Code Style
  [Content follows...]
  ```
  
  **Language-specific applyTo patterns (REQUIRED):**
  - **TypeScript**: `applyTo: "**/*.ts,**/*.tsx"`
  - **JavaScript**: `applyTo: "**/*.js,**/*.jsx"`
  - **C#**: `applyTo: "**/*.cs"`
  - **Python**: `applyTo: "**/*.py"`
  - **General**: `applyTo: "**"` (fallback for all files)
  
  **REQUIRED FILES TO CREATE:**
  - `code-style-[language].instructions.md` for each approved language
  - Each file should be comprehensive and project-specific, not generic templates
  - Reference specific files and patterns from the actual project
  - **CRITICAL**: Include appropriate applyTo frontmatter to scope to relevant file types

**⚠️ VALIDATION CHECKLIST:**
- [ ] Did you create at least one language-specific instruction file?
- [ ] Does each file have proper frontmatter with applyTo patterns?
- [ ] Are the files saved in `.github/instructions/` directory?
- [ ] Do NOT respond with "existing patterns are good" - always create files
  
- [ ] **Update general code style guide**:
  - Update existing `code-style.instructions.md` to reference the language-specific guides
  - Include overview of project's multi-language approach (if applicable)

### Step 6: Validation and Integration

**🚨 MANDATORY VALIDATION: ENSURE FILES WERE CREATED**

- [ ] **CRITICAL: Verify language-specific instruction files exist**:
  - Check `.github/instructions/` directory for `code-style-[language].instructions.md` files
  - At minimum, create files for primary languages found (TypeScript, JavaScript, C#, Python, etc.)
  - Each file MUST have proper frontmatter with applyTo patterns
  - If no files were created, STOP and create them immediately

- [ ] **Verify all created styles** reference actual code examples from the project
- [ ] **Ensure consistency** between style guides and `.github/copilot-instructions.md`
- [ ] **Test integration** by showing how the styles would guide code generation
- [ ] **Confirm file structure**: 
  - General: `code-style.instructions.md` (updated to reference language-specific guides)
  - Language-specific: `code-style-[language].instructions.md` (separate files) **← MUST EXIST**
  - Cross-references between files work correctly

**⚠️ FAILURE CONDITIONS:**
- If no language-specific files were created, the step has FAILED
- If files exist but lack applyTo frontmatter, the step has FAILED  
- If response was "existing patterns are good, no changes needed", the step has FAILED

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
[Provide concrete examples that Copilot can reference, e.g., style guide templates]

### Common Patterns
[Document project-specific patterns for Copilot to learn, e.g., standard code style structures]
