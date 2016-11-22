import React, { Component } from 'react';

class TagListItem extends Component {

  displayOnlyTag() {
    const { id } = this.props.tag
    return this.props.filterByTagId(id)
  }

  listItemClasses() {
    const { id } = this.props.tag
    const { selectedTagId } = this.props.uiData
    return `TagList-list-item ${id === selectedTagId ? "selected-tag" : ""}`
  }

  render() {
    return (
      <li className={this.listItemClasses()} onClick={this.displayOnlyTag.bind(this)}>{this.props.tag.name}</li>
    );
  }
}

TagListItem.propTypes = {
  tag: React.PropTypes.object.isRequired,
  uiData: React.PropTypes.object.isRequired,
  filterByTagId: React.PropTypes.func.isRequired,
}

export default TagListItem
