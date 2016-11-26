import React, { Component } from 'react'
import SnippetCardMenu from './SnippetCardMenu'

class SnippetListItem extends Component {

  determineCardClass() {
    const { content } = this.props.snippet
    const contentLength = content.length
    if(contentLength < 20) {
      return "small-snippet-card"
    } else if(contentLength < 50) {
      return "medium-snippet-card"
    } else {
      return "large-snippet-card"
    }
  }

  cardClass() {
    return `SnippetList-card ${this.determineCardClass()}`
  }

  render() {
    const {
      id,
      name,
      content,
      locked
    } = this.props.snippet
    return (
      <div className={this.cardClass()}>
        <SnippetCardMenu
          snippetId={id}
          isLocked={locked}
          command={content}
          removeSnippetHandler={this.props.removeSnippetHandler}
          lockSnippetHandler={this.props.lockSnippetHandler}
        />
        <div className="SnippetList-card-name">{name}</div>
        <div className="snippet-card-content">
          <code>{content}</code>
        </div>
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
