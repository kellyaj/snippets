import React, { Component } from 'react'
import Store from '../../store/Store'
import ActionCreators from '../../actions/ActionCreators'
import BoardList from './BoardList'
import NewBoardForm from './NewBoardForm'

class BoardSelection extends Component {
  componentDidMount() {
    return Store.dispatch(ActionCreators.retrieveBoards())
  }

  selectBoard(board) {
    return Store.dispatch(ActionCreators.selectBoard(board))
  }

  createNewBoard(boardData) {
    return Store.dispatch(ActionCreators.createBoard(boardData))
  }

  displayNewBoardForm() {
    const { showNewBoardForm } = this.props.uiData
    if(showNewBoardForm) {
      return (
        <NewBoardForm
          createNewBoardHandler={this.createNewBoard.bind(this)}
        />
      )
    }
  }

  render() {
    const { boards } = this.props
    return (
      <div className="board-selection">
        <BoardList
          boards={boards}
          listTitle={"Public Boards"}
          selectBoardHandler={this.selectBoard.bind(this)}
        />
        { this.displayNewBoardForm() }
      </div>
    )
  }
}

export default BoardSelection
