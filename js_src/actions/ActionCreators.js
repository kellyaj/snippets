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

  retrieveSnippets() {
    return {
      type: RETRIEVE_SNIPPETS,
      [CALL_API]: {
        types: [ GET_SNIPPET_REQUEST, GET_SNIPPET_SUCCESS, GET_SNIPPET_FAILURE ],
        endpoint: '/snippets',
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

  retrieveTags() {
    return {
      type: RETRIEVE_TAGS,
      [CALL_API]: {
        types: [ GET_TAG_REQUEST, GET_TAG_SUCCESS, GET_TAG_FAILURE ],
        endpoint: '/tags',
        httpMethod: 'GET',
      }
    }
  }

  displayAllTags() {
    return this.retrieveSnippets()
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

}

module.exports = new ActionCreators()
