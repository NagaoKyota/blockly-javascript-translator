import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Col, Row } from 'react-bootstrap';
import BlocklyComponent from './components/BlocklyComponent';
import DisplayCode from './components/DisplayCode';

const App = () => (
  <div>
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
  </div>
);

ReactDOM.render(<App />, window.document.getElementById('root'));
