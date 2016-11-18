import ActionTypes from '../actions/ActionTypes'

const snippetsReducer = (snippets = {}, action) => {
  switch(action.type) {
    case ActionTypes.SUCCESS_TYPE:
      if (action.retrieveSnippets) {
        return Object.assign({}, snippets, action.response)
      }
      if (action.addNewSnippet) {
        const snippet = action.data
        return Object.assign({}, snippets, {
          [snippet.id]: snippet
        })
      }
    default:
      return snippets
  }
}

export default snippetsReducer
