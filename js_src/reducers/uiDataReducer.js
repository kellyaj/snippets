import {
  ADD_SNIPPET_SUCCESS,
  SHOW_ADD_SNIPPET_FORM,
  HIDE_ADD_SNIPPET_FORM,
  SHOW_ADD_TAG_FORM,
  HIDE_ADD_TAG_FORM,
  ADD_TAG_SUCCESS,
  FILTER_BY_TAG_ID,
  UPDATE_SELECTED_TAG,
  REMOVE_FLASH_MESSAGE,
} from '../actions/ActionTypes'

import {
  ADD_SNIPPET_SUCCESS_FLASH_MESSAGE,
  ADD_SNIPPET_SUCCESS_FLASH_CLASS,
  ADD_TAG_SUCCESS_FLASH_MESSAGE,
  ADD_TAG_SUCCESS_FLASH_CLASS
} from '../constants/ui'

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
      return Object.assign({}, uiData, {
        showAddSnippetForm: false,
        displayFlashMessage: true,
        flashMessage: ADD_SNIPPET_SUCCESS_FLASH_MESSAGE,
        flashMessageClass: ADD_SNIPPET_SUCCESS_FLASH_CLASS
      })
    case SHOW_ADD_TAG_FORM:
      return Object.assign({}, uiData, {
        showAddTagForm: true,
        addTagFormClass: "slide-down"
      })
    case HIDE_ADD_TAG_FORM:
      return Object.assign({}, uiData, {
        showAddTagForm: false,
        addTagFormClass: "slide-up"
      })
    case ADD_TAG_SUCCESS:
      return Object.assign({}, uiData, {
        showAddTagForm: false,
        displayFlashMessage: true,
        flashMessage: ADD_TAG_SUCCESS_FLASH_MESSAGE,
        flashMessageClass: ADD_TAG_SUCCESS_FLASH_CLASS
      })
    case UPDATE_SELECTED_TAG:
      return Object.assign({}, uiData, { selectedTagId: action.tagId })
    case REMOVE_FLASH_MESSAGE:
      return Object.assign({}, uiData, {
        displayFlashMessage: false,
        flashMessage: "",
        flashMessageClass: ""
      })
    default:
      return uiData
  }
}

export default uiDataReducer
