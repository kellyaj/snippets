const InitialState = {
  snippetsReducer: {},
  tagsReducer: {},
  uiDataReducer: {
    showAddSnippetForm: false,
    showAddTagForm: false,
    selectedTagId: null,
    addSnippetFormClass: ""
  },
  newSnippetReducer: { tags: [] }
}

module.exports = InitialState
