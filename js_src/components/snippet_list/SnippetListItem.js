import React, { Component } from 'react'
import SnippetCardMenu from './SnippetCardMenu'

class SnippetListItem extends Component {
  render() {
    const {
      id,
      name,
      content,
      locked
    } = this.props.snippet
    return (
      <div className="SnippetList-card">
        <SnippetCardMenu
          snippetId={id}
          isLocked={locked}
          removeSnippetHandler={this.props.removeSnippetHandler}
          lockSnippetHandler={this.props.lockSnippetHandler}
        />
        <div className="SnippetList-card-name">{name}</div>
        <code>{content}</code>
      </div>
    )
  }

}

SnippetListItem.propTypes = {
  snippet: React.PropTypes.object.isRequired,
  removeSnippetHandler: React.PropTypes.func.isRequired,
  lockSnippetHandler: React.PropTypes.func.isRequired
}

export default SnippetListItem
