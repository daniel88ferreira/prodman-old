import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth, * as fromAuth from './auth.js'
import echo, * as fromEcho from './echo.js'
import list, * as fromList from './list.js'
import changetext, * as fromChangetext from './changetext.js'

export default combineReducers({
  auth: auth,
  echo: echo,
  list: list,
  changetext: changetext,
  router: routerReducer
})

export const isAuthenticated = state => fromAuth.isAuthenticated(state.auth)
export const accessToken = state => fromAuth.accessToken(state.auth)
export const isAccessTokenExpired = state => fromAuth.isAccessTokenExpired(state.auth)
export const refreshToken = state => fromAuth.refreshToken(state.auth)
export const isRefreshTokenExpired = state => fromAuth.isRefreshTokenExpired(state.auth)
export const authErrors = state => fromAuth.errors(state.auth)
export const serverMessage = state => fromEcho.serverMessage(state.echo)
export const allObjects = state => fromList.allObjects(state.list)
export const bText = state => fromChangetext.bText(state.changetext)

export function withAuth (headers = {}) {
  return (state) => ({
    ...headers,
    'Authorization': `Bearer ${accessToken(state)}`
  })
}
