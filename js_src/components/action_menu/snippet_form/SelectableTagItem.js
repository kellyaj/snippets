import React, { Component } from 'react';

class SelectableTagItem extends Component {

  handleTagClick(e) {
    const { id } = this.props.tag
    const isChecked = e.target.checked
    return this.props.selectTagItem(id, isChecked)
  }

  render() {
    const { name } = this.props.tag
    return (
      <li className="SnippetTagSelection-list-item" onClick={this.handleTagClick.bind(this)}>
        <input type="checkbox" />
        { name }
      </li>
    );
  }
}

SelectableTagItem.propTypes = {
  tag: React.PropTypes.object.isRequired
}

export default SelectableTagItem
