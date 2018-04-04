import * as changetext from '../actions/changetext'

const initialState = {
  btext: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case changetext.TEXT_CHANGED:
      if (state.btext === '') {
        return {
          btext: 'textHello!!'
        }         
      } else {
        return {
          btext: ''
        }      
      }
    default:
      return state
  }
}

export const bText = (state) => state.btext
