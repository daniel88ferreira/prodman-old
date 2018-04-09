import * as changeview from '../actions/gui_actions'

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

export const currentView = (state) => state.view
