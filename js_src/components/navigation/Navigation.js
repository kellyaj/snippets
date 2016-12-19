import React, { Component } from 'react'

class Navigation extends Component {

  showBoardListLabel() {
    return 'Intel Board List'
  }

  newBoardLabel() {
    return this.props.uiData.showNewBoardForm ? 'Cancel New Board' : 'Add New Board'
  }

  cloneBoardLabel() {
    const { showCloneBoardForm } = this.props.uiData
    return showCloneBoardForm ? 'Cancel Clone' : 'Clone Board'
  }

  cloneBoardButton() {
    if(!this.props.selectedBoard) {
      return (
        <div className="navigation-button" onClick={this.props.toggleCloneBoardFormHandler}>
          { this.cloneBoardLabel() }
        </div>
      )
    }
  }

  newBoardButton() {
    if(!this.props.selectedBoard) {
      return (
        <div className="navigation-button" onClick={this.props.toggleNewBoardFormHandler}>
          { this.newBoardLabel() }
        </div>
      )
    }
  }

  boardListButton() {
    return (
      <div className="navigation-button" onClick={this.props.showBoardListHandler}>
        { this.showBoardListLabel() }
      </div>
    )
  }

  showJumpLabel() {
    const { showJumpForm } = this.props.uiData
    return showJumpForm ? 'Hide Jump Form' : 'Show Jump Form'
  }

  jumpToBoardButton() {
    if(!this.props.selectedBoard) {
      return (
        <div className="navigation-button" onClick={this.props.toggleJumpFormHandler}>
          { this.showJumpLabel() }
        </div>
      )
    }
  }

  render() {
    return (
      <div className="navigation-container">
        { this.boardListButton() }
        { this.newBoardButton() }
        { this.cloneBoardButton() }
        { this.jumpToBoardButton() }
      </div>
    )
  }
}

Navigation.propTypes = {
  uiData: React.PropTypes.object.isRequired,
  showBoardListHandler: React.PropTypes.func.isRequired,
  toggleNewBoardFormHandler: React.PropTypes.func.isRequired,
  toggleCloneBoardFormHandler: React.PropTypes.func.isRequired,
  toggleJumpFormHandler: React.PropTypes.func.isRequired,
}

export default Navigation
