import React, { Component } from 'react';
import _ from 'lodash';

import SnippetListItem from './SnippetListItem';

class SnippetList extends Component {
  buildListItem(snippet, idx) {
    return (
      <SnippetListItem
        key={idx}
        snippet={snippet}
        removeSnippetHandler={this.props.removeSnippetHandler}
        lockSnippetHandler={this.props.lockSnippetHandler}
      />
    );
  }

  buildSnippetList() {
    const sortedSnippets = _.sortBy(this.props.snippets, ['snippet', 'size'])
    const snippets = _.map(sortedSnippets, this.buildListItem.bind(this));
    return (
      <div>
        { snippets }
      </div>
    );
  }

  render() {
    return (
      <div className="SnippetList-container">
        {this.buildSnippetList()}
      </div>
    );
  }
}

SnippetList.propTypes = {
  snippets: React.PropTypes.object.isRequired,
  removeSnippetHandler: React.PropTypes.func.isRequired,
  lockSnippetHandler: React.PropTypes.func.isRequired
}

export default SnippetList
