import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { echo } from './actions/echo'
import { list } from './actions/list'
import { changetext } from './actions/changetext'

import {
  serverMessage,
  allObjects,
  bText
} from './reducers'

import NavBar from './components/NavBar'
import { Container, Row, Col } from 'reactstrap'

class App extends Component {
  componentDidMount() {
    this.props.fetchMessage('BATATAS!')
    this.props.fetchObjects()
  }

  render() {
    console.log(this.props.objects);
    const elems = this.props.objects.map((elem) =>
      <li key={elem.id}>
        {elem.name}:{elem.code}
      </li>
    )

    const body = () => {
      if (this.props.objects.length) {
        return (
          <div>
            <p>
              The message: <b>{this.props.message}</b>
            </p>
            <div>
              {this.props.some_text}
            </div>
            <ul>
              {elems}
            </ul>
          </div>
        )
      } else {
        return <div>Loading...</div>;
      }
    }


    return (
      <Container>
        <Row>
          <Col>NavBar goes here! <NavBar action={this.props.changeText} /> </Col>
        </Row>
        <Row>
          <Col>
          body
          {body()}
          </Col>
        </Row>

        </Container>

    );

  }
}

export default connect(
  state => ({
    message: serverMessage(state),
    objects: allObjects(state),
    some_text: bText(state)
  }),
  {
    fetchMessage: echo,
    fetchObjects: list,
    changeText: changetext
  }
)(App)
