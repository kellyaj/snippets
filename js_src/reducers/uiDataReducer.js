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
  SHOW_NEW_BOARD_FORM,
  HIDE_NEW_BOARD_FORM,
  CREATE_BOARD_SUCCESS,
  SHOW_CLONE_BOARD_FORM,
  HIDE_CLONE_BOARD_FORM,
  CLONE_BOARD_SUCCESS,
  SHOW_JUMP_FORM,
  HIDE_JUMP_FORM,
  JUMP_TO_SLUG_SUCCESS,
  SHOW_TUTORIAL_CARD,
  HIDE_TUTORIAL_CARD,
  DISPLAY_TUTORIAL,
  HIDE_TUTORIAL,
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
    case SHOW_NEW_BOARD_FORM:
      return Object.assign({}, uiData, {
        showNewBoardForm: true,
      })
    case HIDE_NEW_BOARD_FORM:
      return Object.assign({}, uiData, {
        showNewBoardForm: false,
      })
    case CREATE_BOARD_SUCCESS:
      return Object.assign({}, uiData, {
        showNewBoardForm: false,
      })
    case SHOW_CLONE_BOARD_FORM:
      return Object.assign({}, uiData, {
        showCloneBoardForm: true,
      })
    case HIDE_CLONE_BOARD_FORM:
      return Object.assign({}, uiData, {
        showCloneBoardForm: false,
      })
    case CLONE_BOARD_SUCCESS:
      return Object.assign({}, uiData, {
        showCloneBoardForm: false,
      })
    case SHOW_JUMP_FORM:
      return Object.assign({}, uiData, {
        showJumpForm: true,
      })
    case HIDE_JUMP_FORM:
      return Object.assign({}, uiData, {
        showJumpForm: false,
      })
    case JUMP_TO_SLUG_SUCCESS:
      return Object.assign({}, uiData, {
        showJumpForm: false,
      })
    case SHOW_TUTORIAL_CARD:
      return Object.assign({}, uiData, {
        showTutorialCard: true,
      })
    case HIDE_TUTORIAL_CARD:
      return Object.assign({}, uiData, {
        showTutorialCard: false,
      })
    case DISPLAY_TUTORIAL:
      return Object.assign({}, uiData, {
        showTutorial: true,
      })
    case HIDE_TUTORIAL:
      return Object.assign({}, uiData, {
        showTutorial: false,
      })
    default:
      return uiData
  }
}

export default uiDataReducer
