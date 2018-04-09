import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Stocks extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>--- Stocks ---</Col>
        </Row>
        <Row>
          <Col>toolbar</Col>
        </Row>
        <Row>
          <Col>Table</Col>
        </Row>
      </Container>
    );
  }
}
