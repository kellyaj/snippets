const InitialState = {
  snippetsReducer: {},
  tagsReducer: {},
  uiDataReducer: {
    showAddSnippetForm: false,
    showAddTagForm: false,
    showNewBoardForm: false,
    showCloneBoardForm: false,
    showJumpForm: true,
    selectedTagId: null,
    addSnippetFormClass: "",
    addTagFormClass: "",
    displayFlashMessage: false,
    flashMessage: "",
    flashMessageClass: "",
  },
  newSnippetReducer: { tags: [] },
  selectedBoardReducer: null
}

module.exports = InitialState
