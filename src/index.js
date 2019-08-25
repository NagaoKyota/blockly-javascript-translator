import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import Blockly from 'node-blockly/browser';
import { Provider } from 'mobx-react';
import { Container, Col, Row } from 'react-bootstrap';
import JA from 'node-blockly/lib/i18n/ja';
import Store from './Store';
import BlocklyComponent from './components/BlocklyComponent';
import DisplayCode from './components/DisplayCode';

Blockly.setLocale(JA);
Blockly.BlockSvg.START_HAT = true;

class App extends React.Component {
  render() {
    const stores = {
      store: Store,
    };
    return (
      <Provider {...stores}>
        <Container fluid style={{ marginTop: `10px` }}>
          <Row>
            <Col md={6}>
              <BlocklyComponent />
            </Col>
            <Col md={6}>
              <DisplayCode />
            </Col>
          </Row>
        </Container>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, window.document.getElementById('root'));
