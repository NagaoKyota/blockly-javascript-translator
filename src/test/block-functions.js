export const moveForward = (store) => ({
  name: 'moveForward',
  def: (value) => {
    store.moveForward(value);
  },
});

export const turnRight = (store) => ({
  name: 'turnRight',
  def: (value) => {
    store.turnRight(value);
  },
});

export const turnLeft = (store) => ({
  name: 'turnLeft',
  def: (value) => {
    store.turnLeft(value);
  },
});
