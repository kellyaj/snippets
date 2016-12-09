import React, { Component } from 'react'
import Store from '../../store/Store'
import ActionCreators from '../../actions/ActionCreators'
import BoardSection from './BoardSection'
import SideContentSection from './SideContentSection'

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

  render() {
    const { boards } = this.props
    return (
      <div className="board-selection">
        <BoardSection
          boards={boards}
          selectBoardHandler={this.selectBoard.bind(this)}
        />
        <SideContentSection
          uiData={this.props.uiData}
          createNewBoardHandler={this.createNewBoard.bind(this)}
        />
      </div>
    )
  }
}

export default BoardSelection
