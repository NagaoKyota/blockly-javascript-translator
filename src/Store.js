import _ from 'lodash';
import Blockly from 'node-blockly/browser';
import { action, decorate, observable } from 'mobx';
import { Shape, Graphics } from "@createjs/easeljs";

class Store {
  constructor() {
    this.isExecute = false;
    this.blocklyCode = '';
    this.blocklyDesign = '';
    this.stage = null;
    this.posX = 200;
    this.posY = 200;
    this.angle = 270;
  }

  reset() {
    this.stage.removeAllChildren();
    this.stage.clear();

    this.isExecute = false;
    this.stage = null;
    this.posX = 200;
    this.posY = 200;
    this.angle = 270;
  }

  moveForward(value) {
    const endX = this.posX + value * Math.cos(this.angle * (Math.PI / 180));
    const endY = this.posY + value * Math.sin(this.angle * (Math.PI / 180));

    const g = new Graphics();
    g.beginStroke("#000");
    g.setStrokeStyle(3);
    g.moveTo(this.posX, this.posY);
    g.lineTo(endX, endY);
    g.endStroke();
    this.stage.addChild(new Shape(g));
    this.stage.update();

    this.posX = endX;
    this.posY = endY;
  }

  turnRight(value) {
    this.angle = (this.angle + value) % 360;
  }

  turnLeft(value) {
    this.angle = (this.angle - value) % 360;
  }

  updateWorkspace(workspace) {
    const allBlocks = workspace.getAllBlocks();
    let filtered;
    filtered = _.filter(allBlocks, (block) => block.type === "START");
    this.blocklyCode = Blockly.JavaScript.blockToCode(filtered[0]).replace(/^\s+/, '');

    filtered = _.filter(allBlocks, (block) => block.type === "DESIGN");
    this.blocklyDesign = Blockly.JavaScript.blockToCode(filtered[0]).replace(/^\s+/, '');
  }
}

decorate(Store, {
  isExecute: observable,
  blocklyCode: observable,
  blocklyDesign: observable,
  stage: observable,
  posX: observable,
  posY: observable,
  angle: observable,
  reset: action,
  updateWorkspace: action,
});

export default new Store();
