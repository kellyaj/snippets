import React, { Component } from 'react';
import '../styles/SnippetBoard.css';

import NavHeader from './nav/Header';
import TagList from './tag_list/TagList';
import SnippetList from './snippet_list/SnippetList';
import SnippetForm from './snippet_form/SnippetForm';

class SnippetBoard extends Component {

  toggleSnippetFormHandler() {
  }

  addSnippetHandler() {
  }

  addTagHandler() {
  }

  render() {
    return (
      <div className="SnippetBoard-container">
        <NavHeader
          toggleSnippetFormHandler={this.toggleSnippetFormHandler.bind(this)}
          addTagHandler={this.addTagHandler.bind(this)}
        />
        <SnippetForm
          uiData={this.props.uiData}
          addSnippetHandler={this.addSnippetHandler.bind(this)}
          tags={this.props.tags}
        />
        <TagList
          tags={this.props.tags}
        />
        <SnippetList
          snippets={this.props.snippets}
        />
      </div>
    );
  }
}

SnippetBoard.propTypes = {
  snippets: React.PropTypes.object.isRequired,
  uiData: React.PropTypes.object.isRequired
}

export default SnippetBoard
