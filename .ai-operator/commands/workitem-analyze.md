# Work Item Analysis & Documentation

## Purpose

Retrieve complete work item details from ADO using MCP Server, create organized work item documentation folders, and prepare comprehensive analysis for specification creation. This command ensures full work item details (description, acceptance criteria, comments, attachments) are captured and documented systematically.

## Prerequisites

- [ ] VS Code is open with project workspace loaded
- [ ] GitHub Copilot is enabled for context understanding  
- [ ] ADO MCP Server is configured and connected
- [ ] Work item ID is provided by user
- [ ] Write permissions to create documentation folders
- [ ] Project context files accessible (.ai-operator/config.local.yml)

## Context Setup

### Required Files
Open in VS Code for analysis context:
- `.ai-operator/instructions/best-practices.md` - Development standards
- `.ai-operator/instructions/tech-stack.md` - Technical constraints
- ADO work item details or requirements document
- Related architecture/design documents
- Previous analysis reports (if available)

### Workspace Preparation
1. Open VS Code integrated terminal
2. Gather work item ID and access to ADO system
3. Review project documentation for context

## Steps

### Step 1: MCP Server Work Item Retrieval

**🚨 CRITICAL: Use ADO MCP Server for Complete Data Retrieval**

**Objective**: Retrieve ALL work item details using MCP Server tools

**MCP Server Actions** (REQUIRED - Never skip):
1. **Connect to ADO MCP Server** using tools available in this session
2. **Retrieve work item by ID** using specific work item ID provided by user
3. **Get complete work item details** including:
   - Title and description (full HTML content if applicable)
   - Acceptance criteria (complete list with details)
   - Work item type, state, priority, and assigned user
   - Comments and discussion history
   - Related work items and dependencies
   - Attachments and linked artifacts
   - Custom fields and project-specific data

**Failure Handling**:
- If MCP connection fails: Document the error and suggest manual fallback
- If work item not found: Verify work item ID and organization/project settings
- If partial data only: Use all available MCP tools to get complete details

**Expected Outcome**: Complete work item data retrieved via MCP Server

### Step 2: Create Work Item Documentation Folder

**Objective**: Create organized folder structure for work item documentation

**Folder Structure** (REQUIRED):
```
docs/work-items/WI-[WORK-ITEM-ID]/
├── work-item-details.md          # Complete work item data
├── analysis.md                   # Technical analysis
├── requirements.md               # Extracted requirements
├── acceptance-criteria.md        # Formatted acceptance criteria
├── dependencies.md               # Dependencies and blockers
├── attachments/                  # Any downloaded attachments
└── spec-preparation.md           # Ready for spec creation
```

**Actions**:
1. Create base folder: `docs/work-items/WI-[WORK-ITEM-ID]/`
2. Generate `work-item-details.md` with complete MCP-retrieved data
3. Create supporting documentation files
4. Download and organize any attachments (if accessible)

**Expected Outcome**: Organized work item documentation ready for analysis

### Step 3: Requirements Analysis and Documentation

**Objective**: Analyze retrieved work item data and create structured documentation

**Analysis Framework**:
1. **Extract Requirements** from work item description and acceptance criteria
2. **Identify Dependencies** from related work items and comments
3. **Assess Clarity** - are requirements specific and actionable?
4. **Technical Constraints** - identify technical limitations and dependencies
5. **Success Criteria** - extract measurable outcomes from acceptance criteria

**Documentation Creation** (REQUIRED):
1. **requirements.md**: Clean, structured requirements extracted from work item
2. **acceptance-criteria.md**: Formatted acceptance criteria with clear test scenarios
3. **dependencies.md**: Related work items, blockers, and dependencies
4. **analysis.md**: Technical analysis including:
   - Complexity assessment
   - Technical feasibility
   - Implementation approach recommendations
   - Potential risks and mitigation strategies

**AI Team Integration**:
- Assess if requirements provide sufficient context for DEV agent
- Verify acceptance criteria are specific enough for Testing agent  
- Check if complexity is appropriate for AI implementation
- Prepare handoff documentation for Scrum Master spec creation

**Deliverable**: Complete work item analysis with structured documentation

### Step 4: Spec Preparation and Handoff

**Objective**: Prepare work item documentation for specification creation

**Spec Preparation Actions**:
1. **Create spec-preparation.md** with:
   - Summary of work item analysis
   - Key requirements and acceptance criteria
   - Technical approach recommendations
   - Dependencies and blockers identified
   - Recommended next steps

2. **Validation Checklist**:
   - [ ] All work item details captured via MCP Server
   - [ ] Requirements are clear and specific
   - [ ] Acceptance criteria are testable
   - [ ] Technical approach is feasible
   - [ ] Dependencies are identified and documented
   - [ ] Documentation is ready for spec creation

3. **Handoff Preparation**:
   - Document folder location: `docs/work-items/WI-[WORK-ITEM-ID]/`
   - Key files ready: `work-item-details.md`, `requirements.md`, `acceptance-criteria.md`
   - Analysis complete in: `analysis.md`
   - Ready for: Scrum Master spec creation using `create-spec.md`

**Expected Outcome**: Complete work item documentation ready for specification creation

### Step 5: Next Steps Recommendation

**Objective**: Provide clear next steps based on analysis results

**If Ready for Spec Creation**:
- Recommend: "Ready for Scrum Master spec creation using create-spec.md"
- Provide: Work item folder path and key documentation files
- Next Agent: Scrum Master for detailed specification creation

**If Issues Found**:
- Document: Specific gaps or unclear requirements
- Recommend: Stakeholder clarification or additional ADO work item updates
- Next Action: User to address issues before proceeding

**If Blocked**:
- Document: Specific blockers and dependencies
- Recommend: Dependency resolution approach
- Next Action: Address blockers before spec creation

## Guidelines

### AI Team Analysis Standards
- **Product Owner ("Vision")**: Provide thorough, objective assessment
- **User**: Make final decisions on readiness and priority
- **Planning Agent**: Receives clear analysis for task breakdown
- **DEV Agent**: Gets sufficient context for implementation

### Quality Standards for AI Team
- Requirements must be clear enough for AI implementation
- Acceptance criteria must be specific enough for AI testing
- Technical complexity must be appropriate for AI capabilities
- Dependencies must be clearly identified for workflow planning

### GitHub Copilot Integration
- Analysis leverages existing codebase patterns
- Technical assessment considers AI-assistable implementation
- Complexity evaluation accounts for Copilot capabilities
- Context preparation supports subsequent AI development

## Outputs

### Primary Deliverables
- **Work Item Documentation Folder**: `docs/work-items/WI-[WORK-ITEM-ID]/`
- **Complete Work Item Data**: `work-item-details.md` with full MCP-retrieved information
- **Structured Requirements**: `requirements.md` with clean, actionable requirements
- **Formatted Acceptance Criteria**: `acceptance-criteria.md` with clear test scenarios
- **Technical Analysis**: `analysis.md` with feasibility assessment and recommendations
- **Spec Preparation**: `spec-preparation.md` ready for handoff to Scrum Master

### Quality Standards
- All work item data retrieved via ADO MCP Server (no manual fallbacks unless MCP fails)
- Documentation is structured, clear, and ready for AI agent consumption
- Technical analysis provides specific implementation guidance
- Handoff documentation enables smooth workflow transition

## Quality Gates
- [ ] **MCP Server Retrieval**: Complete work item details retrieved using ADO MCP tools
- [ ] **Folder Structure**: Organized documentation folder created with all required files
- [ ] **Requirements Analysis**: Clear, actionable requirements extracted and documented
- [ ] **Technical Assessment**: Implementation feasibility assessed with specific recommendations
- [ ] **Spec Readiness**: Documentation prepared for Scrum Master spec creation
- [ ] **Handoff Documentation**: Clear next steps and workflow transition prepared

## Handoff

### Success Path
**If Ready**: To Scrum Master Agent - Run `create-spec.md` using work item documentation
- **Input Location**: `docs/work-items/WI-[WORK-ITEM-ID]/`
- **Key Files**: `work-item-details.md`, `requirements.md`, `acceptance-criteria.md`, `analysis.md`
- **Next Command**: `create-spec.md` with work item folder as input

### Issue Resolution Paths
**If MCP Server Issues**: Document specific MCP connection or data retrieval problems
**If Requirements Issues**: Document gaps and recommend stakeholder clarification
**If Technical Blocks**: Document specific technical dependencies or constraints
**Context Preservation**: All documentation files remain available for future reference
