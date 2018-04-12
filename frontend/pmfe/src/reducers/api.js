import * as fetch_products from '../actions/api'

const initialState = {
  products: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case fetch_products.FETCH_PRODUCTS_SUCCESS:
      return {
        products: action.payload
      }
    default:
      return state
  }
}

export const serverProductsAll = (state) => state.products
