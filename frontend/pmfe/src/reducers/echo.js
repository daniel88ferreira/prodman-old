import * as echo from '../actions/echo'

const initialState = {
  message: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case echo.ECHO_SUCCESS:
    console.log("ECHO: OK")
      return {
        message: action.payload.message
      }
    default:
    console.log("ECHO: NOK")
      return state
  }
}

export const serverMessage = (state) => state.message
