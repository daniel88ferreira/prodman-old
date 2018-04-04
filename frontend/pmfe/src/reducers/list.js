import * as list from '../actions/list'

const initialState = {
  all_objects: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case list.LIST_SUCCESS:
      return {
        all_objects: action.payload
      }
    default:
      return state
  }
}

export const allObjects = (state) => state.all_objects
