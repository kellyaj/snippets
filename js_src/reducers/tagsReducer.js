import {
  GET_TAG_SUCCESS,
  ADD_TAG_SUCCESS,
} from '../actions/ActionTypes'

const tagsReducer = (tags = {}, action) => {
  switch(action.type) {
    case GET_TAG_SUCCESS:
      return Object.assign({}, tags, action.response)
    case ADD_TAG_SUCCESS:
      const tag = action.response
      return Object.assign({}, snippets, {
        [tag.id]: tag
      })
    default:
      return tags
  }
}

export default tagsReducer
