import React from 'react'

import { 
    Button,
} from 'reactstrap';


export default (props) => {
    return (
      <div>
      <Button color="danger" onClick={props.action}>Click me!</Button>
      </div>
    );
  };