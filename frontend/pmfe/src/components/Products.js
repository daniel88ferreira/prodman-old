import React from 'react';
import { connect } from 'react-redux'

// Actions
import { fetchProductsAll } from '../actions/api'
// Reducers
import { serverProducts } from '../reducers'

import {
  Row,
  Col,
  Button,
  Table
} from 'reactstrap';


class Products extends React.Component {
  render() {
    const rows = this.props.serverProductsAll.map((product) =>
      <tr key={product.id}>
        <th scope="row">{product.code}</th>
        <td>{product.name}</td>
        <td>{product.color}</td>
        <td>{product.size}</td>
      </tr>
    )

    return (
      <div>
        <Row>
          <Col>
            <Button color="primary"
              onClick={() => this.props.fetchProductsAll()}>
              Refresh
            </Button>
          </Col>
        </Row>
        <p />
        <Row>
          <Col>
            <Table hover>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Descrição</th>
                  <th>Cor</th>
                  <th>Tamanho</th>
                </tr>
              </thead>
              <tbody>
                {rows}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  state => ({
    serverProductsAll: serverProducts(state),
  }),
  {
    fetchProductsAll: fetchProductsAll,
  }
)(Products)
