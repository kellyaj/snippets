import {
  GET_SNIPPET_SUCCESS,
  ADD_SNIPPET_SUCCESS,
  FILTER_SNIPPET_SUCCESS,
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
    default:
      return snippets
  }
}

export default snippetsReducer
