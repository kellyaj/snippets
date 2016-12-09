import { expect } from 'chai'
import selectedBoardReducer from '../../js_src/reducers/selectedBoardReducer'
import {
  SELECT_BOARD,
  SHOW_BOARD_LIST
} from '../../js_src/actions/ActionTypes'

describe('selectedBoardReducer', () => {
  it('returns the selectedBoard by default', () => {
    const selectedBoard = { "123": { name: "some board" }}
    const action = { type: "SOME_UNRELATED_TYPE" }
    expect(
      selectedBoardReducer(selectedBoard, action)
    ).to.eql(selectedBoard)
  })

  it('assigns the selected board', () => {
    const selectedBoard = { "123": { name: "some board" }}
    const action = {
      type: SELECT_BOARD,
      board: selectedBoard
    }
    expect(
      selectedBoardReducer({}, action)
    ).to.eql(selectedBoard)
  })

  it('nulls the selected board when showing the list', () => {
    const selectedBoard = { "123": { name: "some board" }}
    const action = { type: SHOW_BOARD_LIST }
    expect(
      selectedBoardReducer(selectedBoard, action)
    ).to.eql(null)
  })
})
