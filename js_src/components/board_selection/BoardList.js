import React, { Component } from 'react';
import _ from 'lodash';

import BoardListItem from './BoardListItem';

class BoardList extends Component {
  buildListItem(board, idx) {
    return (
      <BoardListItem
        key={idx}
        board={board}
        selectBoardHandler={this.props.selectBoardHandler}
      />
    );
  }

  buildBoardList() {
    const boards = _.map(this.props.boards, this.buildListItem.bind(this));
    return (
      <div>
        { boards }
      </div>
    );
  }

  render() {
    return (
      <div className="board-list-container">
        {this.buildBoardList()}
      </div>
    );
  }
}

BoardList.propTypes = {
  boards: React.PropTypes.object.isRequired,
  selectBoardHandler: React.PropTypes.func.isRequired,
}

export default BoardList
