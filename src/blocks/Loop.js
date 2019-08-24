import * as generators from '../block-generators/Loop';

// eslint-disable-next-line import/prefer-default-export
export const Count = generators.generateCount({
  name: 'Count',
  deletable: true,
  color: 120,
  range: {
    min: 10,
    max: 30,
    ascending: true,
    step: 10,
  },
});
