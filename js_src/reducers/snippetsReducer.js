import ActionTypes from '../actions/ActionTypes';

const snippetsReducer = (snippets = {}, action) => {
  switch(action.type) {
    case ActionTypes.RETRIEVE_SNIPPETS:
      console.log(action.snippetData);
      return Object.assign({}, snippets, action.snippetData)
    default:
      return snippets
  }
}

export default snippetsReducer
