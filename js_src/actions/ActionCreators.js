import MyApi from '../middleware/MyApi';
import ActionTypes from './ActionTypes';

class ActionCreators {

  toggleSnippetForm(showForm) {
    if(showForm) {
      return { type: ActionTypes.SHOW_ADD_SNIPPET_FORM };
    } else {
      return { type: ActionTypes.HIDE_ADD_SNIPPET_FORM };
    }
  }

  addNewSnippet() {
  }

  retrieveSnippets() {
    return {
      type: ActionTypes.RETRIEVE_SNIPPETS,
      callApi: true
    }
  }
}

module.exports = new ActionCreators();
