# AI Operator Demo Script

## Introduction & Context Setting (2 minutes)

### **SAY THIS:**
> "Today I'm going to demo AI Operator - an experimental approach to AI workflow management and context engineering. This is very much a work in progress and completely scrutinizable, but it offers some ideas for how we might implement AI steering and context management within our teams.
> 
> The core idea is to centralize AI context management rather than having each developer manage their own setup, and to provide structured workflows for consistent AI assistance across the team.
> 
> This is something I've thrown together based on patterns I use in personal projects, typically with Claude Code. This is my attempt at replicating both context management and workflow within GitHub Copilot using prompt files and chatmodes."

### **DO THIS:**
- Open VS Code with the JG.Timeline project
- Show that this is a real project we'll be enhancing

---

## Installation Demo (3 minutes)

### **SAY THIS:**
> "First, let's install AI Operator. I have this as a private repository that we can clone and run locally. In the future, this could become an NPX package for the Ghostbusters team and wider adoption, but we're still working through the best approach for that."

### **DO THIS:**
```bash
# In JG.Timeline project directory
node /Users/craig.farrell/Desktop/Projects/agent-operator/install.js

# Select these options:
# 1. Demo mode (4 core chatmodes + basic setup)
# 2. New project (greenfield) 
# 3. ADO MCP (for work item integration)
# 4. Yes - Enable prompt files
```

### **SAY THIS:**
> "The demo mode installs a hybrid workflow - some chatmodes for guided experience, some prompt files for direct agent access. It also installs the complete AI Operator system with all command templates and context files that the agents need to function properly."

### **DO THIS:**
- Show what got installed:
  - `.github/chatmodes/` (orchestrator, setup)
  - `.github/prompts/` (ado, scrum-master)  
  - `.ai-operator/` (complete system)
  - `.github/copilot-instructions.md`
- Restart VS Code

---

## Orchestrator Intelligence Demo (5 minutes)

### **SAY THIS:**
> "The key innovation here is the Orchestrator - it doesn't just recommend individual tools, it provides complete workflow sequences and dynamically analyzes what you actually have installed."

### **DO THIS:**
- Switch to Orchestrator chatmode
- **ASK:** "Just downloaded AI Operator and want to analyze work item 3496021 to create a specification"

### **EXPECTED RESPONSE:**
> "Let me check what you have available...
> 
> I see you have:
> - ✅ orchestrator.chatmode.md (current)  
> - ✅ setup.chatmode.md
> - ✅ ado.prompt.md  
> - ✅ scrum-master.prompt.md
> 
> For analyzing work item 3496021 and creating a specification, here's your workflow:
> 1. **Switch to Setup chatmode** - Establish project context first
> 2. **Use ADO agent** - Open new chat window and use `@.github/prompts/ado.prompt.md` to retrieve work item 3496021  
> 3. **Use Scrum Master agent** - Use `@.github/prompts/scrum-master.prompt.md` to create the specification"

### **SAY THIS:**
> "Notice how it scanned the actual directories and only recommended what's actually installed. No assumptions, no pre-canned workflows - it analyzes your setup and provides tailored guidance."

---

## Context Engineering Demo (5 minutes)

### **SAY THIS:**
> "One of the core benefits is centralized context engineering. Instead of each developer managing their own AI setup, we have shared context that automatically loads."

### **DO THIS:**
- Open any file in the project
- Show that `.github/copilot-instructions.md` appears in Copilot context automatically
- Open a TypeScript file
- Show `@.github/instructions/code-style-typescript.instructions.md` 

### **SAY THIS:**
> "We use frontmatter with `applyTo` patterns to scope instructions. TypeScript guidelines only apply to `.ts` files, general guidelines apply everywhere. This ensures relevant context without overwhelming the AI with irrelevant information."

---

## Hybrid Workflow Demo (10 minutes)

### **SAY THIS:**
> "Now let's demonstrate the actual workflow. This shows both chatmodes for guided experience and prompt files for focused execution."

### **DO THIS - Step 1: Setup (Chatmode)**
- Switch to Setup & Analysis chatmode
- **ASK:** "Analyze this project and set up AI Operator context files"

### **EXPECTED:**
- Agent introduces itself: "I'm your Setup & Analysis Agent, specializing in project initialization..."
- Scans project structure
- Updates `.github/copilot-instructions.md` with real project details
- Creates project-specific context

### **SAY THIS:**
> "The Setup agent just established our project foundation. Notice how it has access to the full command system and can update instruction files with proper frontmatter."

### **DO THIS - Step 2: Work Item Retrieval (Prompt File)**
- Open new chat window
- **USE:** `@.github/prompts/ado.prompt.md`
- **ASK:** "Retrieve work item 3496021 from JG.Timeline repository and analyze requirements"

### **EXPECTED:**
- ADO agent introduces itself: "I'm your ADO Agent (Atlas), specializing in Azure DevOps integration..."
- MCP server connects to Azure DevOps
- Retrieves work item details
- Provides structured analysis

### **SAY THIS:**
> "Notice the clean context here - the prompt file gives us direct agent access without chatmode overhead. Perfect for focused execution."

### **DO THIS - Step 3: Specification Creation (Prompt File)**
- Open new chat window  
- **USE:** `@.github/prompts/scrum-master.prompt.md`
- **ASK:** "Based on the work item analysis, create a specification for work item 3496021"

### **EXPECTED:**
- Scrum Master introduces itself: "I'm your Scrum Master Agent (Sprint), specializing in agile facilitation..."
- Executes create-spec.md command with full template system
- Creates detailed specification with acceptance criteria
- References project context and coding standards

### **SAY THIS:**
> "The Scrum Master has access to the complete AI Operator command system, so it can create production-ready specifications using our established templates and standards."

---

## Key Benefits Summary (3 minutes)

### **SAY THIS:**
> "Let me summarize the key benefits we've just demonstrated:
> 
> **1. Centralized Context Management** - One `.github/copilot-instructions.md` file provides consistent project context for the entire team, instead of each developer managing their own AI setup.
> 
> **2. Dynamic Installation Analysis** - The Orchestrator never assumes what you have. It scans your directories and provides recommendations based on what's actually available.
> 
> **3. Context Engineering** - We use frontmatter to scope instructions. TypeScript guidelines only apply to `.ts` files, general guidelines apply everywhere.
> 
> **4. Hybrid Workflow Benefits** - Chatmodes for guided exploration when learning, prompt files for focused execution when you know what you need.
> 
> **5. Token Optimization** - Context-heavy workflows use free models to preserve quota. You can upgrade to premium models for complex reasoning tasks.
> 
> **6. MCP Integration** - Seamless connection to external systems like Azure DevOps. No manual API calls - the agent handles integration automatically."

---

## Experimental Nature & Future Plans (2 minutes)

### **SAY THIS:**
> "Now, important caveats: This is very much an experimental approach and a work in progress. I'd say it's completely scrutinizable - there are definitely areas that need improvement and refinement.
> 
> For model selection, I've been playing around with pre-selecting models for different chatmodes. Some agents are token-heavy, and with our GitHub Copilot subscription, some models are free while others have pricing multipliers. The context-heavy ones use free models where thinking might not be overly required. However, if you're testing this, I'd recommend making sure GPT-4.1 or another free model is selected, otherwise that quota could get obliterated pretty quickly.
> 
> The goal here is to provide ideas for implementing AI steering and context management within our teams or even individually. Once you have a setup that makes sense, you can add best practices and code styles so that agents are more likely to stay on track and stay focused.
> 
> For the Ghostbusters team and wider adoption, we're evaluating the best approach - whether that's a public NPX package, internal NPM registry, or keeping it as a cloneable repository. We're balancing customization flexibility with standardization."

---

## Next Steps & Questions (3 minutes)

### **SAY THIS:**
> "For teams interested in trying this:
> 
> 1. **Clone the repository**: `git clone https://github.com/craig2812/ai-operator.git`
> 2. **Try demo installation** on a test project
> 3. **Customize instruction files** for your team's standards  
> 4. **Modify chatmodes/agents** directly in the repository as needed
> 5. **Consider MCP integrations** for your external systems
> 6. **Submit feedback/issues** via GitHub repository
> 
> The repository is private for now during development and evaluation. Your feedback will help shape whether this becomes a broader team tool or remains a personal productivity approach.
> 
> Questions?"

### **DO THIS:**
- Show the repository structure one more time
- Demonstrate how easy it is to modify chatmodes or agents
- Open to questions and discussion

---

## Backup Talking Points

### **If Asked About Alternatives:**
> "There are other approaches like the AWESOME_COPILOT repository with 200+ chatmodes, but I found that overwhelming. This focuses on core workflows with the ability to extend as needed."

### **If Asked About Maintenance:**
> "Since it's file-based, it's very maintainable. You can modify any chatmode or agent by just editing markdown files. No complex configuration or APIs to manage."

### **If Asked About Team Adoption:**
> "The beauty is that once configured, any team member can clone and install to get the same AI workflows, context, and integrations. It standardizes the AI experience across the team."

### **If Technical Issues Arise:**
- **MCP doesn't connect**: Check `.vscode/mcp.json` configuration
- **Context doesn't load**: Restart VS Code after installation  
- **Quota issues**: Switch to GPT-4.1 in chatmode settings

---

**Total Demo Time: ~30 minutes**
**Preparation Time: 5 minutes**  
**Q&A Buffer: 10 minutes**