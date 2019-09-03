export const changeColor = {
  block: {
    init() {
      this.setPreviousStatement(true, 'Design');
      this.jsonInit({
        type: 'Design',
        message0: 'テキストカラーを%1にする',
        args0: [
          {
            type: 'field_colour',
            name: 'COLOR',
          },
        ],
      });
      this.setNextStatement(true, 'Design');
      this.setColour(300);
      this.setInputsInline(true);
    },
  },
  category: 'デザイン',
  generator: (block) => {
    const color = block.getFieldValue('COLOR');
    return `color: '${color}', `;
  },
  name: 'changeColor',
};

export const changeFontSize = {
  block: {
    init() {
      this.setPreviousStatement(true, 'Design');
      this.jsonInit({
        message0: 'フォントサイズーを%1にする',
        args0: [
          {
            type: 'field_number',
            name: 'SIZE',
            value: 20,
            max: 200,
          },
        ],
      });
      this.setNextStatement(true, 'Design');
      this.setColour(300);
    },
  },
  category: 'デザイン',
  generator: (block) => {
    const size = block.getFieldValue('SIZE');
    return `fontSize: '${size}px',`;
  },
  name: 'changeFontSize',
};
