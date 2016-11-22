import React, { Component } from 'react'
import _ from 'lodash'
import '../../styles/SnippetTagSelection.css'

import SelectableTagItem from './SelectableTagItem'

class SnippetTagSelection extends Component {

  selectTagItem(tagId, isChecked) {
    if(isChecked) {
      return this.props.addTagToNewSnippet(tagId)
    } else {
      return this.props.removeTagFromNewSnippet(tagId)
    }
  }

  createTagListItem(tag, idx) {
    return (
      <SelectableTagItem
        key={idx}
        tag={tag}
        selectTagItem={this.selectTagItem.bind(this)}
      />
    );
  }

  buildSelectableTags() {
    const tagListItems = _.map(this.props.tags, this.createTagListItem.bind(this));
    return (
      <ul className="SnippetTagSelection-list">
        {tagListItems}
      </ul>
    );
  }

  render() {
    return (
      <div className="SnippetTagSelection-container">
        {this.buildSelectableTags()}
      </div>
    );
  }
}

SnippetTagSelection.propTypes = {
  tags: React.PropTypes.object.isRequired,
  addTagToNewSnippet: React.PropTypes.func.isRequired,
  removeTagFromNewSnippet: React.PropTypes.func.isRequired,
}

export default SnippetTagSelection
