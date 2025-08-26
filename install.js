#!/usr/bin/env node

// AI Operator Installation Script
// This script sets up the AI Operator system in the user's workspace
// Version: 1.0.0
// Author: Craig Farrell
// Description: Installs AI Operator system for GitHub Copilot workflow optimization

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 AI Operator Installation Script');
console.log('Setting up AI Operator system in your project...\n');

// Get the directory where the script is located (package root)
const packageRoot = path.dirname(__filename);

// Function to copy directory recursively
function copyDir(src, dest) {
    // Resolve source path relative to package root
    const resolvedSrc = path.join(packageRoot, src);

    if (!fs.existsSync(resolvedSrc)) {
        console.error(`❌ Source directory does not exist: ${resolvedSrc}`);
        return;
    }

    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(resolvedSrc, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(resolvedSrc, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDir(path.join(resolvedSrc, entry.name), destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

// Function to copy a single file
function copyFile(src, dest) {
    // Resolve source path relative to package root
    const resolvedSrc = path.join(packageRoot, src);

    if (!fs.existsSync(resolvedSrc)) {
        console.error(`❌ Source file does not exist: ${resolvedSrc}`);
        return;
    }

    // Ensure destination directory exists
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }

    fs.copyFileSync(resolvedSrc, dest);
}

// Function to prompt user for number/letter input
function prompt(question) {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer.trim());
        });
    });
}

// Main installation function
async function install() {
    try {
        console.log('🤖 What would you like to install?');
        console.log('1. Demo mode (3 core chatmodes + basic setup)');
        console.log('2. Chatmodes only');
        console.log('3. Agents only');
        console.log('4. Both chatmodes and agents');

        const installChoice = await prompt('Enter your choice (1-4): ');

        let installAgents = false;
        let installChatmodes = false;
        let demoMode = false;

        switch (installChoice) {
            case '1':
                demoMode = true;
                installChatmodes = true;
                break;
            case '2':
                installChatmodes = true;
                break;
            case '3':
                installAgents = true;
                break;
            case '4':
                installAgents = true;
                installChatmodes = true;
                break;
            default:
                console.log('❌ Invalid choice. Please enter 1, 2, 3, or 4.');
                process.exit(1);
        }

        // Install based on user selection
        if (installChoice === '1') {
            // Demo mode
            await installDemoSystem();
        } else if (installChoice === '2') {
            // Chatmodes only
            await installChatmodesSystem();
        } else if (installChoice === '3') {
            // Agents only
            await installAgentsSystem();
        } else if (installChoice === '4') {
            // Both chatmodes and agents
            await installAgentsSystem();
            await installChatmodesSystem();
        }

        // Setup instruction files from templates (skip for demo mode)
        if (!demoMode) {
            console.log('📝 Setting up initial instruction files...');
            await setupInstructionFiles();
        } else {
            console.log('📝 Setting up basic instruction files for demo...');
            await setupDemoInstructionFiles();
        }

        // Handle MCP configuration
        await setupMCP();

        // Configure VS Code settings
        console.log('💻 Configuring VS Code settings...');
        await setupVSCodeSettings();

        console.log('\n✅ AI Operator installation completed!');
        console.log('You can now use the AI Operator system in your project.');
        console.log('Run setup commands to customize for your specific project.');

    } catch (error) {
        console.error('❌ Installation failed:', error.message);
        process.exit(1);
    }
}

// Install demo system (workflow-focused demo)
async function installDemoSystem() {
    console.log('🎯 Setting up AI Operator Demo System (Hybrid Workflow)...');
    
    // Ensure all required directories exist
    if (!fs.existsSync('.github/chatmodes')) {
        fs.mkdirSync('.github/chatmodes', { recursive: true });
    }
    if (!fs.existsSync('.github/prompts')) {
        fs.mkdirSync('.github/prompts', { recursive: true });
    }
    if (!fs.existsSync('.github/instructions')) {
        fs.mkdirSync('.github/instructions', { recursive: true });
    }
    if (!fs.existsSync('.ai-operator')) {
        fs.mkdirSync('.ai-operator', { recursive: true });
    }

    // Install core AI Operator system files (required for agents to function)
    console.log('📁 Installing AI Operator core system files...');
    copyDir('.ai-operator/commands', './.ai-operator/commands');
    copyDir('.ai-operator/documentation', './.ai-operator/documentation');
    copyDir('.ai-operator/includes', './.ai-operator/includes');
    copyDir('.ai-operator/instructions', './.ai-operator/instructions');
    copyDir('.ai-operator/templates', './.ai-operator/templates');

    // Copy configuration files
    copyFile('.ai-operator/config.yml', './.ai-operator/config.yml');
    copyFile('.ai-operator/config.local.yml', './.ai-operator/config.local.yml');

    // Install hybrid demo workflow: Chatmodes + Prompt files
    console.log('🔧 Installing hybrid demo workflow...');
    
    // Chatmodes: Orchestrator -> Setup
    copyFile('assets/chatmodes/orchestrator.chatmode.md', './.github/chatmodes/orchestrator.chatmode.md');
    copyFile('assets/chatmodes/setup-agent.chatmode.md', './.github/chatmodes/setup.chatmode.md');
    
    // Prompt files: ADO -> Scrum Master
    copyFile('assets/prompts/ado-agent.md', './.github/prompts/ado.prompt.md');
    copyFile('assets/prompts/scrum-master.md', './.github/prompts/scrum-master.prompt.md');
    
    // Setup basic instruction files for demo (agents need these)
    console.log('📝 Setting up basic instruction files for demo agents...');
    await setupDemoInstructionFiles();
    
    console.log('✅ Complete demo system installed:');
    console.log('   📁 Core AI Operator system (.ai-operator/ with all commands & templates)');
    console.log('   🎯 Chatmodes: Orchestrator → Setup');
    console.log('   📋 Prompt files: ADO → Scrum Master');
    console.log('   📋 Instruction files: Essential context files for agent functionality');
    console.log('🎉 Demo workflow: Full agent functionality with hybrid chatmode/prompt approach');
}

// Install agents system
async function installAgentsSystem() {
    console.log('📁 Setting up AI Operator agents...');
    copyDir('.ai-operator/commands', './.ai-operator/commands');
    copyDir('.ai-operator/documentation', './.ai-operator/documentation');
    copyDir('.ai-operator/includes', './.ai-operator/includes');
    copyDir('.ai-operator/instructions', './.ai-operator/instructions');
    copyDir('.ai-operator/templates', './.ai-operator/templates');

    // Copy configuration files
    copyFile('.ai-operator/config.yml', './.ai-operator/config.yml');
    copyFile('.ai-operator/config.local.yml', './.ai-operator/config.local.yml');
    console.log('✅ Agents system installed');
}

// Install chatmodes system
async function installChatmodesSystem() {
    console.log('🎯 What chatmodes would you like to install?');
    console.log('1. Workflow chatmodes only (orchestrator + agent-specific, no helpers)');
    console.log('2. All available chatmodes (including helper chatmodes)');

    const chatmodeChoice = await prompt('Enter your choice (1-2): ');

    // Ensure .github directories exist
    if (!fs.existsSync('.github/chatmodes')) {
        fs.mkdirSync('.github/chatmodes', { recursive: true });
    }
    if (!fs.existsSync('.github/prompts')) {
        fs.mkdirSync('.github/prompts', { recursive: true });
    }

    // Always install orchestrator chatmode and prompt
    copyFile('assets/chatmodes/orchestrator.chatmode.md', './.github/chatmodes/orchestrator.chatmode.md');
    copyFile('assets/prompts/orchestrator-agent.md', './.github/prompts/orchestrator.prompt.md');
    console.log('✅ Installed orchestrator chatmode and prompt');

    switch (chatmodeChoice) {
        case '1':
            // Install workflow chatmodes and prompts (agent-specific)
            console.log('🔧 Installing workflow chatmodes and prompts...');
            // Chatmodes
            copyFile('assets/chatmodes/setup-agent.chatmode.md', './.github/chatmodes/setup-agent.chatmode.md');
            copyFile('assets/chatmodes/dev.chatmode.md', './.github/chatmodes/dev.chatmode.md');
            copyFile('assets/chatmodes/code-review.chatmode.md', './.github/chatmodes/code-review.chatmode.md');
            copyFile('assets/chatmodes/testing-agent.chatmode.md', './.github/chatmodes/testing-agent.chatmode.md');
            copyFile('assets/chatmodes/ado-agent.chatmode.md', './.github/chatmodes/ado-agent.chatmode.md');
            copyFile('assets/chatmodes/product-owner.chatmode.md', './.github/chatmodes/product-owner.chatmode.md');
            copyFile('assets/chatmodes/scrum-master.chatmode.md', './.github/chatmodes/scrum-master.chatmode.md');
            // Prompts
            copyFile('assets/prompts/setup-agent.md', './.github/prompts/setup.prompt.md');
            copyFile('assets/prompts/dev.md', './.github/prompts/dev.prompt.md');
            copyFile('assets/prompts/code-review.md', './.github/prompts/code-review.prompt.md');
            copyFile('assets/prompts/testing-agent.md', './.github/prompts/testing.prompt.md');
            copyFile('assets/prompts/ado-agent.md', './.github/prompts/ado.prompt.md');
            copyFile('assets/prompts/product-owner.md', './.github/prompts/product-owner.prompt.md');
            copyFile('assets/prompts/scrum-master.md', './.github/prompts/scrum-master.prompt.md');
            console.log('✅ Workflow chatmodes and prompts installed');
            break;
        case '2':
            // Install all available chatmodes and all agent prompts
            console.log('🔧 Installing all chatmodes and prompts...');
            copyDir('assets/chatmodes', './.github/chatmodes');
            copyDir('assets/prompts', './.github/prompts');
            console.log('✅ All chatmodes and agent prompts installed');
            break;

        default:
            console.log('❌ Invalid choice. Installing workflow chatmodes and prompts only.');
            // Install workflow chatmodes and prompts as default (same as option 1)
            console.log('🔧 Installing workflow chatmodes and prompts...');
            // Chatmodes
            copyFile('assets/chatmodes/setup-agent.chatmode.md', './.github/chatmodes/setup-agent.chatmode.md');
            copyFile('assets/chatmodes/dev.chatmode.md', './.github/chatmodes/dev.chatmode.md');
            copyFile('assets/chatmodes/code-review.chatmode.md', './.github/chatmodes/code-review.chatmode.md');
            copyFile('assets/chatmodes/testing-agent.chatmode.md', './.github/chatmodes/testing-agent.chatmode.md');
            copyFile('assets/chatmodes/ado-agent.chatmode.md', './.github/chatmodes/ado-agent.chatmode.md');
            copyFile('assets/chatmodes/product-owner.chatmode.md', './.github/chatmodes/product-owner.chatmode.md');
            copyFile('assets/chatmodes/scrum-master.chatmode.md', './.github/chatmodes/scrum-master.chatmode.md');
            // Prompts
            copyFile('assets/prompts/setup-agent.md', './.github/prompts/setup.prompt.md');
            copyFile('assets/prompts/dev.md', './.github/prompts/dev.prompt.md');
            copyFile('assets/prompts/code-review.md', './.github/prompts/code-review.prompt.md');
            copyFile('assets/prompts/testing-agent.md', './.github/prompts/testing.prompt.md');
            copyFile('assets/prompts/ado-agent.md', './.github/prompts/ado.prompt.md');
            copyFile('assets/prompts/product-owner.md', './.github/prompts/product-owner.prompt.md');
            copyFile('assets/prompts/scrum-master.md', './.github/prompts/scrum-master.prompt.md');
            console.log('✅ Workflow chatmodes and prompts installed');
    }
}

// Setup instruction files from templates
async function setupInstructionFiles() {
    // Ask about project type for conditional setup
    console.log('🏗️  Project type:');
    console.log('1. New project (greenfield)');
    console.log('2. Existing project (brownfield)');

    const projectType = await prompt('Enter your choice (1-2): ');
    const isGreenfield = projectType === '1';

    // Copy and rename code-style templates to instruction format
    const codeStyleTemplates = [
        'code-style.md',
        'code-style-dotnet.md',
        'code-style-javascript.md',
        'code-style-typescript.md'
    ];

    codeStyleTemplates.forEach(template => {
        const srcPath = `.ai-operator/templates/code-styles/${template}`;
        const destName = template.replace('.md', '.instructions.md');
        const destPath = `.github/instructions/${destName}`;

        if (fs.existsSync(path.join(packageRoot, srcPath))) {
            copyFile(srcPath, destPath);
            console.log(`  ✅ Copied ${template} to ${destName}`);
        }
    });

    // Handle copilot-instructions.md specially - goes to .github/ root for auto-loading
    const copilotInstructionsSrc = '.ai-operator/instructions/copilot-instructions.md';
    if (fs.existsSync(path.join(packageRoot, copilotInstructionsSrc))) {
        copyFile(copilotInstructionsSrc, '.github/copilot-instructions.md');
        console.log('  ✅ Copied copilot-instructions.md to .github/copilot-instructions.md (auto-loaded by GitHub Copilot)');
    }

    // Copy and rename remaining core instructions to instruction format
    const coreInstructionTemplates = [
        'best-practices.md',
        'tech-stack.md',
        'git-workflow.md',
        'templates.md'
    ];

    coreInstructionTemplates.forEach(template => {
        const srcPath = `.ai-operator/instructions/${template}`;
        const destName = template.replace('.md', '.instructions.md');
        const destPath = `.github/instructions/${destName}`;

        if (fs.existsSync(path.join(packageRoot, srcPath))) {
            copyFile(srcPath, destPath);
            console.log(`  ✅ Copied ${template} to ${destName}`);
        }
    });

    // Conditionally copy roadmap for greenfield projects only
    if (isGreenfield) {
        const roadmapSrc = '.ai-operator/templates/instructions/roadmap.md';
        const roadmapDest = '.github/instructions/roadmap.instructions.md';

        if (fs.existsSync(path.join(packageRoot, roadmapSrc))) {
            copyFile(roadmapSrc, roadmapDest);
            console.log('  ✅ Copied roadmap.md to roadmap.instructions.md (greenfield project)');
        }
    } else {
        console.log('  ⏭️  Skipped roadmap (brownfield project)');
    }
}

// Setup basic instruction files for demo
async function setupDemoInstructionFiles() {
    // Only copy the essentials for demo
    const copilotInstructionsSrc = '.ai-operator/instructions/copilot-instructions.md';
    if (fs.existsSync(path.join(packageRoot, copilotInstructionsSrc))) {
        copyFile(copilotInstructionsSrc, '.github/copilot-instructions.md');
        console.log('  ✅ Copied copilot-instructions.md (auto-loaded by GitHub Copilot)');
    }

    // Copy essential code style for demo
    const codeStyleSrc = '.ai-operator/templates/code-styles/code-style.md';
    if (fs.existsSync(path.join(packageRoot, codeStyleSrc))) {
        copyFile(codeStyleSrc, '.github/instructions/code-style.instructions.md');
        console.log('  ✅ Copied code-style.instructions.md');
    }
    
    console.log('  📋 Demo setup complete - streamlined for team demonstration');
}

// Setup VS Code settings
async function setupVSCodeSettings() {
    const settingsPath = '.vscode/settings.json';

    // Ask user if they want to configure VS Code settings
    console.log('💻 Configure VS Code settings:');
    console.log('1. Yes - Enable prompt files');
    console.log('2. No - Skip configuration');

    const configureSettings = await prompt('Enter your choice (1-2): ');

    if (configureSettings === '1') {
        // Ensure .vscode directory exists
        if (!fs.existsSync('.vscode')) {
            fs.mkdirSync('.vscode', { recursive: true });
        }

        let settings = {};

        // Read existing settings if they exist
        if (fs.existsSync(settingsPath)) {
            try {
                const existingSettings = fs.readFileSync(settingsPath, 'utf8');
                settings = JSON.parse(existingSettings);
            } catch (error) {
                console.log('⚠️  Could not parse existing settings.json, will create a new one');
            }
        }

        // Add or update the chat.promptFiles setting
        settings['chat.promptFiles'] = true;

        // Write the settings back to file
        fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
        console.log('✅ VS Code settings updated to enable prompt files');
    } else {
        console.log('⏭️  Skipped VS Code settings configuration');
        console.log('   You can manually enable prompt files in VS Code settings if needed');
    }
}

// MCP setup function
async function setupMCP() {
    const mcpPath = '.vscode/mcp.json';
    const mcpTemplatePath = '.vscode/mcp.template.json';

    // Check if MCP file already exists
    let existingMCPConfig = { servers: {} };
    if (fs.existsSync(mcpPath)) {
        console.log('📝 Existing .vscode/mcp.json found - will append to your current configuration');
        try {
            const existingContent = fs.readFileSync(mcpPath, 'utf8');
            existingMCPConfig = JSON.parse(existingContent);
            if (!existingMCPConfig.servers) {
                existingMCPConfig.servers = {};
            }
        } catch (error) {
            console.log('⚠️  Could not parse existing mcp.json, will create a new one');
            existingMCPConfig = { servers: {} };
        }
    }

    // MCP server selection
    console.log('🤖 Configure MCP servers:');
    console.log('1. Sequential Thinking - Dynamic problem-solving');
    console.log('2. Context7 - Advanced context management');
    console.log('3. ADO MCP - Azure DevOps integration');
    console.log('4. All - Install all MCP servers');
    console.log('5. None - Skip MCP configuration');

    const mcpChoice = await prompt('Enter your choice (1-5): ');

    let selectedMCPs = [];

    switch (mcpChoice) {
        case '1':
            selectedMCPs = ['sequential-thinking'];
            break;
        case '2':
            selectedMCPs = ['context7'];
            break;
        case '3':
            selectedMCPs = ['ado-mcp'];
            break;
        case '4':
            selectedMCPs = ['sequential-thinking', 'context7', 'ado-mcp'];
            break;
        case '5':
            console.log('⏭️  Skipped MCP configuration');
            return;
        default:
            console.log('❌ Invalid choice. Skipping MCP configuration.');
            return;
    }

    if (selectedMCPs.length > 0) {
        createMCPConfig(selectedMCPs, existingMCPConfig);
    }
}

// Create MCP configuration
function createMCPConfig(selectedMCPs, existingConfig = { servers: {} }) {
    const mcpConfig = {
        servers: { ...existingConfig.servers } // Start with existing servers
    };

    // Preserve existing inputs if they exist
    if (existingConfig.inputs) {
        mcpConfig.inputs = [...existingConfig.inputs];
    }

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

    // Add inputs for ADO if selected (merge with existing)
    if (selectedMCPs.includes('ado-mcp')) {
        if (!mcpConfig.inputs) {
            mcpConfig.inputs = [];
        }

        // Only add if not already exists
        const adoInputExists = mcpConfig.inputs.some(input => input.id === 'ado_org');
        if (!adoInputExists) {
            mcpConfig.inputs.push({
                id: 'ado_org',
                type: 'promptString',
                description: 'Azure DevOps organization name'
            });
        }
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
    console.log('Enter the MCP server name and command when prompted.');

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

// Run installation
(async () => {
    try {
        await install();
    } catch (error) {
        console.error('❌ Installation failed:', error.message);
        process.exit(1);
    }
})();