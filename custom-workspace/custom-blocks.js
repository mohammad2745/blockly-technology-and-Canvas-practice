Blockly.Blocks['switch_layer'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Switch to layer")
            .appendField(new Blockly.FieldDropdown([
                ["Layer 1", "layer1"],
                ["Layer 2", "layer2"],
                ["Layer 3", "layer3"]
            ]), "layer");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
    }
};

Blockly.JavaScript['switch_layer'] = function(block) {
    var layer = block.getFieldValue('layer');
    var code = 'switchLayer("' + layer + '");\n';
    return code;
};