import React, { Component } from 'react';

class SnippetListItem extends Component {
  render() {
    // todo: lock item, X icon for delete
    return (
      <div className="SnippetList-card">
        <div className="SnippetList-card-name">{this.props.snippet.name}</div>
        <code>{this.props.snippet.content}</code>
      </div>
    );
  }

}

SnippetListItem.propTypes = {
  snippet: React.PropTypes.object.isRequired
}

export default SnippetListItem
