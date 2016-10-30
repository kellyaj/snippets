import React, { Component } from 'react';

class TagListItem extends Component {
  render() {
    return (
      <li className="TagList-list-item">{this.props.tag.name}</li>
    );
  }
}

TagListItem.propTypes = {
  tag: React.PropTypes.object.isRequired
}

export default TagListItem
