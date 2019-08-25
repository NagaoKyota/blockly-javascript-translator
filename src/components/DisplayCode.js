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
  wrap_line_length: "40",
};

class DisplayCode extends Component {
  render() {
    return (
      <div>
        <pre>{jsBeautify.js(this.props.store.blocklyCode, beautifyOptions)}</pre>
      </div>
    );
  }
}

export default inject('store')(observer(DisplayCode));
