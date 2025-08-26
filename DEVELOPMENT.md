# AI Operator Development Guide

This guide covers development, testing, and contribution workflows for the AI Operator project.

## Repository Structure

### 📦 Package Files (Distributed via NPM)

```
.ai-operator/          # Core system files
├── commands/         # 18 command templates
├── instructions/     # Core instruction files
├── templates/        # Code and project templates
├── includes/         # Template includes and snippets
├── documentation/    # System documentation
├── config.yml        # Main configuration
└── config.local.yml  # Local configuration overrides

assets/               # User-facing installation files
├── chatmodes/        # 15 specialized chatmodes
└── prompts/          # 8 agent prompt files

install.js            # Installation script
package.json          # NPM package configuration
README.md             # User documentation
```

### 🛠️ Development Files (Repository Only)

```
development/              # Development and testing tools
├── testing/          # Test files and guides
│   ├── *-tests.md   # Agent testing specifications
│   └── diagrams/    # Workflow diagrams
└── workingOn/       # Development notes

DEVELOPMENT.md        # This file
CONTRIBUTING.md       # Contributing guidelines
LICENSE              # MIT license
changelog.md         # Version history
```

## Local Development Setup

### 1. Clone and Install Dependencies

```bash
git clone https://github.com/craig2812/ai-operator.git
cd ai-operator
npm install
```

### 2. Link Package for Testing

```bash
# Create global link
npm link

# Test the link
which ai-operator
# Should show: /usr/local/bin/ai-operator -> /usr/local/lib/node_modules/ai-operator/install.js
```

### 3. Test Installation in Another Project

```bash
# Create test directory
mkdir /tmp/test-ai-operator
cd /tmp/test-ai-operator

# Run installation
ai-operator

# Or use npx with full path
npx /path/to/your/ai-operator/install.js
```

## Development Workflow

### Making Changes

1. **Agent Files**: Edit files in `.ai-operator/agents/`
2. **Chatmodes**: Edit files in `assets/chatmodes/`
3. **Commands**: Edit files in `.ai-operator/commands/`
4. **Templates**: Edit files in `.ai-operator/templates/`
5. **Install Script**: Edit `install.js` for installation logic

### Testing Changes

#### Manual Testing

```bash
# After making changes, test in a fresh directory
cd /tmp/test-project-$(date +%s)
ai-operator

# Test specific installation options
# - Try different installation choices (1, 2, 3)
# - Test both greenfield and brownfield options
# - Verify MCP and VS Code configurations
```

#### Package Testing

```bash
# Test package creation
npm pack

# Extract and verify contents
tar -tzf ai-operator-*.tgz | head -20

# Test installation from package
cd /tmp/test-from-package
npm install /path/to/ai-operator-*.tgz
node install.js
```

#### Verification Testing

```bash
# Verify all components install correctly
cd test-installation-directory

# Check core files exist
ls -la .ai-operator/
ls -la .github/

# Check specific components based on selection
ls -la .github/chatmodes/      # If chatmodes selected
ls -la .github/prompts/        # If agents selected
ls -la .vscode/                # If VS Code integration selected
```

### Component Development

#### Adding New Agents

1. Create agent file in `assets/prompts/new-agent.md`
2. Create corresponding chatmode in `assets/chatmodes/new-agent.chatmode.md`
3. Add installation logic to `install.js` if needed
4. Create test file in `development/testing/new-agent-tests.md`

#### Adding New Commands

1. Create command file in `.ai-operator/commands/new-command.md`
2. Follow existing command structure and includes
3. Test command execution in agent workflows
4. Document command in README if it's a core command

#### Modifying Installation Logic

1. Edit `install.js` for new installation options
2. Test all installation paths thoroughly
3. Update package.json `files` array if adding new directories
4. Verify package creation includes all necessary files

## Testing Guidelines

### Required Tests Before PR

1. **Clean Installation Test**

```bash
# Test in completely fresh environment
cd /tmp/fresh-$(date +%s)
ai-operator
# Select option 3 (both chatmodes and agents)
# Select option 1 (workflow chatmodes only)
# Select option 1 (greenfield)
# Configure MCP servers
# Configure VS Code settings
```

2. **Package Contents Test**

```bash
npm pack
tar -tzf *.tgz | grep -E "\.(md|yml|js)$" | wc -l
# Should show significant number of files (70+)
```

3. **File Verification Test**

```bash
# After installation, verify key files exist:
ls .github/copilot-instructions.md
ls .github/instructions/
ls .github/chatmodes/orchestrator.chatmode.md
ls .ai-operator/commands/
ls .ai-operator/config.yml
ls .vscode/settings.json  # If VS Code integration selected
ls .vscode/mcp.json       # If MCP servers selected
```

### Test Scenarios

#### Installation Scenarios

- [ ] Chatmodes only (option 1)
- [ ] Agents only (option 2)
- [ ] Both chatmodes and agents (option 3)
- [ ] Workflow chatmodes only vs all chatmodes
- [ ] Greenfield vs brownfield project types
- [ ] All MCP server options
- [ ] VS Code integration options

#### Error Scenarios

- [ ] Running in directory with existing `.ai-operator/`
- [ ] Running in directory with existing `.github/chatmodes/`
- [ ] Invalid user input (non-numeric responses)
- [ ] Permission issues (read-only directories)

## Code Standards

### File Organization

- Use consistent header structure in all markdown files
- Include proper front matter in chatmodes
- Follow existing patterns in command templates
- Use meaningful file names and directory structure

### Installation Script Standards

- Always check if files/directories exist before copying
- Provide clear user feedback for each step
- Handle errors gracefully with useful error messages
- Support both new and existing installations

### Documentation Standards

- Keep user README focused on installation and usage
- Keep development docs in DEVELOPMENT.md
- Use consistent markdown formatting
- Include code examples where helpful

## Release Process

### Pre-Release Checklist

- [ ] All tests passing
- [ ] Package.json version updated
- [ ] Changelog updated
- [ ] README updated if needed
- [ ] Clean package creation test
- [ ] Installation test in fresh environment

### Release Commands

```bash
# Update version
npm version patch|minor|major

# Create and test package
npm pack
# Test the package in fresh environment

# Publish (when ready for public release)
npm publish
```

### Post-Release

- [ ] Tag release in GitHub
- [ ] Update any dependent documentation
- [ ] Monitor for user issues

## Troubleshooting Development Issues

### Common Issues

**Link not working:**

```bash
npm unlink -g ai-operator
npm link
```

**Package contents wrong:**

```bash
# Check package.json files array
# Verify all directories exist in repository
npm pack --dry-run
```

**Installation failing:**

```bash
# Check install.js for errors
# Verify source files exist
# Test in completely clean environment
```

## Contributing

### Pull Request Process

1. Fork the repository
2. Create feature branch
3. Make changes following code standards
4. Test thoroughly using guidelines above
5. Submit pull request with clear description

### Areas for Contribution

- **New Agents**: Add specialized agents for new domains
- **Enhanced Commands**: Improve existing command templates
- **Better Testing**: Add automated testing capabilities
- **Documentation**: Improve user guides and examples
- **Bug Fixes**: Address issues in installation or usage

### Getting Help

- **Issues**: Create GitHub issue for bugs or questions
- **Discussions**: Use GitHub discussions for ideas and feedback
- **Documentation**: Check existing docs first

---

_For user installation and usage instructions, see [README.md](README.md)_
