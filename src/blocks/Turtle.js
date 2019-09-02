export const moveForward = {
  block: {
    init() {
      this.setPreviousStatement(true, 'JS');
      this.jsonInit({
        type: 'JS',
        message0: '前に%1進む',
        args0: [
          {
            type: 'field_number',
            name: 'VALUE',
            value: 100,
          },
        ],
      });
      this.setNextStatement(true, 'JS');
      this.setColour(40);
    },
  },
  category: 'タートル',
  generator: (block) => {
    const variable = block.getFieldValue('VALUE');
    return `moveForward(${variable});`;
  },
  name: 'moveForward',
};

export const turnRight = {
  block: {
    init() {
      this.setPreviousStatement(true, 'JS');
      this.jsonInit({
        type: 'JS',
        message0: '右に%1まがる',
        args0: [
          {
            type: 'field_number',
            name: 'VALUE',
            value: 90,
          },
        ],
      });
      this.setNextStatement(true, 'JS');
      this.setColour(40);
    },
  },
  category: 'タートル',
  generator: (block) => {
    const variable = block.getFieldValue('VALUE');
    return `turnRight(${variable});`;
  },
  name: 'turnRight',
};

export const turnLeft = {
  block: {
    init() {
      this.setPreviousStatement(true, 'JS');
      this.jsonInit({
        type: 'JS',
        message0: '左に%1まがる',
        args0: [
          {
            type: 'field_number',
            name: 'VALUE',
            value: 90,
          },
        ],
      });
      this.setNextStatement(true, 'JS');
      this.setColour(40);
    },
  },
  category: 'タートル',
  generator: (block) => {
    const variable = block.getFieldValue('VALUE');
    return `turnLeft(${variable});`;
  },
  name: 'turnLeft',
};
