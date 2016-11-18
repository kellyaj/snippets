import ActionTypes from './ActionTypes'
import {
  GET_SNIPPET_REQUEST,
  GET_SNIPPET_SUCCESS,
  GET_SNIPPET_FAILURE,
  ADD_SNIPPET_REQUEST,
  ADD_SNIPPET_SUCCESS,
  ADD_SNIPPET_FAILURE
} from './ApiActionTypes'

const CALL_API = "CALL_API_SYMBOL"

class ActionCreators {

  toggleSnippetForm(showForm) {
    if(showForm) {
      return { type: ActionTypes.SHOW_ADD_SNIPPET_FORM };
    } else {
      return { type: ActionTypes.HIDE_ADD_SNIPPET_FORM };
    }
  }

  addNewSnippet(snippet) {
    return {
      type: ActionTypes.ADD_NEW_SNIPPET,
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
      type: ActionTypes.RETRIEVE_SNIPPETS,
      [CALL_API]: {
        types: [ GET_SNIPPET_REQUEST, GET_SNIPPET_SUCCESS, GET_SNIPPET_FAILURE ],
        endpoint: '/snippets',
        httpMethod: 'GET',
      }
    }
  }
}

module.exports = new ActionCreators()
