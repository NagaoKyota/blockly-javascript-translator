import Blockly from 'node-blockly/browser';

export const voidFunc = {
  block: {
    init() {
      this.jsonInit({
        message0: '関数%1',
        args0: [
          {
            type: 'field_input',
            name: 'FUNCTION_NAME',
            text: 'hoge',
          },
        ],
      });
      this.appendStatementInput('DO');
      this.setColour(250);
    },
  },
  category: '関数',
  generator: (block) => {
    const funcName = block.getFieldValue('FUNCTION_NAME');
    const branch = Blockly.JavaScript.statementToCode(block, 'DO');
    const code = `function ${funcName} {
      ${branch}
    }`;
    return code;
  },
  name: 'voidFunc',
};

export const returnFunc = {
  block: {
    init() {
      this.jsonInit({
        message0: '関数%1',
        args0: [
          {
            type: 'field_input',
            name: 'FUNCTION_NAME',
            text: 'hoge',
          },
        ],
        message1: '%1',
        args1: [
          {
            type: 'input_statement',
            name: 'DO',
          },
        ],
        message2: '返り値%1',
        args2: [
          {
            type: 'input_value',
            name: 'RETURN',
          },
        ],
      });
      this.setColour(250);
    },
  },
  category: '関数',
  generator: (block) => {
    const funcName = block.getFieldValue('FUNCTION_NAME');
    const branch = Blockly.JavaScript.statementToCode(block, 'DO');
    const ret = Blockly.JavaScript.statementToCode(block, 'RETURN') || undefined;
    const code = `function ${funcName} {
      ${branch}
      return ${ret}
    }`;
    return code;
  },
  name: 'returnFunc',
};

export const ifReturn = {
  block: {
    init() {
      this.setPreviousStatement(true);
      this.jsonInit({
        message0: 'もし%1なら 返り値%2',
        args0: [
          {
            type: 'input_value',
            name: 'COND',
          },
          {
            type: 'input_value',
            name: 'RETURN',
          },
        ],
      });
      this.setInputsInline(true);
      this.setColour(250);
    },
  },
  category: '関数',
  generator: (block) => {
    const cond = Blockly.JavaScript.statementToCode(block, 'COND');
    const ret = Blockly.JavaScript.statementToCode(block, 'RETURN') || undefined;
    const code = `if (${cond}) {
      return ${ret}
    }`;
    return code;
  },
  name: 'ifReturn',
};
