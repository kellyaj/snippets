import React, { Component } from 'react'

class JumpToBoardForm extends Component {

  jumpToSlug() {
    const slug = this.refs.slugInput.value
    this.props.jumpToSlugHandler(slug)
  }

  render() {
    return (
      <div className="board-by-slug-card-container">
        <i className="fa fa-times board-close-x" onClick={this.props.toggleJumpFormHandler}></i>
        <h2>Jump to Board by Slug</h2>
        <div className="slug-form-field">
          slug: <input type="text" ref="slugInput"></input>
        </div>
        <div onClick={this.jumpToSlug.bind(this)} className="action-button">
          Jump
        </div>
      </div>
    )
  }
}

JumpToBoardForm.propTypes = {
  jumpToSlugHandler: React.PropTypes.func.isRequired,
  toggleJumpFormHandler: React.PropTypes.func.isRequired,
}

export default JumpToBoardForm
