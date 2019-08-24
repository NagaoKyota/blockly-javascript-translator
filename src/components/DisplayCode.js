import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class DisplayCode extends Component {
  render() {
    return (
      <div>
        <pre>{this.props.store.blocklyCode}</pre>
      </div>
    );
  }
}

export default inject('store')(observer(DisplayCode));
