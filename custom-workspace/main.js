var workspace = Blockly.inject('blocklyDiv', {
    toolbox: '<xml><block type="switch_layer"></block></xml>'
});

function runCode() {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    try {
        eval(code);
    } catch (error) {
        console.error('Error executing code:', error);
    }
}

function switchLayer(layerId) {
    var layers = document.getElementsByClassName('layer');
    for (var i = 0; i < layers.length; i++) {
        layers[i].style.display = 'none';
    }
    document.getElementById(layerId).style.display = 'block';
}

document.getElementById('stage').addEventListener('click', function() {
    // Perform actions when the stage is clicked
});