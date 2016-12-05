import { expect } from 'chai'
import uiDataReducer from '../../js_src/reducers/uiDataReducer'
import {
  ADD_SNIPPET_SUCCESS,
  SHOW_ADD_SNIPPET_FORM,
  HIDE_ADD_SNIPPET_FORM,
  SHOW_ADD_TAG_FORM,
  HIDE_ADD_TAG_FORM,
  ADD_TAG_SUCCESS,
  UPDATE_SELECTED_TAG,
} from '../../js_src/actions/ActionTypes'

import {
  ADD_SNIPPET_SUCCESS_FLASH_MESSAGE,
  ADD_SNIPPET_SUCCESS_FLASH_CLASS,
  ADD_TAG_SUCCESS_FLASH_MESSAGE,
  ADD_TAG_SUCCESS_FLASH_CLASS
} from '../../js_src/constants/ui'

describe('uiDataReducer', () => {
  it('returns uiData by default', () => {
    const uiData = { someUiThing: true}
    const action = { type: "SOME_UNRELATED_ACTION" }
    expect(
      uiDataReducer(uiData, action)
    ).to.eql(uiData)
  })

  it('shows the add snippet form', () => {
    const addSnippetClass = "slide-down"
    const action = { type: SHOW_ADD_SNIPPET_FORM }
    expect(
      uiDataReducer({ showAddSnippetForm: false }, action)
    ).to.eql({ showAddSnippetForm: true, addSnippetFormClass: addSnippetClass })
  })

  it('hides the add snippet form', () => {
    const addSnippetClass = "slide-up"
    const action = { type: HIDE_ADD_SNIPPET_FORM }
    expect(
      uiDataReducer({ showAddSnippetForm: true }, action)
    ).to.eql({ showAddSnippetForm: false, addSnippetFormClass: addSnippetClass  })
  })

  it('hides the add snippet form action a snippet was added', () => {
    const action = { type: ADD_SNIPPET_SUCCESS }
    expect(
      uiDataReducer({ showAddSnippetForm: true }, action)
    ).to.eql({
      showAddSnippetForm: false,
      displayFlashMessage: true,
      flashMessage: ADD_SNIPPET_SUCCESS_FLASH_MESSAGE,
      flashMessageClass: ADD_SNIPPET_SUCCESS_FLASH_CLASS
    })
  })

  it('shows the add tag form', () => {
    const addTagFormClass = "slide-down"
    const action = { type: SHOW_ADD_TAG_FORM }
    expect(
      uiDataReducer({ showAddTagForm: false }, action)
    ).to.eql({ showAddTagForm: true, addTagFormClass: addTagFormClass })
  })

  it('hides the add tag form', () => {
    const addTagFormClass = "slide-up"
    const action = { type: HIDE_ADD_TAG_FORM }
    expect(
      uiDataReducer({ showAddTagForm: true }, action)
    ).to.eql({ showAddTagForm: false, addTagFormClass: addTagFormClass })
  })

  it('hides the add tag form action a tag was added', () => {
    const action = { type: ADD_TAG_SUCCESS }
    expect(
      uiDataReducer({ showAddTagForm: true }, action)
    ).to.eql({
      showAddTagForm: false,
      displayFlashMessage: true,
      flashMessage: ADD_TAG_SUCCESS_FLASH_MESSAGE,
      flashMessageClass: ADD_TAG_SUCCESS_FLASH_CLASS
    })
  })

  it('sets the selectedTagId', () => {
    const tagId = 87
    const action = { type: UPDATE_SELECTED_TAG, tagId: tagId }
    expect(
      uiDataReducer({ selectedTagId: 44 }, action)
    ).to.eql({ selectedTagId: tagId })
  })
})

