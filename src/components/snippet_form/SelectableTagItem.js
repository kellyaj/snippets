import React, { Component } from 'react';

class SelectableTagItem extends Component {
  render() {
    return (
      <li className="SnippetTagSelection-list-item">
        <input type="checkbox" />
        {this.props.tag.name}
      </li>
    );
  }
}

SelectableTagItem.propTypes = {
  tag: React.PropTypes.object.isRequired
}

export default SelectableTagItem
