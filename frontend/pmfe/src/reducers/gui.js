import * as changeview from '../actions/gui'

const initialState = {
  mainview: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case changeview.CHANGE_VIEW:
    return {
      mainview: action.view
    }
    default:
      return state
  }
}

export const mainView = (state) => state.mainview
