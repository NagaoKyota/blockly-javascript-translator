import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class DisplayCode extends Component {
  render() {
    // eslint-disable-next-line no-new-func
    const style = (new Function(`return {${this.props.store.blocklyDesign}}`))();
    return (
      <div>
        Design
        <p style={style}>
          sample text
        </p>
      </div>
    );
  }
}

export default inject('store')(observer(DisplayCode));
