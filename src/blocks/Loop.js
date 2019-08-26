import Blockly from 'node-blockly/browser';

export const For = {
  block: {
    init() {
      this.setPreviousStatement(true);
      this.jsonInit({
        message0: '繰り返し%1回',
        args0: [
          {
            type: 'field_number',
            name: 'MAX_VALUE',
            value: 5,
            output: 'Number',
          },
        ],
      });
      this.appendStatementInput('DO');
      this.setNextStatement(true);
      this.setColour(150);
    },
  },
  category: 'ループ',
  generator: (block) => {
    const branch = Blockly.JavaScript.statementToCode(block, 'DO');
    const max = block.getFieldValue('MAX_VALUE');
    const code = `
      for (let count = 1; count <= ${max}; count++) {
        ${branch}
      }
    `;
    return code;
  },
  name: 'For',
};

export const While = {
  block: {
    init() {
      this.setPreviousStatement(true);
      this.jsonInit({
        message0: 'もし%1なら繰り返し',
        args0: [
          {
            type: 'input_value',
            name: 'BOOL',
            check: 'Boolean',
          },
        ],
      });
      this.appendStatementInput('DO');
      this.setNextStatement(true);
      this.setColour(150);
    },
  },
  category: 'ループ',
  generator: (block) => {
    const branch = Blockly.JavaScript.statementToCode(block, 'DO');
    const flag = Blockly.JavaScript.statementToCode(block, 'BOOL') || undefined;
    const code = `
      while (${flag}) {
        ${branch}
      }
    `;
    return code;
  },
  name: 'While',
};
