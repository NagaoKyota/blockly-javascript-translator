import _ from 'lodash';
import { action, decorate, observable } from 'mobx';
import Blockly from 'node-blockly/browser';

class Store {
  constructor() {
    this.blocklyCode = '';
    this.blocklyDesign = '';
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
