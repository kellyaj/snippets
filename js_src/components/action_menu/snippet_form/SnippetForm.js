import React, { Component } from 'react'

import SnippetTagSelection from './SnippetTagSelection'

class SnippetForm extends Component {

  submitNewSnippet() {
    const nameValue = this.refs.nameInput.value
    const contentValue = this.refs.contentInput.value
    const tagIds = this.props.newSnippet.tags
    const snippetData = {
      name: nameValue,
      content: contentValue,
      tags: tagIds
    }
    this.props.addSnippetHandler(snippetData)
  }

  determineClassNames() {
    const { addSnippetFormClass } = this.props.uiData
    return `SnippetForm-container ${addSnippetFormClass}`
  }

  render() {
    return (
      <div className={this.determineClassNames()}>
        <div className="snippet-form-menu">
          <i className="fa fa-trash-o" onClick={this.props.toggleSnippetFormHandler}></i>
        </div>
        <h2>Add Snippet</h2>
        <div className="snippet-form-field">
          Description: <input type="text" ref="nameInput"></input>
        </div>
        <div className="snippet-form-field">
          Command: <input type="text" ref="contentInput"></input>
        </div>
        <SnippetTagSelection
          tags={this.props.tags}
          addTagToNewSnippet={this.props.addTagToNewSnippet}
          removeTagFromNewSnippet={this.props.removeTagFromNewSnippet}
        />
        <div onClick={this.submitNewSnippet.bind(this)} className="action-button">
          Add Snippet
        </div>
      </div>
    );
  }
}

SnippetForm.propTypes = {
  uiData: React.PropTypes.object.isRequired,
  tags: React.PropTypes.object.isRequired,
  newSnippet: React.PropTypes.object.isRequired,
}

export default SnippetForm
