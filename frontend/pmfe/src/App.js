import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { echo } from './actions/echo'
import { fetchProductsAll } from './actions/api'
import { change_view } from './actions/gui'

import {
  serverMessage,
  serverProducts,
  mainView
} from './reducers'

import { Container, Row, Col } from 'reactstrap'

import NavBar from './components/NavBar'
import Orders from './components/Orders'
import Products from './components/Products'
import Stocks from './components/Stocks'


class App extends Component {
  componentDidMount() {
    this.props.fetchMessage('BATATAS!')
    this.props.fetchProductsAll()
  }

  navBarClick(btn_clicked) {
    this.props.changeView(btn_clicked);
  }

  render() {
    const elems = this.props.serverProductsAll.map(
      (elem) => <li key={elem.id}> {elem.name}:{elem.code} </li>
    )

    const body = () => {
      if (this.props.serverProductsAll.length) {
        return <div> M: <b>{this.props.message}</b> {elems} </div>;
      } else {
        return <div>Loading...</div>;
      }
    }

    const view = () => {
      switch (this.props.currentview) {
        case 1:
          return <Orders />;
        case 2:
          return <Products />;
        case 3:
          return <Stocks />;
        default:
          return <Orders />;
      }
    }

    return (
      <Container >
        <Row>
          <Col>
            <NavBar
              onClick={(i) => this.navBarClick(i)}
              active={this.props.currentview} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <p />
            {view()}
            <p />
          </Col>
        </Row>
        <Row>
          <Col>CURRENT VIEW: {this.props.currentview} {body()}</Col>
        </Row>
      </Container>
    );

  }
}

export default connect(
  state => ({
    message: serverMessage(state),
    serverProductsAll: serverProducts(state),
    currentview: mainView(state)
  }),
  {
    fetchMessage: echo,
    fetchProductsAll: fetchProductsAll,
    changeView: change_view
  }
)(App)
