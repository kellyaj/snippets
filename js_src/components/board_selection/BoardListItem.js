import React, { Component } from 'react'

class BoardListItem extends Component {

  selectBoard() {
    this.props.selectBoardHandler(this.props.board)
  }

  displayLabel() {
    const { name, snippetCount } = this.props.board
    return `${name} (${snippetCount})`
  }

  render() {
    return (
      <div className="board-list-item-container" onClick={this.selectBoard.bind(this)}>
        <div className="board-list-item-name">
          <i className="fa fa-th-list board-list-item-icon"></i>
          { this.displayLabel() }
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
