import React, { Component } from 'react';
import '../styles/SnippetBoard.css';

import NavHeader from './nav/Header';
import TagList from './tag_list/TagList';
import SnippetList from './snippet_list/SnippetList';
import SnippetForm from './snippet_form/SnippetForm';

import Store from '../store/Store';
import ActionCreators from '../actions/ActionCreators';

class SnippetBoard extends Component {

  toggleSnippetFormHandler() {
    return Store.dispatch(ActionCreators.toggleSnippetForm(!this.props.uiData.showAddSnippetForm));
  }

  addSnippetHandler() {
  }

  addTagHandler() {
  }

  snippetFormContent() {
    if(this.props.uiData.showAddSnippetForm) {
      return (
        <SnippetForm
          uiData={this.props.uiData}
          addSnippetHandler={this.addSnippetHandler.bind(this)}
          tags={this.props.tags}
        />
      )
    }
  }

  render() {
    return (
      <div className="SnippetBoard-container">
        <NavHeader
          uiData={this.props.uiData}
          toggleSnippetFormHandler={this.toggleSnippetFormHandler.bind(this)}
          addTagHandler={this.addTagHandler.bind(this)}
        />
        { this.snippetFormContent() }
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
