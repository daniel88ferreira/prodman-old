import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { echo } from './actions/echo'
import { list } from './actions/list'
import { changeview } from './actions/gui_actions'

import {
  serverMessage,
  allObjects,
  currentView
} from './reducers'

import { Container, Row, Col } from 'reactstrap'

import NavBar from './components/NavBar'
import Orders from './components/Orders'
import Products from './components/Products'
import Stocks from './components/Stocks'


class App extends Component {
  componentDidMount() {
    this.props.fetchMessage('BATATAS!')
    this.props.fetchObjects()
  }

  navBarClick(btn_clicked) {
    console.log("Button " + btn_clicked + " clicked!");
    this.props.changeView(btn_clicked);
  }

  render() {
    console.log(this.props.objects);
    const elems = this.props.objects.map(
      (elem) => <li key={elem.id}> {elem.name}:{elem.code} </li>
    )

    const body = () => {
      if (this.props.objects.length) {
        return <div> M: <b>{this.props.message}</b> {elems} </div>;
      } else {
        return <div>Loading...</div>;
      }
    }

    const view = () => {
      switch (this.props.view) {
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
          <Col> <NavBar onClick={(i) => this.navBarClick(i)} active={this.props.view} /> </Col>
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
          <Col>CURRENT VIEW: {this.props.view} {body()}</Col>
        </Row>
      </Container>
    );

  }
}

export default connect(
  state => ({
    message: serverMessage(state),
    objects: allObjects(state),
    view: currentView(state)
  }),
  {
    fetchMessage: echo,
    fetchObjects: list,
    changeView: changeview
  }
)(App)
