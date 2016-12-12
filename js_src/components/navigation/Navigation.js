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

  newBoard() {
    if(!this.props.selectedBoard) {
      return (
        <div className="navigation-button" onClick={this.props.toggleNewBoardFormHandler}>
          { this.newBoardLabel() }
        </div>
      )
    }
  }

  render() {
    return (
      <div className="navigation-container">
        <div className="navigation-button" onClick={this.props.showBoardListHandler}>
          { this.showBoardListLabel() }
        </div>
        { this.newBoard() }
        <div className="navigation-button" onClick={this.props.toggleCloneBoardFormHandler}>
          { this.cloneBoardLabel() }
        </div>
      </div>
    )
  }
}

Navigation.propTypes = {
  uiData: React.PropTypes.object.isRequired,
  showBoardListHandler: React.PropTypes.func.isRequired,
  toggleNewBoardFormHandler: React.PropTypes.func.isRequired,
  toggleCloneBoardFormHandler: React.PropTypes.func.isRequired,
}

export default Navigation
