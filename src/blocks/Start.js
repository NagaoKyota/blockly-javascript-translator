// eslint-disable-next-line import/prefer-default-export
export const Start = {
  block: {
    init() {
      this.appendDummyInput().appendField('スタート');
      this.setNextStatement(true);
      this.setColour('#FF9933');
      this.setDeletable(false);
      this.setMovable(false);
    },
  },
  category: 'root',
  generator: () => '',
  name: 'START',
};
