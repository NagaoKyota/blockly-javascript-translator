import { action, decorate, observable } from 'mobx';
import Blockly from 'node-blockly/browser';

class Store {
  constructor() {
    this.blocklyCode = '';
  }

  updateWorkspace(workspace) {
    this.blocklyCode = Blockly.JavaScript.workspaceToCode(workspace).replace(/^\s+/, '');
  }
}

decorate(Store, {
  blocklyCode: observable,
  updateWorkspace: action,
});

export default new Store();
