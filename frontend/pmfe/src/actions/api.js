import { RSAA } from 'redux-api-middleware'
import { withAuth } from '../reducers'

export const FETCH_PRODUCTS_REQUEST = '@@api/FETCH_PRODUCTS_REQUEST'
export const FETCH_PRODUCTS_SUCCESS = '@@api/FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILURE = '@@api/FETCH_PRODUCTS_FAILURE'

export const fetch_products = () => ({
  [RSAA]: {
    endpoint: '/api/create/',
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE
    ]
  }
})
