const InitialState = {
  snippetsReducer: {},
  tagsReducer: {},
  uiDataReducer: {
    showAddSnippetForm: false,
    showAddTagForm: false,
    selectedTagId: null
  },
  newSnippetReducer: { tags: [] }
}

module.exports = InitialState
