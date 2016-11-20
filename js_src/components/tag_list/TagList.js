import React, { Component } from 'react';
import _ from 'lodash';
import Store from '../../store/Store'
import ActionCreators from '../../actions/ActionCreators'
import TagListItem from './TagListItem'
import '../../styles/TagList.css';

class TagList extends Component {

  componentDidMount() {
    return Store.dispatch(ActionCreators.retrieveTags())
  }

  displayAllTags() {
    return Store.displatch(ActionCreators.displayAllTags())
  }

  displayOnlyTag(tagId) {
    return Store.dispatch(ActionCreators.displayOnlyTag(tagId))
  }

  createTagListItem(tag, idx) {
    return (
      <TagListItem
        key={idx}
        tag={tag}
        filterByTagId={this.displayOnlyTag.bind(this)}
      />
    );
  }


  buildTagList() {
    const tagListItems = _.map(this.props.tags, this.createTagListItem.bind(this));
    return (
      <ul className="TagList-list">
        <li className="TagList-list-item" onClick={this.displayAllTags.bind(this)}>All</li>
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
