import _ from 'lodash'
import {
  GET_BOARDS_SUCCESS,
} from '../actions/ActionTypes'

const boardsReducer = (boards = {}, action) => {
  switch(action.type) {
    case GET_BOARDS_SUCCESS:
      return Object.assign({}, boards, action.response)
    default:
      return boards
  }
}

export default boardsReducer
