import _ from 'lodash';
import { action, decorate, observable } from 'mobx';
import Blockly from 'node-blockly/browser';

class Store {
  constructor() {
    this.blocklyCode = '';
    this.blocklyDesign = '';
  }

  moveForward(value) {
    console.log('move: ', value);
  }

  turnRight(value) {
    console.log('right: ', value);
  }

  turnLeft(value) {
    console.log('left: ', value);
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
  blocklyCode: observable,
  blocklyDesign: observable,
  updateWorkspace: action,
});

export default new Store();
