import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Stage } from "@createjs/easeljs";

import Sandbox from '../Sandbox';
import * as BlockFunctions from '../block-functions';

class TurtleAnimation extends Component {
  handleOnExecute() {
    this.props.store.isExecute = true;

    this.props.store.stage = new Stage("display");
    Sandbox.init(BlockFunctions);
    Sandbox.eval(this.props.store.blocklyCode);
  }

  handleOnReset() {
    this.props.store.reset();
  }

  componentDidMount() {
    const canvas = document.getElementById("display");
    canvas.style.backgroundColor = "#eee";
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleOnExecute.bind(this)} style={{ display: this.props.store.isExecute ? "none" : "inline-block" }}>実行する</button>
        <button type="button" onClick={this.handleOnReset.bind(this)} style={{ display: this.props.store.isExecute ? "inline-block" : "none" }}>リセット</button>
        <div>
          <canvas id="display" width="600px" height="300px" backgroundColor="red" />
        </div>
      </div>
    );
  }
}

export default inject('store')(observer(TurtleAnimation));
