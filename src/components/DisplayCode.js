import React, { Component } from 'react';
import Blockly from 'node-blockly/browser';

export default class DisplayCode extends Component {
  constructor() {
    super();
    this.state = {
      jsCode: '',
    };
  }

  onClickEventHandler() {
    const ws = window.Blockly.getMainWorkspace();
    this.setState({
      jsCode: Blockly.JavaScript.workspaceToCode(ws),
    });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.onClickEventHandler()}>conert to code</button>
        <pre>{this.state.jsCode}</pre>
      </div>
    );
  }
}
