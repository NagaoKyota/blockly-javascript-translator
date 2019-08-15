import React, { Component } from 'react';
import BlocklyDrawer from './BlocklyDrawer';
import { Count } from '../blocks/Loop';

export default class BlocklyComponent extends Component {
  constructor() {
    super();
    this.updateHeight = this.updateHeight.bind(this);
    this.buffer = 20
    this.state = {
      height: window.innerHeight - this.buffer
    };
  }

  updateHeight() {
    this.setState({
      height: window.innerHeight - this.buffer
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateHeight);
    this.updateHeight();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateHeight);
  }

  render() {
    return (
      <BlocklyDrawer
        showCategories={false}
        injectOptions = {{
          horizontalLayout: false,
          grid: {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true
          },
          trashcan: true,
          scrollbars: false,
          zoom: {
            startScale: 0.7,
          }
        }}
        tools={[Count]}
        style={{ height: `${this.state.height}px` }}
      >
      </BlocklyDrawer>
    );
  };
};
