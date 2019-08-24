import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { Container, Col, Row } from 'react-bootstrap';
import Store from './Store';
import BlocklyComponent from './components/BlocklyComponent';
import DisplayCode from './components/DisplayCode';

class App extends React.Component {
  render() {
    const stores = {
      store: Store,
    };
    return (
      <Provider {...stores}>
        <Container fluid style={{ marginTop: `10px` }}>
          <Row>
            <Col md={7}>
              <BlocklyComponent />
            </Col>
            <Col md={5}>
              <DisplayCode />
            </Col>
          </Row>
        </Container>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, window.document.getElementById('root'));
