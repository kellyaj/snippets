import React, { Component } from 'react';
import BoardList from './BoardList'

class BoardSection extends Component {
  render() {
    return (
      <div className="board-section">
        <BoardList
          boards={this.props.boards}
          listTitle={"Open Intel"}
          selectBoardHandler={this.props.selectBoardHandler}
        />
      </div>
    )
  }
}

export default BoardSection
