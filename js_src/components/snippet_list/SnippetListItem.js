import React, { Component } from 'react'

class SnippetListItem extends Component {
  render() {
    const {
      name,
      content
    } = this.props.snippet
    return (
      <div className="SnippetList-card">
        <div className="SnippetList-card-name">{name}</div>
        <code>{content}</code>
      </div>
    )
  }

}

SnippetListItem.propTypes = {
  snippet: React.PropTypes.object.isRequired
}

export default SnippetListItem
