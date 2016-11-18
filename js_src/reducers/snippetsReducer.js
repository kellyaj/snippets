import ActionTypes from '../actions/ActionTypes';

const snippetsReducer = (snippets = {}, action) => {
  switch(action.type) {
    case ActionTypes.RETRIEVE_SNIPPETS:
      return Object.assign({}, snippets, action.snippetData)
    case ActionTypes.SUCCESS_TYPE:
      return Object.assign({}, snippets, action.response)
    default:
      return snippets
  }
}

export default snippetsReducer
