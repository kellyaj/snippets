import { expect } from 'chai'
import boardsReducer from '../../js_src/reducers/boardsReducer'
import {
  GET_BOARDS_SUCCESS,
  CREATE_BOARD_SUCCESS
} from '../../js_src/actions/ActionTypes'

describe('boardsReducer', () => {
  it('returns boards by default', () => {
    const boards = { "123": { name: "some board" }}
    const action = { type: "SOME_UNRELATED_TYPE" }
    expect(
      boardsReducer(boards, action)
    ).to.eql(boards)
  })

  it('assigns the initial get boards success', () => {
    const boards = {
      "123": { name: "some board" },
      "456": { name: "another board" }
    }
    const action = {
      type: GET_BOARDS_SUCCESS,
      response: boards
    }
    expect(
      boardsReducer({}, action)
    ).to.eql(boards)
  })

  it('can add new boards', () => {
    const id = "123"
    const board = {
      id: id,
      name: "some board"
    }
    const action = {
      type: CREATE_BOARD_SUCCESS,
      response: board
    }
    expect(
      boardsReducer({}, action)
    ).to.eql({
      "123": board
    })
  })
})
