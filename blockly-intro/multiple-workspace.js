var workspaces = {};

// Function to initialize the Blockly workspaces
function initializeWorkspaces() {
    workspaces[1] = Blockly.inject('blocklyDiv1', {
        toolbox: createToolbox()
    });

    workspaces[2] = Blockly.inject('blocklyDiv2', {
        toolbox: createToolbox()
    });
}

// Function to create and return the toolbox definition
function createToolbox() {
    var toolbox = document.createElement('xml');

    // Create logic category and blocks
    var logicCategory = document.createElement('category');
    logicCategory.setAttribute('name', 'Logic');
    logicCategory.setAttribute('colour', '#5C81A6');

    var ifBlock = document.createElement('block');
    ifBlock.setAttribute('type', 'controls_if');

    var compareBlock = document.createElement('block');
    compareBlock.setAttribute('type', 'logic_compare');

    logicCategory.appendChild(ifBlock);
    logicCategory.appendChild(compareBlock);

    toolbox.appendChild(logicCategory);

    // Return the created toolbox
    return toolbox;
}

// Function to generate and display JavaScript code for the specified workspace
function generateCode(workspaceId) {
    var workspace = workspaces[workspaceId];

    // Generate JavaScript code from the workspace
    var code = Blockly.JavaScript.workspaceToCode(workspace);

    // Display the generated code in the corresponding code display area
    var codeDisplayId = 'codeDisplay' + workspaceId;
    document.getElementById(codeDisplayId).textContent = code;
}

// Function to run the generated JavaScript code for the specified workspace
function runCode(workspaceId) {
    var workspace = workspaces[workspaceId];

    // Generate JavaScript code from the workspace
    var code = Blockly.JavaScript.workspaceToCode(workspace);

    // Execute the generated code
    eval(code);
}

// Initialize the Blockly workspaces
initializeWorkspaces();