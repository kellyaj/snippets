import React, { Component } from 'react'

class SnippetCardMenu extends Component {

  removeSnippet() {
    const { snippetId } = this.props
    this.props.removeSnippetHandler(snippetId)
  }

  lockSnippet() {
    const { snippetId, isLocked } = this.props
    this.props.lockSnippetHandler(snippetId, !isLocked)
  }

  lockIcon() {
    const { isLocked } = this.props
    return `fa fa-${isLocked ? "lock" : "unlock-alt"}`
  }

  render() {
    return (
      <div className="SnippetCardMenu-container">
        <ul>
          <li onClick={this.lockSnippet.bind(this)}><i className={this.lockIcon()}></i></li>
          <li onClick={this.removeSnippet.bind(this)}><i className="fa fa-trash-o"></i></li>
        </ul>
      </div>
    )
  }
}

SnippetCardMenu.propTypes = {
  snippetId: React.PropTypes.number.isRequired,
  removeSnippetHandler: React.PropTypes.func.isRequired,
  lockSnippetHandler: React.PropTypes.func.isRequired,
  isLocked: React.PropTypes.bool.isRequired
}

module.exports = SnippetCardMenu
