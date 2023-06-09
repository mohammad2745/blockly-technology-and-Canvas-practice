var workspace;

// Function to initialize the Blockly workspace
function initializeWorkspace() {
    workspace = Blockly.inject('blocklyDiv', {
        toolbox: document.getElementById('toolbox')
    });
}

// Function to generate and display JavaScript code
function generateCode() {
    // Generate JavaScript code from the workspace
    var code = Blockly.JavaScript.workspaceToCode(workspace);

    // Display the generated code
    document.getElementById('codeDisplay').textContent = code;
}

// Function to run the generated JavaScript code
function runCode() {
    // Generate JavaScript code from the workspace
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    console.log("Code: ", code);

    // Execute the generated code
    eval(code);
}

// Initialize the Blockly workspace
initializeWorkspace();