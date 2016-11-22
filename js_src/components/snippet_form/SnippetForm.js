import React, { Component } from 'react'
import '../../styles/SnippetForm.css'

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

  render() {
    return (
      <div className="SnippetForm-container">
        <h2>Add Snippet</h2>
        <div className="">
          Description: <input type="text" ref="nameInput"></input>
        </div>
        <div className="">
          Command: <input type="text" ref="contentInput"></input>
        </div>
        <SnippetTagSelection
          tags={this.props.tags}
          addTagToNewSnippet={this.props.addTagToNewSnippet}
          removeTagFromNewSnippet={this.props.removeTagFromNewSnippet}
        />
        <div onClick={this.submitNewSnippet.bind(this)} className="">
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
  addTagToNewSnippet: React.PropTypes.func.isRequired,
  removeTagFromNewSnippet: React.PropTypes.func.isRequired,
}

export default SnippetForm
