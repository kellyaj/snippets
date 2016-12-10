import _ from 'lodash'
import {
  SELECT_BOARD,
  SHOW_BOARD_LIST,
  DISPLAY_SLUG_SUCCESS,
  DISPLAY_SLUG_FAILURE,
} from '../actions/ActionTypes'

const selectedBoardReducer = (selectedBoard = {}, action) => {
  switch(action.type) {
    case SELECT_BOARD:
      return action.board
    case SHOW_BOARD_LIST:
      return null
    case DISPLAY_SLUG_SUCCESS:
      return action.response
    case DISPLAY_SLUG_FAILURE:
      return null
    default:
      return selectedBoard
  }
}

export default selectedBoardReducer
