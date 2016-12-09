import _ from 'lodash'
import {
  GET_BOARDS_SUCCESS,
  CREATE_BOARD_SUCCESS
} from '../actions/ActionTypes'

const boardsReducer = (boards = {}, action) => {
  switch(action.type) {
    case GET_BOARDS_SUCCESS:
      return Object.assign({}, boards, action.response)
    case CREATE_BOARD_SUCCESS:
      const board = action.response
      return Object.assign({}, boards, {
        [board.id]: board
      })
    default:
      return boards
  }
}

export default boardsReducer
