import React, { Component } from 'react';

export const Block = (props) => React.createElement('block', props);
export const Category = (props) => React.createElement('category', props);

class XmlComponent extends Component {
  render() {
    const injectedProps = {
      ...this.props,
      ref: (x) => this.props.onRef(x),
    };
    delete injectedProps.onRef;
    return React.createElement('xml', injectedProps);
  }
}

export const Xml = XmlComponent;

export default { Block, Xml, Category };
