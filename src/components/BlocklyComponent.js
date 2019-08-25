import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { inject, observer } from 'mobx-react';
import BlocklyDrawer from './BlocklyDrawer';
import { For, While } from '../blocks/Loop';
import { If, Bool, Num, Compare, AndOr, Not } from '../blocks/Logic';

class BlocklyComponent extends Component {
  constructor() {
    super();
    this.updateHeight = this.updateHeight.bind(this);
    this.buffer = 20;
    this.state = {
      height: window.innerHeight - this.buffer,
    };
  }

  updateHeight() {
    this.setState({
      height: window.innerHeight - this.buffer,
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateHeight);
    this.updateHeight();

    ReactDOM.render(
      <BlocklyDrawer
        onChange={() => {
          const ws = window.Blockly.getMainWorkspace();
          this.props.store.updateWorkspace(ws);
        }}
        showCategories={false}
        injectOptions={{
          grid: {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true,
          },
          scrollbars: false,
          zoom: {
            startScale: 0.7,
          },
        }}
        tools={[For, While, If, Bool, Num, Compare, AndOr, Not]}
        style={{ height: `100%` }}
      />,
      document.getElementById('BlocklyRoot'),
    );
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateHeight);
  }

  render() {
    return (
      <div id="BlocklyRoot" style={{ height: `${this.state.height}px` }} />
    );
  }
}

export default inject('store')(observer(BlocklyComponent));
