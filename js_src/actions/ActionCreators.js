import { CALL_API, Schemas } from '../middleware/api';
import ActionTypes from './ActionTypes';

class ActionCreators {

  toggleSnippetForm(showForm) {
    if(showForm) {
      return { type: ActionTypes.SHOW_ADD_SNIPPET_FORM };
    } else {
      return { type: ActionTypes.HIDE_ADD_SNIPPET_FORM };
    }
  }
}

module.exports = new ActionCreators();
