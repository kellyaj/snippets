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
    return MyApi.retrieveSnippets().then((response) => {
      return {
        type: ActionTypes.RETRIEVE_SNIPPETS,
        snippetData: response
      }
    });;
  }
}

module.exports = new ActionCreators();
