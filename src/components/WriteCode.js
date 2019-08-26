import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import * as jsBeautify from 'js-beautify';

const beautifyOptions = {
  indent_size: "2",
  indent_char: " ",
  max_preserve_newlines: "-1",
  indent_scripts: "keep",
  brace_style: "end-expand",
  space_before_conditional: true,
  wrap_line_length: "0",
};

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
