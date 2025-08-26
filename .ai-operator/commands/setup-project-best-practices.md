# Analysis Project Best Practices Command

## Purpose

Analyze the project and code styles to identify and generate project-specific best practices, ensuring they are informed by tech stack and integrated into the analysis workflow using AI team management and Copilot-optimized processes.

## Step-by-Step Instructions

### Step 1: Load Previous Analysis Context
1. **Load comprehensive project analysis** from `.github/copilot-instructions.md` (created in Step 2)
2. **Load code style analysis** from `.github/instructions/code-style-*.instructions.md` (created in Step 3)  
3. **Extract key insights** from previous analysis to guide best practices:
   - Architecture patterns identified in copilot instructions
   - Technology-specific approaches found in code style analysis
   - Project structure and workflow information discovered
4. Ensure these files are open in VS Code for Copilot context

### Step 2: Analyze Project-Specific Practices
- [ ] **Examine actual project patterns** discovered in codebase analysis:
  - Architecture patterns (monolith, microservices, modular, etc.)
  - Dependency management approaches
  - Testing strategies actually used
  - Error handling and logging patterns
  - Documentation approaches
  - Build and deployment workflows
- [ ] **Review `.ai-operator/templates/instructions/best-practices.md`** as baseline
- [ ] **Identify gaps** between template and actual project practices

### Step 3: Present Best Practices Plan
- [ ] **Provide summary** of planned best practices document:
  ```
  📋 Project Best Practices Plan:
  
  Based on analysis from copilot instructions and code styles:
  
  🎯 TECH STACK SPECIFIC PRACTICES:
  - C# dependency injection patterns (found in Startup.cs)
  - Entity Framework conventions (found in Models/)
  - API error handling (found in Controllers/)
  
  🔗 CROSS-REFERENCES:
  - Links to code-style-csharp.instructions.md for naming conventions
  - References specific files analyzed in copilot instructions
  
  📄 OUTPUT:
  - Will create: project-best-practices.instructions.md
  - Will include: Actual practices found in this project (not generic templates)
  ```
- [ ] **Wait for user confirmation** before creating the best practices document

### Step 4: Generate Best Practices Building on Previous Analysis
- [ ] **Use copilot instructions analysis** to understand the overall project approach
- [ ] **Reference code style analysis** to ensure best practices align with coding standards
- [ ] **Document practices specific to technologies found**:
  - If C# was found → Document actual C# project structure, dependency injection patterns, etc.
  - If React was found → Document actual component organization, state management, etc.
  - If FastAPI was found → Document actual API patterns, error handling, etc.
- [ ] **Build on concrete examples** from code style analysis:
  - Reference specific files and patterns already documented
  - Show how practices connect to actual code organization
- [ ] **Create comprehensive `.github/instructions/project-best-practices.instructions.md`**
  - Should reference and build upon the copilot instructions and code styles
  - Include cross-references to specific style guides created in Step 3

### Step 4: Integration and Validation
- [ ] **Cross-reference with code styles** created in previous step for consistency
- [ ] **Ensure practices align** with patterns documented in `.github/copilot-instructions.md`
- [ ] **Validate examples** come from actual project code, not generic templates
- [ ] **Test coherence** - do the practices actually describe how this project works?

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
[Provide concrete examples that Copilot can reference, e.g., best practice templates]

### Common Patterns
[Document project-specific patterns for Copilot to learn, e.g., standard best practice structures]
