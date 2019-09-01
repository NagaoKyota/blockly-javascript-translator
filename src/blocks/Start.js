import Blockly from 'node-blockly/browser';

export const Start = {
  block: {
    init() {
      this.appendDummyInput().appendField('JS');
      this.jsonInit({
        message0: '%1',
        args0: [
          {
            type: "input_statement",
            name: "JS",
            check: ["JS"],
          },
        ],
      });
      this.setColour('#FF9933');
      this.setDeletable(false);
      this.setMovable(false);
    },
  },
  category: 'root',
  generator: (block) => {
    const value = Blockly.JavaScript.statementToCode(block, 'JS');
    return `${value}`;
  },
  name: 'START',
};

export const Design = {
  block: {
    init() {
      this.appendDummyInput().appendField('デザイン');
      this.jsonInit({
        message0: '%1',
        args0: [
          {
            type: "input_statement",
            name: "DESIGN",
            check: ["Design"],
          },
        ],
      });
      this.setColour('#FF9933');
      this.setDeletable(false);
      this.setMovable(false);
    },
  },
  category: 'root',
  generator: (block) => {
    const value = Blockly.JavaScript.statementToCode(block, 'DESIGN');
    return `{${value}}`;
  },
  name: 'DESIGN',
};
