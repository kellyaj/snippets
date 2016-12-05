import React, { Component } from 'react'

class BoardListItem extends Component {

  selectBoard() {
    this.props.selectBoardHandler(this.props.board)
  }

  render() {
    const { name } = this.props.board
    return (
      <div className="board-list-item-container" onClick={this.selectBoard.bind(this)}>
        <div className="board-list-item-name">
          <i className="fa fa-th-list board-list-item-icon"></i>
          { name }
        </div>
      </div>
    )
  }
}

BoardListItem.propTypes = {
  board: React.PropTypes.object.isRequired,
  selectBoardHandler: React.PropTypes.func.isRequired,
}

export default BoardListItem
