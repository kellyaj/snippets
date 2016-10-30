import React, { Component } from 'react';
import _ from 'lodash';
import '../../styles/TagList.css';


import TagListItem from './TagListItem'

class TagList extends Component {
  createTagListItem(tag, idx) {
    return (
      <TagListItem
        key={idx}
        tag={tag}
      />
    );
  }

  buildTagList() {
    const tagListItems = _.map(this.props.tags, this.createTagListItem.bind(this));
    return (
      <ul className="TagList-list">
        {tagListItems}
      </ul>
    );
  }

  render() {
    return (
      <div className="TagList-container">
        {this.buildTagList()}
      </div>
    );
  }
}

TagList.propTypes = {
  tags: React.PropTypes.object.isRequired
}

export default TagList
