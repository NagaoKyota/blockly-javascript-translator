/* eslint-disable */
import Blockly from 'node-blockly/browser';
import jsInterpreter from 'js-interpreter';

import * as BlockFunctions from './block-functions';
import * as Turtle from '../blocks/Turtle';

[
  ...Object.values(Turtle),
].forEach((obj) => {
  Blockly.Blocks[obj.name] = obj.block;
  Blockly.JavaScript[obj.name] = obj.generator;
});

class Store {
  constructor() {
    this.posX = 200;
    this.posY = 200;
    this.angle = 270;
  }

  moveForward(value) {
    this.posX = this.posX + value * Math.cos(this.angle * (Math.PI / 180));
    this.posY = this.posY + value * Math.sin(this.angle * (Math.PI / 180));
  }

  turnRight(value) {
    this.angle = (this.angle + value) % 360;
  }

  turnLeft(value) {
    this.angle = (this.angle - value) % 360;
  }
}

function run(code, store) {
  new jsInterpreter(code, (interpreter, scope) => {
    Object.values(BlockFunctions).forEach((blockFunction) => {
      const func = blockFunction(store);
      interpreter.setProperty(scope, func.name, interpreter.createNativeFunction((input) => {
        return interpreter.createPrimitive(func.def(input));
      }));
    });
  }).run();
}

describe('Blocks test example', () => {
  test('Loop -> MoveForward -> TurnRight', () => {
    const workspace = new Blockly.Workspace();

    const blockLoop = workspace.newBlock("controls_repeat");
    blockLoop.setFieldValue(4, "TIMES");
    const blockMoveForward = workspace.newBlock("moveForward");
    blockMoveForward.setFieldValue(100, "VALUE");
    const blockTurnRight = workspace.newBlock("turnRight");
    blockTurnRight.setFieldValue(90, "VALUE");

    blockLoop.getInput("DO").connection.connect(blockMoveForward.previousConnection);
    blockMoveForward.nextConnection.connect(blockTurnRight.previousConnection);

    const code = Blockly.JavaScript.workspaceToCode(workspace);
    console.log(code);
    let moveCount = 0;
    const store = new class extends Store {
      moveForward(value) {
        moveCount += 1;
        this.posX = this.posX + value * Math.cos(this.angle * (Math.PI / 180));
        this.posY = this.posY + value * Math.sin(this.angle * (Math.PI / 180));
        expect([
          {posX: 200, posY: 200},
          {posX: 200, posY: 100},
          {posX: 300, posY: 100},
          {posX: 300, posY: 200}
        ]).toContainEqual({posX: Math.round(this.posX), posY: Math.round(this.posY)});
      }
    }();
    run(code, store);
    expect(moveCount).toBe(4);
  });
});
