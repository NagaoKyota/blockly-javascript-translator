import { action, decorate, observable } from 'mobx';
import Blockly from 'node-blockly/browser';

class Store {
  constructor() {
    this.blocklyCode = '';
    this.jsCode = '';
  }

  setInputCode(inputCode) {
    this.blocklyCode = inputCode;
  }

  updateWorkspace(workspace) {
    this.blocklyCode = Blockly.JavaScript.workspaceToCode(workspace).replace(/^\s+/, '');
  }
}

decorate(Store, {
  blocklyCode: observable,
  jsCode: observable,
  setInputCode: action,
  updateWorkspace: action,
});

export default new Store();
