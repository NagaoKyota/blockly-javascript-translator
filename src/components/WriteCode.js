import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class WriteCode extends Component {
  handleOnChange(e) {
    this.props.store.setInputCode(e.target.value);
  }

  render() {
    return (
      <div>
        <textarea
          onChange={this.handleOnChange.bind(this)}
          style={{
            width: '100%',
            height: '200px',
          }}
          value={this.props.store.blocklyCode}
        />
      </div>
    );
  }
}

export default inject('store')(observer(WriteCode));
