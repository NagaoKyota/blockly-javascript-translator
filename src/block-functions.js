import Store from './Store';

export const moveForward = () => ({
  name: 'moveForward',
  def: (value) => {
    Store.moveForward(value);
  },
});

export const turnRight = () => ({
  name: 'turnRight',
  def: (value) => {
    Store.turnRight(value);
  },
});

export const turnLeft = () => ({
  name: 'turnLeft',
  def: (value) => {
    Store.turnLeft(value);
  },
});
