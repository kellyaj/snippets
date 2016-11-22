import _ from 'lodash'
import {
  ADD_SNIPPET_SUCCESS,
  ADD_TAG_TO_NEW_SNIPPET,
  REMOVE_TAG_FROM_NEW_SNIPPET,
} from '../actions/ActionTypes'

const newSnippetReducer = (newSnippet = { tags: [] }, action) => {
  switch(action.type) {
    case ADD_SNIPPET_SUCCESS:
      return { tags: []}
    case ADD_TAG_TO_NEW_SNIPPET:
      const newTags = newSnippet.tags.concat(action.tagId)
      return Object.assign({}, newSnippet, { tags: newTags })
    case REMOVE_TAG_FROM_NEW_SNIPPET:
      const removedTags = _.without(newSnippet.tags, action.tagId)
      return Object.assign({}, newSnippet, { tags: removedTags })
    default:
      return newSnippet
  }
}

export default newSnippetReducer
