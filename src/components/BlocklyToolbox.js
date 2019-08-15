import _ from 'lodash';
import React, { Component } from 'react';
import { Block, Xml, Category } from '../ToolBoxTagsComponents';

let styles = null;

export default class BlocklyToolbox extends Component {
  componentDidUpdate() {
    this.props.onUpdate();
  }

  render() {
    const { props } = this;
    const appearance = props.appearance || {};
    const groupedByCategory = _.reduce(props.tools,
      (accumulated, item) => {
        const result = accumulated;
        result[item.category] = result[item.category] || [];
        result[item.category].push(item.name);
        return result;
      },
      {}
    );

    const elements = Object.keys(groupedByCategory).map((key) => {
      const blocks = groupedByCategory[key].map((type) => {
        return <Block type={type} key={type} />;
      });
      const categoryAppearance = appearance && appearance.categories && appearance.categories[key] || {};
      return (
        <Category
          {...categoryAppearance}
          key={key}
          name={key}
        >
          {blocks}
        </Category>
      );
    });

    return (
      <Xml
        style={styles.toolbox}
        onRef={props.onRef}
      >
        {elements}
        {props.children}
      </Xml>
    );
  }
}

BlocklyToolbox.defaultProps = {
  onRef: () => { },
  appearance: {},
  onUpdate: () => {},
};

styles = {
  toolbox: {
    display: 'none',
  },
};
