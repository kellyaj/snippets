import React, { Component } from 'react'

class Navigation extends Component {

  showBoardListLabel() {
    return 'Board List'
  }

  newBoardLabel() {
    return this.props.uiData.showNewBoardForm ? 'Cancel New Board' : 'Add New Board'
  }

  cloneBoardLabel() {
    return 'Clone Board'
  }

  render() {
    return (
      <div className="navigation-container">
        <div className="navigation-button" onClick={this.props.showBoardListHandler}>
          { this.showBoardListLabel() }
        </div>
        <div className="navigation-button" onClick={this.props.toggleNewBoardFormHandler}>
          { this.newBoardLabel() }
        </div>
        <div className="navigation-button" onClick={() => {}}>
          { this.cloneBoardLabel() }
        </div>
      </div>
    )
  }
}

export default Navigation
