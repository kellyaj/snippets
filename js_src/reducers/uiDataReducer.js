import ActionTypes from '../actions/ActionTypes';

const uiDataReducer = (uiData = {}, action) => {
  switch(action.type) {
    case ActionTypes.SHOW_ADD_SNIPPET_FORM:
      return Object.assign({}, uiData, { showAddSnippetForm: true })

    case ActionTypes.HIDE_ADD_SNIPPET_FORM:
      return Object.assign({}, uiData, { showAddSnippetForm: false })

    default:
      return uiData
  }
}

export default uiDataReducer
