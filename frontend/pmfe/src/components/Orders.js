import React from 'react';
import {
  Row,
  Col,
  Button,
  Table
} from 'reactstrap';

export default class Orders extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Button color="primary" >Nova Ordem Produção</Button>{' '}
            <Button color="success" >Nova Ordem Execução</Button>
          </Col>
        </Row>
        <p/>
        <Row>
          <Col>
            <Table hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}
