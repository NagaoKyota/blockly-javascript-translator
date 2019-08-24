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
    const allBlocks = ws.getAllBlocks();
    this.setState({
      jsCode: Blockly.JavaScript.blockToCode(allBlocks[0]),
    });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.onClickEventHandler()}>conert to code</button>
        <p>{this.state.jsCode}</p>
      </div>
    );
  }
}
