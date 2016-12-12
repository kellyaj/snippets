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

  cloneBoard(slug) {
    return Store.dispatch(ActionCreators.cloneBoard(slug))
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
          toggleNewBoardFormHandler={this.props.toggleNewBoardFormHandler}
          jumpToSlugHandler={this.props.jumpToSlugHandler}
          cloneBoardHandler={this.cloneBoard.bind(this)}
          toggleCloneBoardFormHandler={this.props.toggleCloneBoardFormHandler}
          toggleJumpFormHandler={this.props.toggleJumpFormHandler}
        />
      </div>
    )
  }
}

BoardSelection.propTypes = {
  uiData: React.PropTypes.object.isRequired,
  jumpToSlugHandler: React.PropTypes.func.isRequired,
  toggleNewBoardFormHandler: React.PropTypes.func.isRequired,
  toggleJumpFormHandler: React.PropTypes.func.isRequired,
  toggleCloneBoardFormHandler: React.PropTypes.func.isRequired,
}

export default BoardSelection
