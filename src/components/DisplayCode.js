import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import * as jsBeautify from 'js-beautify';
import Highlight from 'react-highlight.js';
import styles from '../styles/index.module.scss';

const beautifyOptions = {
  indent_size: "2",
  indent_char: " ",
  max_preserve_newlines: "-1",
  indent_scripts: "keep",
  brace_style: "end-expand",
  space_before_conditional: true,
  wrap_line_length: "0",
};

class DisplayCode extends Component {
  render() {
    return (
      <div>
        <div>
          JavaScript
          <Highlight language="js" className={styles}>
            {jsBeautify.js(this.props.store.blocklyCode, beautifyOptions)}
          </Highlight>
        </div>
        <div>
          Python(※ Now JavaScript)
          <Highlight language="js" className={styles}>
            {jsBeautify.js(this.props.store.blocklyCode, beautifyOptions)}
          </Highlight>
        </div>
        <div>
          PHP(※ Now JavaScript)
          <Highlight language="js" className={styles}>
            {jsBeautify.js(this.props.store.blocklyCode, beautifyOptions)}
          </Highlight>
        </div>
      </div>
    );
  }
}

export default inject('store')(observer(DisplayCode));
