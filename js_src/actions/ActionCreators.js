import {
  CALL_API,
  GET_SNIPPET_REQUEST,
  GET_SNIPPET_SUCCESS,
  GET_SNIPPET_FAILURE,
  ADD_SNIPPET_REQUEST,
  ADD_SNIPPET_SUCCESS,
  ADD_SNIPPET_FAILURE,
  SHOW_ADD_SNIPPET_FORM,
  HIDE_ADD_SNIPPET_FORM,
  RETRIEVE_SNIPPETS,
  ADD_NEW_SNIPPET
} from './ActionTypes'

class ActionCreators {

  toggleSnippetForm(showForm) {
    if(showForm) {
      return { type: SHOW_ADD_SNIPPET_FORM };
    } else {
      return { type: HIDE_ADD_SNIPPET_FORM };
    }
  }

  addNewSnippet(snippet) {
    return {
      type: ADD_NEW_SNIPPET,
      [CALL_API]: {
        types: [ ADD_SNIPPET_REQUEST, ADD_SNIPPET_SUCCESS, ADD_SNIPPET_FAILURE ],
        endpoint: '/snippets',
        httpMethod: 'POST',
        requestData: snippet
      }
    }
  }

  retrieveSnippets() {
    return {
      type: RETRIEVE_SNIPPETS,
      [CALL_API]: {
        types: [ GET_SNIPPET_REQUEST, GET_SNIPPET_SUCCESS, GET_SNIPPET_FAILURE ],
        endpoint: '/snippets',
        httpMethod: 'GET',
      }
    }
  }
}

module.exports = new ActionCreators()
