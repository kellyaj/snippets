import React, { Component } from 'react'

class SnippetCardMenu extends Component {

  removeSnippet() {
    const { snippetId } = this.props
    this.props.removeSnippetHandler(snippetId)
  }

  lockSnippet() {
    // this is more of a toggle
    // need to add locked bool to snippet model
    const { snippetId } = this.props
  }

  render() {
    return (
      <div className="SnippetCardMenu-container">
        <ul>
          <li onClick={this.lockSnippet.bind(this)}>L</li>
          <li onClick={this.removeSnippet.bind(this)}>X</li>
        </ul>
      </div>
    )
  }
}

SnippetCardMenu.propTypes = {
  snippetId: React.PropTypes.number.isRequired,
  removeSnippetHandler: React.PropTypes.func.isRequired,
  lockSnippetHandler: React.PropTypes.func.isRequired
}

module.exports = SnippetCardMenu
