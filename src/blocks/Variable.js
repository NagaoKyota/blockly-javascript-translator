import Blockly from 'node-blockly/browser';

// eslint-disable-next-line import/prefer-default-export
export const getVariable = {
  block: {
    init() {
      this.jsonInit({
        message0: '%1',
        args0: [
          {
            type: 'field_variable',
            name: 'VAR',
            variable: 'item',
          },
        ],
        style: "variable_blocks",
      });
      this.setColour(210);
      this.setOutput(true);
    },
  },
  category: '変数',
  generator: (block) => {
    // eslint-disable-next-line no-underscore-dangle
    const variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return `${variable}`;
  },
  name: 'getVariable',
};

export const setVariable = {
  block: {
    init() {
      this.setPreviousStatement(true);
      this.jsonInit({
        message0: '%1に%2を代入',
        args0: [
          {
            type: 'field_variable',
            name: 'VAR',
            variable: 'item',
          },
          {
            type: 'input_value',
            name: 'VALUE',
          },
        ],
        style: "variable_blocks",
      });
      this.setNextStatement(true);
      this.setColour(210);
      this.setInputsInline(true);
    },
  },
  category: '変数',
  generator: (block) => {
    // eslint-disable-next-line no-underscore-dangle
    const variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    const value = Blockly.JavaScript.statementToCode(block, 'VALUE');
    return `${variable} = ${value};`;
  },
  name: 'setVariable',
};
