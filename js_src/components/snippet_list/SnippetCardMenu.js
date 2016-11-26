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

  copySnippet() {
    this.refs.copyField.select()
    document.execCommand('copy')
  }

  render() {
    return (
      <div className="SnippetCardMenu-container">
        <ul>
          <li onClick={this.copySnippet.bind(this)}><i className="fa fa-clipboard"></i></li>
          <li onClick={this.lockSnippet.bind(this)}><i className={this.lockIcon()}></i></li>
          <li onClick={this.removeSnippet.bind(this)}><i className="fa fa-trash-o"></i></li>
        </ul>
        <textarea className="hidden" ref="copyField" defaultValue={this.props.command}></textarea>
      </div>
    )
  }
}

SnippetCardMenu.propTypes = {
  snippetId: React.PropTypes.number.isRequired,
  removeSnippetHandler: React.PropTypes.func.isRequired,
  lockSnippetHandler: React.PropTypes.func.isRequired,
  isLocked: React.PropTypes.bool.isRequired,
  command: React.PropTypes.string.isRequired,
}

module.exports = SnippetCardMenu
