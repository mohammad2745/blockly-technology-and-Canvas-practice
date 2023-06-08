// Create a workspace
var workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox')
});

// Function to run the generated JavaScript code
function runCode() {
    // Generate JavaScript code from the workspace
    var code = Blockly.JavaScript.workspaceToCode(workspace);

    // Display the generated code
    document.getElementById('codeDisplay').textContent = code;

    // Execute the generated code
    eval(code);
}