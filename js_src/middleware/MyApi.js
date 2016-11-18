import { Schema, arrayOf, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'
import ActionTypes from '../actions/ActionTypes'

function retrieveSnippets() {
  return fetch('/snippets')
  .then(response =>
    response.json().then(json => ({ json, response }))
  ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      return camelizeKeys(json);
    })
}

export default store => next => action => {
  const callAPI = action.callApi
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction.callApi
    return finalAction
  }

  next(actionWith({ type: ActionTypes.REQUEST_TYPE }))

  return retrieveSnippets().then(
    response => next(actionWith({
      response,
      type: ActionTypes.SUCCESS_TYPE
    })),
    error => next(actionWith({
      type: ActionTypes.FAILURE_TYPE,
      error: error.message || 'something went wrong'
    }))
  )
}
