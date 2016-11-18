import ActionTypes from './ActionTypes'

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
      callApi: true,
      endpoint: '/snippets/create',
      httpMethod: 'POST',
      data: snippet
    }
  }

  retrieveSnippets() {
    return {
      type: ActionTypes.RETRIEVE_SNIPPETS,
      callApi: true,
      endpoint: '/snippets',
      httpMethod: 'GET'
    }
  }
}

module.exports = new ActionCreators()
