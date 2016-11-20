import _ from 'lodash'
import {
  GET_TAG_SUCCESS,
  ADD_TAG_SUCCESS,
  FILTER_BY_TAG_ID,
} from '../actions/ActionTypes'

const tagsReducer = (tags = {}, action) => {
  switch(action.type) {
    case GET_TAG_SUCCESS:
      return Object.assign({}, tags, action.response)
    case ADD_TAG_SUCCESS:
      const tag = action.response
      return Object.assign({}, tags, {
        [tag.id]: tag
      })
    case FILTER_BY_TAG_ID:
      const t = _.find(tags, ['id', action.tagId])
      return Object.assign({}, {}, {
        [t.id]: t
      })
    default:
      return tags
  }
}

export default tagsReducer
