import React, { Component } from 'react'

class Navigation extends Component {

  render() {
    return (
      <div className="navigation-container">
        <div className="navigation-button" onClick={this.props.showBoardListHandler}>Board List</div>
        <div className="navigation-button" onClick={this.props.showNewBoardFormHandler}>New Board</div>
      </div>
    )
  }
}

export default Navigation
