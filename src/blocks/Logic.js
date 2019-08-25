import Blockly from 'node-blockly/browser';

export const If = {
  block: {
    init() {
      this.setPreviousStatement(true);
      this.jsonInit({
        message0: 'もし%1なら',
        args0: [
          {
            type: 'input_value',
            name: 'BOOL_TO_CHECK',
            check: 'Boolean',
          },
        ],
      });
      this.appendStatementInput('DO');
      this.setNextStatement(true);
      this.setColour(120);
    },
  },
  category: '論理',
  generator: (block) => {
    const branch = Blockly.JavaScript.statementToCode(block, 'DO');
    const flag = Blockly.JavaScript.statementToCode(block, 'BOOL_TO_CHECK');
    const code = `
      if (${flag}) {
        ${branch}
      }
    `;
    return code;
  },
  name: 'If',
};

export const Bool = {
  block: {
    init() {
      this.jsonInit({
        message0: `%1`,
        args0: [
          {
            type: 'field_dropdown',
            name: 'BOOL',
            options: [
              ['真', 'true'],
              ['偽', 'false'],
            ],
          },
        ],
      });
      this.setColour(120);
      this.setOutput(true, 'Boolean');
    },
  },
  category: '論理',
  generator: (block) => {
    const bool = block.getFieldValue('BOOL');
    return `${bool}`;
  },
  name: 'Bool',
};

export const Compare = {
  block: {
    init() {
      this.jsonInit({
        message0: `%1%2%3`,
        args0: [
          {
            type: 'field_number',
            name: 'A',
          },
          {
            type: 'field_dropdown',
            name: 'OPERATOR',
            options: [
              ['=', '==='],
              ['>', '>'],
              ['<', '<'],
            ],
          },
          {
            type: 'field_number',
            name: 'B',
          },
        ],
      });
      this.setColour(120);
      this.setOutput(true, 'Boolean');
    },
  },
  category: '論理',
  generator: (block) => {
    const A = block.getFieldValue('A');
    const operator = block.getFieldValue('OPERATOR');
    const B = block.getFieldValue('B');
    return `${A} ${operator} ${B}`;
  },
  name: 'Compare',
};

export const AndOr = {
  block: {
    init() {
      this.jsonInit({
        message0: `%1%2%3`,
        args0: [
          {
            type: 'input_value',
            name: 'A',
          },
          {
            type: 'field_dropdown',
            name: 'OPERATOR',
            options: [
              ['かつ', '&&'],
              ['または', '||'],
            ],
          },
          {
            type: 'input_value',
            name: 'B',
          },
        ],
      });
      this.setColour(120);
      this.setInputsInline(true);
      this.setOutput(true, 'Boolean');
    },
  },
  category: '論理',
  generator: (block) => {
    const A = Blockly.JavaScript.statementToCode(block, 'A');
    const operator = block.getFieldValue('OPERATOR');
    const B = Blockly.JavaScript.statementToCode(block, 'B');
    return `${A} ${operator} ${B}`;
  },
  name: 'AndOr',
};

export const Not = {
  block: {
    init() {
      this.jsonInit({
        message0: `%1ではない`,
        args0: [
          {
            type: 'input_value',
            name: 'A',
            check: 'Boolean',
          },
        ],
      });
      this.setColour(120);
      this.setOutput(true, 'Boolean');
    },
  },
  category: '論理',
  generator: (block) => {
    const A = Blockly.JavaScript.statementToCode(block, 'A');
    return `!${A}`;
  },
  name: 'Not',
};
