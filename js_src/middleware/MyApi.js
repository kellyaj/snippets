import { Schema, arrayOf, normalize } from 'normalizr';
import { camelizeKeys } from 'humps'
import 'isomorphic-fetch'

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

  const SUCCESS_TYPE = 'SUCCESS'
  const FAILURE_TYPE = 'FAILURE'
  const REQUEST_TYPE = 'REQUEST'

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction.callApi
    return finalAction
  }

  next(actionWith({ type: REQUEST_TYPE }))

  return retrieveSnippets().then(
    response => next(actionWith({
      response,
      type: SUCCESS_TYPE
    })),
    error => next(actionWith({
      type: FAILURE_TYPE,
      error: error.message || 'something went wrong'
    }))
  )
}
