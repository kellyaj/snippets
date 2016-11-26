import _ from 'lodash'
import {
  GET_SNIPPET_SUCCESS,
  ADD_SNIPPET_SUCCESS,
  FILTER_SNIPPET_SUCCESS,
  REMOVE_SNIPPET_SUCCESS,
  LOCK_SNIPPET_SUCCESS,
} from '../actions/ActionTypes'

const snippetsReducer = (snippets = {}, action) => {
  switch(action.type) {
    case GET_SNIPPET_SUCCESS:
      return Object.assign({}, snippets, action.response)
    case ADD_SNIPPET_SUCCESS:
      const snippet = action.response
      return Object.assign({}, snippets, {
        [snippet.id]: snippet
      })
    case FILTER_SNIPPET_SUCCESS:
      return Object.assign({}, {}, action.response)
    case REMOVE_SNIPPET_SUCCESS:
      return !action.response.deleted ? snippets : _.omit(snippets, parseInt(action.response.id))
    case LOCK_SNIPPET_SUCCESS:
      const lockedSnippet = action.response
      return Object.assign({}, snippets, {
        [lockedSnippet.id]: lockedSnippet
      })
    default:
      return snippets
  }
}

export default snippetsReducer
