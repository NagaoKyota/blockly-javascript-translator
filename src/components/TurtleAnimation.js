import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Sandbox from '../Sandbox';
import * as BlockFunctions from '../block-functions';

class TurtleAnimation extends Component {
  handleOnExecute() {
    Sandbox.init(BlockFunctions);
    Sandbox.eval(this.props.store.blocklyCode);
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleOnExecute.bind(this)}>実行する</button>
        <div>
          <canvas width="100%" height="300px" />
        </div>
      </div>
    );
  }
}

export default inject('store')(observer(TurtleAnimation));
