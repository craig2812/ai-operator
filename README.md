# AI Operator

# AI Operator - v1.0.0

**Note**: This is the initial release of AI Operator as an AI steering and context management package. While feature-complete, it represents an experimental approach to AI workflow orchestration and should be used as a foundation for developing your own AI-assisted development practices.

AI Operator is a comprehensive system for managing AI agents and workflows in VS Code and Visual Studio. It provides a structured approach to AI-assisted development with GitHub Copilot integration, offering two complementary workflow approaches: **Agent Mode** and **Chatmode Mode**.

## Intended Audience & Use Cases

AI Operator is designed for:

- **Team Leads & Architects**: Establish consistent AI usage patterns across development teams
- **Individual Developers**: Structure personal AI-assisted development workflows
- **AI/ML Practitioners**: Experiment with context engineering and prompt orchestration
- **DevOps Engineers**: Integrate AI assistance into existing development pipelines

**Important**: This initial release is intentionally feature-rich to demonstrate capabilities. In practice, most teams benefit from simpler, more focused approaches. Consider AI Operator a starting point for developing your own AI workflow strategies rather than a prescriptive solution.

## Features

- 🤖 **Dual Workflow Support**: Choose between Agent Mode or Chatmode Mode
- 🔄 **Seamless Context Loading**: Automatic GitHub Copilot integration
- 📋 **MCP Integration**: Model Context Protocol support for enhanced AI capabilities
- ⚙️ **VS Code/Visual Studio Integration**: Seamless integration with your IDE
- 🎯 **GitHub Copilot Optimization**: Enhanced AI assistance for development
- 🛠️ **Flexible Installation**: Install only what you need

## Installation

### From Repository (Current Method)

```bash
# Clone the repository
git clone https://github.com/craig2812/ai-operator.git
cd ai-operator

# Install dependencies (if any)
npm install

# Option 1: Run directly
node install.js

# Option 2: Link globally for system-wide access
npm link
# Then from any project directory:
ai-operator
```

### Installation Options

The installer will prompt you to choose:

1. **Choose installation type:**

   - `1` - Demo mode (4 core chatmodes + basic setup) **← Recommended for first time**
   - `2` - Chatmodes only (GitHub Copilot chatmodes)
   - `3` - Agents only (AI agent workflow system)
   - `4` - Both chatmodes and agents (complete system)

2. **If installing chatmodes:**

   - `1` - Workflow chatmodes only (8 core modes, recommended)
   - `2` - All available chatmodes (15 total, including helpers)

3. **Choose project type:**

   - `1` - New project (greenfield)
   - `2` - Existing project (brownfield)

4. **Configure optional integrations:**
   - MCP servers (Sequential Thinking, Context7, ADO MCP)
   - VS Code settings (enable prompt files)

## What Gets Installed

### Core System Files

```
.ai-operator/          # Core AI Operator system (if agents selected)
├── commands/         # 18 command templates
├── instructions/     # Core instruction files
├── templates/        # Code and project templates
├── config.yml        # Main configuration
└── config.local.yml  # Local overrides
```

### GitHub Integration Files

```
.github/
├── copilot-instructions.md     # Auto-loaded by GitHub Copilot
├── instructions/                # Manual instruction access
│   ├── best-practices.instructions.md
│   ├── tech-stack.instructions.md
│   ├── git-workflow.instructions.md
│   └── templates.instructions.md
├── chatmodes/                   # Selected chatmodes (if installed)
│   ├── orchestrator.chatmode.md
│   ├── dev.chatmode.md
│   ├── code-review.chatmode.md
│   └── [other selected chatmodes]
└── prompts/                     # Agent prompts (if agents installed)
    ├── orchestrator.prompt.md
    ├── dev.prompt.md
    ├── code-review.prompt.md
    └── [other agent prompts]
```

## Quick Start

### 1. Clone and Install the System

```bash
git clone https://github.com/craig2812/ai-operator.git
cd ai-operator
npm install
node install.js  # Select demo mode for first time
```

### 2. Enable VS Code Integration (Recommended)

```json
// .vscode/settings.json (created automatically if selected)
{
  "chat.promptFiles": true
}
```

### 3. Restart VS Code

Restart VS Code to load all settings and integrations.

## Usage

### 🎯 Chatmode Workflow (Recommended for Beginners)

1. **Start with Orchestrator**: Use `@.github/chatmodes/orchestrator.chatmode.md`
2. **Follow guidance**: Orchestrator will recommend the best chatmode for your task
3. **Switch chatmodes**: Use the recommended chatmode for specialized assistance

### 🤖 Agent Workflow (Advanced Users)

1. **Direct agent access**: Use `@.github/prompts/[agent-name].prompt.md`
2. **Command execution**: Use `@.ai-operator/commands/[command-name].md`
3. **Workflow coordination**: Let agents handle complex multi-step processes

### 📝 Context Access

- **Automatic**: `.github/copilot-instructions.md` loads automatically
- **Manual**: Use `@.github/instructions/` to load specific context files
- **Agent-specific**: Context loads automatically when agents are activated

## Available Components

### Core Workflow Chatmodes (8 Total)

- **Orchestrator** - Chatmode selection and workflow guidance
- **Setup & Analysis** - Project initialization and analysis
- **DEV Mode** - Feature implementation and coding
- **Code Review** - Quality assurance and review
- **Testing** - Test creation and validation
- **ADO Mode** - Azure DevOps integration
- **Product Owner** - Business alignment and requirements
- **Scrum Master** - Process facilitation and management

### Optional Helper Chatmodes (7 Total)

- **Explainer** - Complex concept explanation
- **Test Writer** - Comprehensive test creation
- **Bullet Points** - Structured response format
- **Ultra Concise** - Brief, to-the-point answers
- **HTML/Table/YAML** - Formatted output modes

### MCP Server Integration

- **Sequential Thinking** - Dynamic problem-solving
- **Context7** - Advanced context management
- **ADO MCP** - Azure DevOps integration
- **Custom MCP** - Support for any MCP-compatible server

## Verification

After installation, verify these components exist:

- ✅ `.github/copilot-instructions.md` (auto-loaded context)
- ✅ `.github/instructions/` (manual context files)
- ✅ `.github/chatmodes/` (if chatmodes selected)
- ✅ `.github/prompts/` (if agents selected)
- ✅ `.ai-operator/` (if agents selected)
- ✅ `.vscode/settings.json` (if VS Code integration selected)
- ✅ `.vscode/mcp.json` (if MCP servers selected)

## Getting Started Guide

For your first use of AI Operator:

1. **Start Simple**: Begin with chatmodes only installation
2. **Experiment**: Try the Orchestrator chatmode to understand workflow options
3. **Analyze**: Run setup analysis on an existing project to see context generation
4. **Customize**: Modify generated instruction files to match your team's practices
5. **Extend**: Add new chatmodes or agents as your needs evolve

## Troubleshooting

### Command Not Found

```bash
# Ensure you're in the cloned repository directory
cd ai-operator

# Run installation directly
node install.js

# Or if you've linked globally
npm link
ai-operator
```

### Context Files Not Loading

1. Ensure VS Code has `"chat.promptFiles": true` in settings
2. Restart VS Code after installation
3. Check that files exist in `.github/` directory

### MCP Servers Not Working

1. Check `.vscode/mcp.json` configuration
2. Ensure MCP-compatible VS Code extension is installed
3. Restart VS Code after MCP configuration

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT License - see [LICENSE](LICENSE) for details.

---

_AI Operator v1.0.0 - Initial release as an AI steering and context management package_
