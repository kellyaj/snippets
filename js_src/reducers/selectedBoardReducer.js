import _ from 'lodash'
import { SELECT_BOARD } from '../actions/ActionTypes'

const selectedBoardReducer = (selectedBoard = {}, action) => {
  switch(action.type) {
    case SELECT_BOARD:
      return action.board
    default:
      return selectedBoard
  }
}

export default selectedBoardReducer
