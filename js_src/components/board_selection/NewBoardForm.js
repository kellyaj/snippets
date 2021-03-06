import React, { Component } from 'react'

class NewBoardForm extends Component {
  submitNewBoard() {
    const nameValue = this.refs.nameInput.value
    const privateValue = this.refs.privateInput.checked
    const boardData = {
      name: nameValue,
      private: privateValue
    }
    this.props.createNewBoardHandler(boardData)
  }

  render() {
    return (
      <div className="new-board-form-container">
        <i className="fa fa-times board-close-x" onClick={this.props.toggleNewBoardFormHandler}></i>
        <div className="new-board-form-title">Add New Board</div>
        <div className="board-form-field">
          Name: <input type="text" ref="nameInput"></input>
        </div>
        <div className="board-form-field">
          Private: <input type="checkbox" ref="privateInput"></input>
        </div>
        <div onClick={this.submitNewBoard.bind(this)} className="action-button">
          Create Board
        </div>
      </div>
    )
  }
}

export default NewBoardForm
