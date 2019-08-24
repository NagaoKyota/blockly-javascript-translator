import _ from 'lodash';
import Blockly from 'node-blockly/browser';

const getDropdownOptions = (cond = {
  min: 10,
  max: 30,
  ascending: true,
  step: 10,
}) => {
  const range = cond.ascending ? _.range : _.rangeRight;
  const options = range(cond.min, cond.max + 1, cond.step);
  return _.map(options, (option) => [_.toString(option), _.toString(option)]);
};

// eslint-disable-next-line import/prefer-default-export
export const generateCount = (defs = {}) => ({
  block: {
    init() {
      this.setPreviousStatement(true);
      this.jsonInit({
        message0: '1から%1まで',
        args0: [
          {
            type: 'field_dropdown',
            name: 'COUNT',
            options: [
              ...getDropdownOptions(defs.range),
            ],
          },
        ],
        message1: '順に数を調べる',
      });
      this.appendStatementInput('DO')
        .appendField('やること');
      this.setNextStatement(true);
      const { color } = defs;
      this.setColour(color);
      this.setDeletable(defs.deletable);
      this.setMovable(defs.deletable);
    },
  },
  category: 'loops',
  generator: (block) => {
    const branch = Blockly.JavaScript.statementToCode(block, 'DO');
    const max = block.getFieldValue('COUNT');
    const counter = _.uniqueId('counter_');
    const code = `
      resetCounter();
      for(var ${counter} = 1; ${counter} <= ${max}; ${counter}++) {
        countUp({id: "${block.id}"});
        ${branch}
      }
    `;
    return code;
  },
  name: defs.name,
});
