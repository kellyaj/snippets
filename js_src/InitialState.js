const InitialState = {
  snippetsReducer: {},
  tagsReducer: {},
  uiDataReducer: {
    showAddSnippetForm: false,
    showAddTagForm: false,
    selectedTagId: null,
    addSnippetFormClass: "",
    addTagFormClass: "",
    displayFlashMessage: false,
    flashMessage: "",
    flashMessageClass: ""
  },
  newSnippetReducer: { tags: [] }
}

module.exports = InitialState
