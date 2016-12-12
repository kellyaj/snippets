import React, { Component } from 'react'

class BoardBySlugCard extends Component {

  jumpToSlug() {
    const slug = this.refs.slugInput.value
    this.props.jumpToSlugHandler(slug)
  }

  render() {
    return (
      <div className="board-by-slug-card-container">
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

BoardBySlugCard.propTypes = {
  jumpToSlugHandler: React.PropTypes.func.isRequired,
}

export default BoardBySlugCard
