var workspace;

function initializeWorkspace() {

    var options = {
        toolbox: createToolbox(),
        zoom: {
            controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2
        }
    };
    workspace = Blockly.inject('blocklyDiv', options);
}

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

initializeWorkspace();