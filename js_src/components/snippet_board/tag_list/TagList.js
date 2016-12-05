import React, { Component } from 'react'
import _ from 'lodash';
import Store from '../../../store/Store'
import ActionCreators from '../../../actions/ActionCreators'
import TagListItem from './TagListItem'

class TagList extends Component {

  componentDidMount() {
    const { id } = this.props.selectedBoard
    return Store.dispatch(ActionCreators.retrieveTags(id))
  }

  displayAllTags() {
    Store.dispatch((dispatch) => {
      return dispatch(ActionCreators.displayAllTags()).then(() => {
        return dispatch(ActionCreators.changeSelectedTag(null))
      })
    })
  }

  displayOnlyTag(tagId) {
    Store.dispatch((dispatch) => {
      return dispatch(ActionCreators.displayOnlyTag(tagId)).then(() => {
        return dispatch(ActionCreators.changeSelectedTag(tagId))
      })
    })
  }

  createTagListItem(tag, idx) {
    return (
      <TagListItem
        key={idx}
        tag={tag}
        filterByTagId={this.displayOnlyTag.bind(this)}
        uiData={this.props.uiData}
      />
    )
  }

  allTagsSelected() {
    const { selectedTagId } = this.props.uiData
    return `TagList-list-item ${selectedTagId === null ? "selected-tag" : ""}`
  }

  buildTagList() {
    const tagListItems = _.map(this.props.tags, this.createTagListItem.bind(this));
    return (
      <ul className="TagList-list">
        <li className={this.allTagsSelected()} onClick={this.displayAllTags.bind(this)}>All</li>
        {tagListItems}
      </ul>
    )
  }

  render() {
    return (
      <div className="TagList-container">
        {this.buildTagList()}
      </div>
    )
  }
}

TagList.propTypes = {
  tags: React.PropTypes.object.isRequired,
  uiData: React.PropTypes.object.isRequired,
}

export default TagList
