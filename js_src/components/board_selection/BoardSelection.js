import React, { Component } from 'react'
import Store from '../../store/Store'
import ActionCreators from '../../actions/ActionCreators'
import BoardList from './BoardList'
import '../../styles/app.scss'

class BoardSelection extends Component {
  componentDidMount() {
    return Store.dispatch(ActionCreators.retrieveBoards())
  }

  selectBoard(board) {
    return Store.dispatch(ActionCreators.selectBoard(board))
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
      </div>
    )
  }
}

export default BoardSelection
