#!/usr/bin/env node

// AI Operator Installation Script
// This script sets up the AI Operator system in the user's workspace

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 AI Operator Installation Script');
console.log('Setting up AI Operator system in your project...\n');

// Function to copy directory recursively
function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

// Function to prompt user for input
function prompt(question) {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer.toLowerCase());
        });
    });
}

// Main installation function
async function install() {
    try {
        // Copy core AI Operator files (without templates)
        console.log('📁 Setting up AI Operator core system...');
        copyDir('./.ai-operator/agents', './.ai-operator/agents');
        copyDir('./.ai-operator/commands', './.ai-operator/commands');
        copyDir('./.ai-operator/documentation', './.ai-operator/documentation');
        copyDir('./.ai-operator/includes', './.ai-operator/includes');
        copyDir('./.ai-operator/instructions', './.ai-operator/instructions');

        // Copy configuration files
        fs.copyFileSync('./.ai-operator/config.yml', './.ai-operator/config.yml');

        // Copy GitHub integration files
        console.log('🔗 Setting up GitHub integration...');
        copyDir('./.github', './.github');
        console.log('  ✅ Copied orchestrator.prompt.md to .github/prompts/');
        console.log('  ✅ Copied orchestrator.chatmode.md to .github/chatmodes/');

        // Setup initial instruction files from templates
        console.log('📝 Setting up initial instruction files...');
        setupInstructionFiles();

        // Handle MCP configuration
        await setupMCP();

        console.log('\n✅ AI Operator installation completed!');
        console.log('You can now use the AI Operator system in your project.');
        console.log('Run setup commands to customize for your specific project.');

    } catch (error) {
        console.error('❌ Installation failed:', error.message);
        process.exit(1);
    }
}

// MCP setup function
async function setupMCP() {
    const mcpPath = '.vscode/mcp.json';
    const mcpTemplatePath = '.vscode/mcp.template.json';

    // Check if MCP file already exists
    if (fs.existsSync(mcpPath)) {
        console.log('⚠️  Existing .vscode/mcp.json found!');
        console.log('Renaming to mcp.template.json to preserve your configuration...');
        fs.renameSync(mcpPath, mcpTemplatePath);
        console.log('📝 Please review mcp.template.json and manually add any needed configurations.');
    }

    // Ask user if they want to set up MCP servers
    const setupMCP = await prompt('Do you want to set up MCP servers? (y/n): ');

    if (setupMCP === 'y' || setupMCP === 'yes') {
        console.log('\n🤖 Available MCP servers:');
        console.log('1. Sequential Thinking - Dynamic problem-solving');
        console.log('2. Context7 - Advanced context management');
        console.log('3. ADO MCP - Azure DevOps integration');
        console.log('4. Custom - Add your own MCP server');

        const choices = await prompt('Enter numbers (comma-separated) or "all": ');

        let selectedMCPs = [];

        if (choices === 'all') {
            selectedMCPs = ['sequential-thinking', 'context7', 'ado-mcp'];
        } else {
            const choiceMap = {
                '1': 'sequential-thinking',
                '2': 'context7',
                '3': 'ado-mcp'
            };

            selectedMCPs = choices.split(',').map(c => choiceMap[c.trim()]).filter(Boolean);
        }

        if (selectedMCPs.length > 0) {
            createMCPConfig(selectedMCPs);
        }

        // Handle custom MCP
        if (choices.includes('4') || choices.includes('custom')) {
            await setupCustomMCP();
        }
    }
}

// Create MCP configuration
function createMCPConfig(selectedMCPs) {
    const mcpConfig = {
        servers: {}
    };

    const mcpTemplates = {
        'sequential-thinking': {
            command: 'npx',
            args: ['-y', '@modelcontextprotocol/server-sequential-thinking']
        },
        'context7': {
            command: 'npx',
            args: ['-y', 'context7-mcp-server']
        },
        'ado-mcp': {
            command: 'npx',
            args: ['-y', '@azure-devops/mcp', '${input:ado_org}']
        }
    };

    selectedMCPs.forEach(mcp => {
        if (mcpTemplates[mcp]) {
            mcpConfig.servers[mcp] = mcpTemplates[mcp];
        }
    });

    // Add inputs for ADO if selected
    if (selectedMCPs.includes('ado-mcp')) {
        mcpConfig.inputs = [
            {
                id: 'ado_org',
                type: 'promptString',
                description: 'Azure DevOps organization name'
            }
        ];
    }

    // Ensure .vscode directory exists
    if (!fs.existsSync('.vscode')) {
        fs.mkdirSync('.vscode', { recursive: true });
    }

    // Write MCP configuration
    fs.writeFileSync('.vscode/mcp.json', JSON.stringify(mcpConfig, null, 2));
    console.log('✅ MCP configuration created at .vscode/mcp.json');
}

// Setup custom MCP
async function setupCustomMCP() {
    console.log('\n🔧 Custom MCP Setup');
    const name = await prompt('Enter MCP server name: ');
    const command = await prompt('Enter command (e.g., npx -y package-name): ');

    const mcpConfig = JSON.parse(fs.readFileSync('.vscode/mcp.json', 'utf8'));
    mcpConfig.servers[name] = {
        command: command.split(' ')[0],
        args: command.split(' ').slice(1)
    };

    fs.writeFileSync('.vscode/mcp.json', JSON.stringify(mcpConfig, null, 2));
    console.log(`✅ Custom MCP "${name}" added to configuration`);
}

// Setup instruction files from templates
function setupInstructionFiles() {
    // Ensure .github/instructions directory exists
    if (!fs.existsSync('.github/instructions')) {
        fs.mkdirSync('.github/instructions', { recursive: true });
    }

    // Ask about project type for conditional setup
    const projectType = await prompt('Is this a new project (greenfield) or existing project (brownfield)? (new/existing): ');
    const isGreenfield = projectType.toLowerCase() === 'new';

    // Copy and rename code-style templates to instruction format
    const codeStyleTemplates = [
        'code-style.md',
        'code-style-dotnet.md',
        'code-style-javascript.md',
        'typescript-style.md'
    ];

    codeStyleTemplates.forEach(template => {
        const srcPath = `./.ai-operator/templates/code-styles/${template}`;
        const destName = template.replace('.md', '.instructions.md');
        const destPath = `.github/instructions/${destName}`;

        if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`  ✅ Copied ${template} to ${destName}`);
        }
    });

    // Copy and rename best-practices and tech-stack to instruction format
    const coreInstructionTemplates = [
        'best-practices.md',
        'tech-stack.md'
    ];

    coreInstructionTemplates.forEach(template => {
        const srcPath = `./.ai-operator/templates/instructions/${template}`;
        const destName = template.replace('.md', '.instructions.md');
        const destPath = `.github/instructions/${destName}`;

        if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`  ✅ Copied ${template} to ${destName}`);
        }
    });

    // Conditionally copy roadmap for greenfield projects only
    if (isGreenfield) {
        const roadmapSrc = './.ai-operator/templates/instructions/roadmap.md';
        const roadmapDest = '.github/instructions/roadmap.instructions.md';

        if (fs.existsSync(roadmapSrc)) {
            fs.copyFileSync(roadmapSrc, roadmapDest);
            console.log('  ✅ Copied roadmap.md to roadmap.instructions.md (greenfield project)');
        }
    } else {
        console.log('  ⏭️  Skipped roadmap (brownfield project)');
    }

    // Copy existing instruction files to ensure they're in the right place
    const existingInstructions = [
        'copilot-instructions.md'
    ];

    existingInstructions.forEach(file => {
        const srcPath = `./.github/${file}`;
        const destPath = `.github/instructions/${file}`;

        if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`  ✅ Copied ${file} to instructions folder`);
        }
    });
}

    // Copy and rename code-style templates to instruction format
    const codeStyleTemplates = [
        'code-style.md',
        'code-style-dotnet.md',
        'code-style-javascript.md',
        'typescript-style.md'
    ];

    codeStyleTemplates.forEach(template => {
        const srcPath = `./.ai-operator/templates/code-styles/${template}`;
        const destName = template.replace('.md', '.instructions.md');
        const destPath = `.github/instructions/${destName}`;

        if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`  ✅ Copied ${template} to ${destName}`);
        }
    });

    // Copy and rename best-practices and tech-stack to instruction format
    const coreInstructionTemplates = [
        'best-practices.md',
        'tech-stack.md'
    ];

    coreInstructionTemplates.forEach(template => {
        const srcPath = `./.ai-operator/templates/instructions/${template}`;
        const destName = template.replace('.md', '.instructions.md');
        const destPath = `.github/instructions/${destName}`;

        if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`  ✅ Copied ${template} to ${destName}`);
        }
    });

    // Copy other instruction templates
    const otherTemplates = [
        'best-practices.md',
        'project-best-practices.md',
        'roadmap.md',
        'tech-stack.md'
    ];

    otherTemplates.forEach(template => {
        const srcPath = `./.ai-operator/templates/instructions/${template}`;
        const destName = template.replace('.md', '.instructions.md');
        const destPath = `.github/instructions/${destName}`;

        if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`  ✅ Copied ${template} to ${destName}`);
        }
    });

    // Copy existing instruction files to ensure they're in the right place
    const existingInstructions = [
        'copilot-instructions.md'
    ];

    existingInstructions.forEach(file => {
        const srcPath = `./.github/${file}`;
        const destPath = `.github/instructions/${file}`;

        if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`  ✅ Copied ${file} to instructions folder`);
        }
    });
}

// Run installation
install();