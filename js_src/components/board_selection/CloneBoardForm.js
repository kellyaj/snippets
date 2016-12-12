import React, { Component } from 'react'

class CloneBoardForm extends Component {

  cloneBoard() {
    const slug = this.refs.slugInput.value
    this.props.cloneBoardHandler(slug)
  }

  render() {
    return (
      <div className="clone-board-form-container">
        <i className="fa fa-times board-close-x" onClick={this.props.toggleCloneBoardFormHandler}></i>
        <h2>Clone Board by Slug</h2>
        <div className="slug-form-field">
          slug: <input type="text" ref="slugInput"></input>
        </div>
        <div onClick={this.cloneBoard.bind(this)} className="action-button">
          Clone
        </div>
      </div>
    )
  }
}

CloneBoardForm.propTypes = {
  cloneBoardHandler: React.PropTypes.func.isRequired,
  toggleCloneBoardFormHandler: React.PropTypes.func.isRequired,
}

export default CloneBoardForm
