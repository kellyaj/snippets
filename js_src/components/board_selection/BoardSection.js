import React, { Component } from 'react';
import BoardList from './BoardList'

class BoardSection extends Component {
  render() {
    return (
      <div className="board-section">
        <BoardList
          boards={this.props.boards}
          listTitle={"Public Boards"}
          selectBoardHandler={this.props.selectBoardHandler}
        />
      </div>
    )
  }
}

export default BoardSection
