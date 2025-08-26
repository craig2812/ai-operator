# Development Setup

This repository is currently in **private development mode** for internal team evaluation.

## Repository Information

- **Repository**: `craig2812/ai-operator`
- **Access**: Private repository - available to team members
- **Status**: Development/evaluation phase - not yet published as NPM package

## Setup for Development

### 1. Clone Repository
```bash
git clone https://github.com/craig2812/ai-operator.git
cd ai-operator
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Link Globally (Optional)
```bash
# Link for system-wide access
npm link

# Now you can run from any directory
cd /path/to/your-project
ai-operator
```

### 4. Run Directly
```bash
# Or run directly from the repository
node install.js
```

## Development Workflow

### Making Changes
1. **Modify chatmodes**: Edit files in `assets/chatmodes/`
2. **Update agents**: Edit files in `assets/prompts/`
3. **Modify installation**: Edit `install.js`
4. **Update templates**: Edit files in `.ai-operator/templates/`

### Testing Changes
1. **Create test project** directory
2. **Run installation**: `node install.js` or `ai-operator`
3. **Test workflows** in VS Code
4. **Validate MCP integrations**

### Repository Structure
```
ai-operator/
├── assets/
│   ├── chatmodes/          # GitHub Copilot chatmodes
│   └── prompts/            # Direct agent prompt files
├── .ai-operator/
│   ├── commands/           # Workflow command templates
│   ├── instructions/       # Core instruction templates
│   └── templates/          # Code style and project templates
├── install.js              # Main installation script
├── DEMO-GUIDE.md           # Demo presentation guide
└── README.md               # Main documentation
```

## Future Plans

This repository will remain private during development and team evaluation. Once mature, it may be:
- Published as an NPM package
- Made public for wider team adoption
- Integrated into official team tooling

## Feedback

Please provide feedback via:
- GitHub Issues in this repository
- Direct discussion with the repository owner
- Team channels for internal evaluation

---

*This is an experimental approach to AI workflow management - your feedback helps shape the direction!*