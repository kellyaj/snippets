import React, { Component } from 'react'
import SnippetCardMenu from './SnippetCardMenu'

class SnippetListItem extends Component {

  cardClass() {
    const { size } = this.props.snippet
    return `SnippetList-card ${size}-snippet-card`
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
