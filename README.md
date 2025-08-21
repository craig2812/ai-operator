# AI Operator

AI Operator is a comprehensive system for managing AI agents and workflows in VS Code and Visual Studio. It provides a structured approach to AI-assisted development with GitHub Copilot integration.

## Inspiration

This project is inspired by [Agent OS](https://github.com/buildermethods/agent-os), a framework for building AI agent operating systems.

## Features

- 🤖 **AI Agent Management**: Specialized agents for different development tasks
- 🔧 **Workflow Automation**: Streamlined development processes
- 📋 **MCP Integration**: Model Context Protocol support for enhanced AI capabilities
- ⚙️ **VS Code/Visual Studio Integration**: Seamless integration with your IDE
- 🎯 **GitHub Copilot Optimization**: Enhanced AI assistance for development

## Installation

**Note**: This package is currently private and in testing phase.

For testing, you can install it locally using:

```bash
# Clone the repository
git clone https://github.com/craig2812/ai-operator.git
cd ai-operator

# Install dependencies and link locally
npm install
npm link

# Use the local package
ai-operator
```

When ready for public release, it will be available via:
```bash
npx @craig/ai-operator
```

This will set up the AI Operator system in your project with:
- Core agent files in `.ai-operator/`
- GitHub integration files in `.github/`
- Optional MCP server configurations

## Usage

After installation, you can:

1. **Access Agents**: Use the orchestrator chat mode in VS Code
2. **Configure MCP**: Set up Model Context Protocol servers
3. **Customize Workflows**: Adapt the system to your development needs

## Project Structure

```
.ai-operator/          # Core AI Operator system
├── agents/           # AI agent definitions
├── commands/         # Command templates
├── instructions/     # Development guidelines
├── templates/        # File templates
└── config.yml        # Configuration

.github/              # GitHub integration
├── chatmodes/       # Copilot chat modes
├── prompts/         # Custom prompts
└── copilot-instructions.md

.vscode/              # VS Code settings (optional)
```

## Available Agents

- **Setup Agent**: Project initialization and configuration
- **Analysis Agent**: Requirements analysis and work item processing
- **DEV Agent**: Implementation and coding tasks
- **Code Review Agent**: Quality assurance and code review
- **ADO Agent**: Azure DevOps integration
- **Product Owner**: Business alignment and validation
- **Scrum Master**: Process facilitation and workflow optimization

## MCP Support

The system includes support for various MCP servers:
- Sequential Thinking
- Context7
- ADO MCP
- Custom server configurations

## Contributing

Contributions are welcome! Please see the [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Repository

[https://github.com/craig2812/ai-operator](https://github.com/craig2812/ai-operator)