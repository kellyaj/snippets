const InitialState = {
  snippetsReducer: {
    45: {
      id: 45,
      name: "directory size",
      content: "du -sh",
      tags: [223, 951]
    },
    841: {
      id: 841,
      name: "list tmux sessions",
      content: "tmux list-sessions",
      tags: [752]
    }
  },
  tagsReducer: {
    223: {
      id: 223,
      name: "unix"
    },
    951: {
      id: 951,
      name: "disk"
    },
    752: {
      id: 752,
      name: "tmux"
    }
  },
  uiDataReducer: {
    showAddSnippetForm: false
  },
  entities: {}
}

module.exports = InitialState;
