const InitialState = {
  snippetsReducer: {},
  tagsReducer: {},
  uiDataReducer: {
    showAddSnippetForm: false,
    showAddTagForm: false,
    selectedTagId: null,
    addSnippetFormClass: "",
    addTagFormClass: "",
  },
  newSnippetReducer: { tags: [] }
}

module.exports = InitialState
