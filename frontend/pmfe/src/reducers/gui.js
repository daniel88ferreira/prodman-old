import * as changeview from '../actions/gui'

const initialState = {
  view: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case changeview.CHANGE_VIEW:
    return {
      view: action.view
    }
    default:
      return state
  }
}

export const mainView = (state) => state.view
