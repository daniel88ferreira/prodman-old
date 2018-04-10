import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth, * as fromAuth from './auth.js'
import echo, * as fromEcho from './echo.js'
import products, * as fromApi from './api.js'
import changeview, * as fromGui from './gui.js'

export default combineReducers({
  auth: auth,
  echo: echo,
  products: products,
  view: changeview,
  router: routerReducer
})

export const isAuthenticated = state => fromAuth.isAuthenticated(state.auth)
export const accessToken = state => fromAuth.accessToken(state.auth)
export const isAccessTokenExpired = state => fromAuth.isAccessTokenExpired(state.auth)
export const refreshToken = state => fromAuth.refreshToken(state.auth)
export const isRefreshTokenExpired = state => fromAuth.isRefreshTokenExpired(state.auth)
export const authErrors = state => fromAuth.errors(state.auth)
export const serverMessage = state => fromEcho.serverMessage(state.echo)
export const fetchProducts = state => fromApi.products(state.products)
export const currentView = state => fromGui.currentView(state.view)

export function withAuth (headers = {}) {
  return (state) => ({
    ...headers,
    'Authorization': `Bearer ${accessToken(state)}`
  })
}
