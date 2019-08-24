import React from 'react';
import ReactDOM from 'react-dom';
import BlocklyComponent from './components/BlocklyComponent';

const App = () => (
  <BlocklyComponent />
);

ReactDOM.render(<App />, window.document.getElementById('root'));
