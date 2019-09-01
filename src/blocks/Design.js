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
    const variable = block.getFieldValue('COLOR');
    return `color: '${variable}', `;
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
            max: 60,
          },
        ],
      });
      this.setNextStatement(true, 'Design');
      this.setColour(300);
    },
  },
  category: 'デザイン',
  generator: (block) => {
    const variable = block.getFieldValue('SIZE');
    return `fontSize: '${variable}px',`;
  },
  name: 'changeFontSize',
};
