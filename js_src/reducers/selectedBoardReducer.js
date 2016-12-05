import _ from 'lodash'
import {
  SELECT_BOARD,
  SHOW_BOARD_LIST
} from '../actions/ActionTypes'

const selectedBoardReducer = (selectedBoard = {}, action) => {
  switch(action.type) {
    case SELECT_BOARD:
      return action.board
    case SHOW_BOARD_LIST:
      return null
    default:
      return selectedBoard
  }
}

export default selectedBoardReducer
