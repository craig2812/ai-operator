# MCP Server Setup Template

This template provides configurations and installation steps for recommended MCP servers: Sequential Thinking, Context7, and ADO MCP. Use this to set up MCP servers for your project or globally.

## General Guidelines

- **Project-Level Setup**: Add to `.vscode/mcp.json` in your project root. This can be automated as part of project initialization.
- **Global-Level Setup**: Add to your IDE's user settings (e.g., VS Code's `settings.json`). This should be done manually by the user for security and personalization.
- **Security Note**: Always review server configurations and ensure they align with your organization's security policies.

## 1. Sequential Thinking MCP

**Description**: Dynamic and reflective problem-solving through thought sequences. Enhances reasoning without external connections.

### Project-Level Configuration
Add to `.vscode/mcp.json`:
```json
{
  "servers": {
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    }
  }
}
```

### Global-Level Configuration
Add to VS Code's `settings.json`:
```json
{
  "chat.mcp.servers": {
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    }
  }
}
```

### Global Installation Steps
1. Open VS Code.
2. Go to Settings (Ctrl/Cmd + ,).
3. Search for "mcp" and locate "Chat: Mcp".
4. Add the configuration under "Chat: Mcp: Servers".
5. Save and restart VS Code.
6. Verify by checking the MCP server list in the chat interface.

## 2. Context7 MCP

**Description**: Advanced context management for development workflows (assumed based on reference; confirm specific implementation).

### Project-Level Configuration
Add to `.vscode/mcp.json`:
```json
{
  "servers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "context7-mcp-server"]
    }
  }
}
```

### Global-Level Configuration
Add to VS Code's `settings.json`:
```json
{
  "chat.mcp.servers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "context7-mcp-server"]
    }
  }
}
```

### Global Installation Steps
1. Open VS Code.
2. Go to Settings (Ctrl/Cmd + ,).
3. Search for "mcp" and locate "Chat: Mcp".
4. Add the configuration under "Chat: Mcp: Servers".
5. Save and restart VS Code.
6. Verify by checking the MCP server list in the chat interface.

## 3. ADO MCP

**Description**: Azure DevOps integration for work item management and project tracking.

### Project-Level Configuration
Add to `.vscode/mcp.json`:
```json
{
  "servers": {
    "ado": {
      "command": "npx",
      "args": ["-y", "@azure-devops/mcp", "${input:ado_org}"]
    }
  },
  "inputs": [
    {
      "id": "ado_org",
      "type": "promptString",
      "description": "Azure DevOps organization name"
    }
  ]
}
```

### Global-Level Configuration
Add to VS Code's `settings.json`:
```json
{
  "chat.mcp.servers": {
    "ado": {
      "command": "npx",
      "args": ["-y", "@azure-devops/mcp", "${input:ado_org}"]
    }
  },
  "chat.mcp.inputs": [
    {
      "id": "ado_org",
      "type": "promptString",
      "description": "Azure DevOps organization name"
    }
  ]
}
```

### Global Installation Steps
1. Open VS Code.
2. Go to Settings (Ctrl/Cmd + ,).
3. Search for "mcp" and locate "Chat: Mcp".
4. Add the server configuration under "Chat: Mcp: Servers".
5. Add the input configuration under "Chat: Mcp: Inputs".
6. Save and restart VS Code.
7. When prompted, enter your Azure DevOps organization name.
8. Verify by checking the MCP server list in the chat interface.

## Integration with Orchestrator

After setting up these MCP servers, update your `.github/chatmodes/orchestrator.chatmode.md` to include them in the `tools` array for AI team access.

## Best Practices

- **Project-Level**: Automate via scripts or project setup tools.
- **Global-Level**: Always manual to ensure user consent and security.
- **Testing**: After setup, test each server in your IDE's chat interface.
- **Updates**: Regularly check for updates to MCP server packages.

For more details, refer to the [official MCP documentation](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp/extend-copilot-chat-with-mcp).