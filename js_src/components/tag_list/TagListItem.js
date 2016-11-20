import React, { Component } from 'react';

class TagListItem extends Component {

  displayOnlyTag() {
    const { id } = this.props.tag
    return this.props.filterByTagId(id)
  }

  render() {
    return (
      <li className="TagList-list-item" onClick={this.displayOnlyTag.bind(this)}>{this.props.tag.name}</li>
    );
  }
}

TagListItem.propTypes = {
  tag: React.PropTypes.object.isRequired,
  filterByTagId: React.PropTypes.func.isRequired,
}

export default TagListItem
