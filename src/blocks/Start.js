export const Start = {
  block: {
    init() {
      this.appendDummyInput().appendField('JS');
      this.setColour('#FF9933');
      this.setNextStatement(true, 'JS');
      this.setDeletable(false);
      this.setMovable(false);
    },
  },
  category: 'root',
  generator: () => '',
  name: 'START',
};

export const Design = {
  block: {
    init() {
      this.appendDummyInput().appendField('デザイン');
      this.setColour('#FF9933');
      this.setNextStatement(true, 'Design');
      this.setDeletable(false);
      this.setMovable(false);
    },
  },
  category: 'root',
  generator: () => '',
  name: 'DESIGN',
};
