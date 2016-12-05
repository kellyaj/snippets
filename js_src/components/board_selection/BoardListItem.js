import React, { Component } from 'react'

class BoardListItem extends Component {

  selectBoard() {
    const { id } = this.props.board
    this.props.selectBoardHandler(id)
  }

  render() {
    const { name } = this.props.board
    return (
      <div className="board-list-item-container" onClick={this.selectBoard.bind(this)}>
        <div className="board-list-item-name">{ name }</div>
      </div>
    )
  }
}

BoardListItem.propTypes = {
  board: React.PropTypes.object.isRequired,
  selectBoardHandler: React.PropTypes.func.isRequired,
}

export default BoardListItem
