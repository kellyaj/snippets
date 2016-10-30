import { CALL_API, Schemas } from '../middleware/api';

const {
  SHOW_ADD_SNIPPET_FORM,
  HIDE_ADD_SNIPPET_FORM
} = require('./ActionTypes');

class ActionCreators {

  showAddSnippetForm() {
    return { type: SHOW_ADD_SNIPPET_FORM }
  }

  hideAddSnippetForm() {
    return { type: HIDE_ADD_SNIPPET_FORM }
  }
}

module.exports = new ActionCreators();
