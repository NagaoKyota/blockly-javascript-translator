import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BlocklyDrawer from './BlocklyDrawer';
import { Count } from '../blocks/Loop';

export default class BlocklyComponent extends Component {
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
        onChange={() => { console.log('hoge'); }}
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
        tools={[Count]}
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
