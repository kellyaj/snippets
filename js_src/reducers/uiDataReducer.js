import {
  ADD_SNIPPET_SUCCESS,
  SHOW_ADD_SNIPPET_FORM,
  HIDE_ADD_SNIPPET_FORM,
  SHOW_ADD_TAG_FORM,
  HIDE_ADD_TAG_FORM,
  ADD_TAG_SUCCESS,
  FILTER_BY_TAG_ID,
  UPDATE_SELECTED_TAG,
} from '../actions/ActionTypes'

const uiDataReducer = (uiData = {}, action) => {
  switch(action.type) {
    case SHOW_ADD_SNIPPET_FORM:
      return Object.assign({}, uiData, {
        showAddSnippetForm: true,
        addSnippetFormClass: "slide-down"
      })
    case HIDE_ADD_SNIPPET_FORM:
      return Object.assign({}, uiData, {
        showAddSnippetForm: false,
        addSnippetFormClass: "slide-up"
      })
    case ADD_SNIPPET_SUCCESS:
      return Object.assign({}, uiData, { showAddSnippetForm: false })
    case SHOW_ADD_TAG_FORM:
      return Object.assign({}, uiData, { showAddTagForm: true })
    case HIDE_ADD_TAG_FORM:
      return Object.assign({}, uiData, { showAddTagForm: false })
    case ADD_TAG_SUCCESS:
      return Object.assign({}, uiData, { showAddTagForm: false })
    case UPDATE_SELECTED_TAG:
      return Object.assign({}, uiData, { selectedTagId: action.tagId })
    default:
      return uiData
  }
}

export default uiDataReducer
