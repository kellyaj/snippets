import {
  CALL_API,
  RETRIEVE_SNIPPETS,
  ADD_NEW_SNIPPET,
  GET_SNIPPET_REQUEST,
  GET_SNIPPET_SUCCESS,
  GET_SNIPPET_FAILURE,
  ADD_SNIPPET_REQUEST,
  ADD_SNIPPET_SUCCESS,
  ADD_SNIPPET_FAILURE,
  SHOW_ADD_SNIPPET_FORM,
  HIDE_ADD_SNIPPET_FORM,
  RETRIEVE_TAGS,
  ADD_NEW_TAG,
  GET_TAG_REQUEST,
  GET_TAG_SUCCESS,
  GET_TAG_FAILURE,
  ADD_TAG_REQUEST,
  ADD_TAG_SUCCESS,
  ADD_TAG_FAILURE,
  SHOW_ADD_TAG_FORM,
  HIDE_ADD_TAG_FORM,
  FILTER_BY_TAG_ID,
  REMOVE_ALL_TAG_FILTERS,
  FILTER_SNIPPET_REQUEST,
  FILTER_SNIPPET_SUCCESS,
  FILTER_SNIPPET_FAILURE,
  UPDATE_SELECTED_TAG,
  ADD_TAG_TO_NEW_SNIPPET,
  REMOVE_TAG_FROM_NEW_SNIPPET,
  REMOVE_SNIPPET,
  LOCK_SNIPPET,
  UNLOCK_SNIPPET,
  REMOVE_SNIPPET_REQUEST,
  REMOVE_SNIPPET_SUCCESS,
  REMOVE_SNIPPET_FAILURE,
  LOCK_SNIPPET_REQUEST,
  LOCK_SNIPPET_SUCCESS,
  LOCK_SNIPPET_FAILURE,
  REMOVE_FLASH_MESSAGE,
  RETRIEVE_BOARDS,
  GET_BOARDS_REQUEST,
  GET_BOARDS_SUCCESS,
  GET_BOARDS_FAILURE,
  SELECT_BOARD,
  SHOW_BOARD_LIST,
  SHOW_NEW_BOARD_FORM,
  HIDE_NEW_BOARD_FORM,
  CREATE_BOARD,
  CREATE_BOARD_REQUEST,
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_FAILURE,
  SET_SLUG,
  CLEAR_SLUG,
  RETRIEVE_SLUG,
  DISPLAY_SLUG,
  DISPLAY_SLUG_REQUEST,
  DISPLAY_SLUG_SUCCESS,
  DISPLAY_SLUG_FAILURE,
  SHOW_CLONE_BOARD_FORM,
  HIDE_CLONE_BOARD_FORM,
  CLONE_BOARD,
  CLONE_BOARD_REQUEST,
  CLONE_BOARD_SUCCESS,
  CLONE_BOARD_FAILURE,
  JUMP_TO_SLUG,
  JUMP_TO_SLUG_REQUEST,
  JUMP_TO_SLUG_SUCCESS,
  JUMP_TO_SLUG_FAILURE,
  SHOW_JUMP_FORM,
  HIDE_JUMP_FORM,
} from './ActionTypes'

class ActionCreators {
  toggleSnippetForm(showForm) {
    if(showForm) {
      return { type: SHOW_ADD_SNIPPET_FORM };
    } else {
      return { type: HIDE_ADD_SNIPPET_FORM };
    }
  }

  addNewSnippet(snippet) {
    return {
      type: ADD_NEW_SNIPPET,
      [CALL_API]: {
        types: [ ADD_SNIPPET_REQUEST, ADD_SNIPPET_SUCCESS, ADD_SNIPPET_FAILURE ],
        endpoint: '/snippets',
        httpMethod: 'POST',
        requestData: snippet
      }
    }
  }

  retrieveSnippets(boardId) {
    return {
      type: RETRIEVE_SNIPPETS,
      [CALL_API]: {
        types: [ GET_SNIPPET_REQUEST, GET_SNIPPET_SUCCESS, GET_SNIPPET_FAILURE ],
        endpoint: `/snippets?board_id=${boardId}`,
        httpMethod: 'GET',
      }
    }
  }

  toggleTagForm(showForm) {
    if(showForm) {
      return { type: SHOW_ADD_TAG_FORM };
    } else {
      return { type: HIDE_ADD_TAG_FORM };
    }
  }

  addNewTag(tag) {
    return {
      type: ADD_NEW_TAG,
      [CALL_API]: {
        types: [ ADD_TAG_REQUEST, ADD_TAG_SUCCESS, ADD_TAG_FAILURE ],
        endpoint: '/tags',
        httpMethod: 'POST',
        requestData: tag
      }
    }
  }

  retrieveTags(boardId) {
    return {
      type: RETRIEVE_TAGS,
      [CALL_API]: {
        types: [ GET_TAG_REQUEST, GET_TAG_SUCCESS, GET_TAG_FAILURE ],
        endpoint: `/tags?board_id=${boardId}`,
        httpMethod: 'GET',
      }
    }
  }

  displayAllTags(boardId) {
    return this.retrieveSnippets(boardId)
  }

  displayOnlyTag(tagId) {
    return {
      type: FILTER_BY_TAG_ID,
      [CALL_API]: {
        types: [ FILTER_SNIPPET_REQUEST, FILTER_SNIPPET_SUCCESS, FILTER_SNIPPET_FAILURE ],
        endpoint: `/snippets/filter_by_id?tagId=${tagId}`,
        httpMethod: 'GET'
      }
    }
  }

  changeSelectedTag(tagId) {
    return {
      type: UPDATE_SELECTED_TAG,
      tagId: tagId
    }
  }

  addTagToNewSnippet(tagId) {
    return {
      type: ADD_TAG_TO_NEW_SNIPPET,
      tagId: tagId
    }
  }

  removeTagFromNewSnippet(tagId) {
    return {
      type: REMOVE_TAG_FROM_NEW_SNIPPET,
      tagId: tagId
    }
  }

  removeSnippet(snippetId) {
    return {
      type: REMOVE_SNIPPET,
      [CALL_API]: {
        types: [ REMOVE_SNIPPET_REQUEST, REMOVE_SNIPPET_SUCCESS, REMOVE_SNIPPET_FAILURE ],
        endpoint: `/snippets/${snippetId}`,
        httpMethod: 'DELETE'
      }
    }
  }

  toggleLockSnippet(snippetId, shouldLock) {
    return {
      type: LOCK_SNIPPET,
      [CALL_API]: {
        types: [ LOCK_SNIPPET_REQUEST, LOCK_SNIPPET_SUCCESS, LOCK_SNIPPET_FAILURE ],
        endpoint: `/snippets/toggle_snippet_lock`,
        httpMethod: 'POST',
        requestData: { snippet_id: snippetId, should_lock: shouldLock }
      }
    }
  }

  removeFlashMessage() {
    return {
      type: REMOVE_FLASH_MESSAGE
    }
  }

  retrieveBoards() {
    return {
      type: RETRIEVE_BOARDS,
      [CALL_API]: {
        types: [ GET_BOARDS_REQUEST, GET_BOARDS_SUCCESS, GET_BOARDS_FAILURE ],
        endpoint: '/boards',
        httpMethod: 'GET',
      }
    }
  }

  selectBoard(board) {
    return {
      type: SELECT_BOARD,
      board: board
    }
  }

  showBoardList() {
    return { type: SHOW_BOARD_LIST }
  }

  toggleNewBoardForm(showForm) {
    if(showForm) {
      return { type: SHOW_NEW_BOARD_FORM };
    } else {
      return { type: HIDE_NEW_BOARD_FORM };
    }
  }

  createBoard(board) {
    return {
      type: CREATE_BOARD,
      [CALL_API]: {
        types: [ CREATE_BOARD_REQUEST, CREATE_BOARD_SUCCESS, CREATE_BOARD_FAILURE ],
        endpoint: '/boards',
        httpMethod: 'POST',
        requestData: board
      }
    }
  }

  displaySlug(slug) {
    return {
      type: RETRIEVE_SLUG,
      [CALL_API]: {
        types: [ DISPLAY_SLUG_REQUEST, DISPLAY_SLUG_SUCCESS, DISPLAY_SLUG_FAILURE ],
        endpoint: `/boards/by_slug?slug=${slug}`,
        httpMethod: 'get',
      }
    }
  }

  clearSlug() {
    return { type: CLEAR_SLUG }
  }

  jumpToSlug(slug) {
    return {
      type: JUMP_TO_SLUG,
      [CALL_API]: {
        types: [ JUMP_TO_SLUG_REQUEST, JUMP_TO_SLUG_SUCCESS, JUMP_TO_SLUG_FAILURE ],
        endpoint: `/boards/by_slug?slug=${slug}`,
        httpMethod: 'get',
      }
    }
  }

  toggleCloneBoardForm(showForm) {
    if(showForm) {
      return { type: SHOW_CLONE_BOARD_FORM };
    } else {
      return { type: HIDE_CLONE_BOARD_FORM };
    }
  }

  cloneBoard(slug) {
    return {
      type: CLONE_BOARD,
      [CALL_API]: {
        types: [ CLONE_BOARD_REQUEST, CLONE_BOARD_SUCCESS, CLONE_BOARD_FAILURE ],
        endpoint: `/boards/clone?slug=${slug}`,
        httpMethod: 'post',
      }
    }
  }

  toggleJumpForm(showForm) {
    if(showForm) {
      return { type: SHOW_JUMP_FORM };
    } else {
      return { type: HIDE_JUMP_FORM };
    }
  }

}

module.exports = new ActionCreators()
