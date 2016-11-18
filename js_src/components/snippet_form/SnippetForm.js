import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../../styles/SnippetForm.css'

import SnippetTagSelection from './SnippetTagSelection'

class SnippetForm extends Component {

  submitNewSnippet() {
    const descValue = ReactDOM.findDOMNode(this.refs.descInput).value
    const contentValue = ReactDOM.findDOMNode(this.refs.contentInput).value
    const snippetData = {
      description: descValue,
      content: contentValue,
    }
    this.props.addSnippetHandler(snippetData)
  }

  render() {
    return (
      <div className="SnippetForm-container">
        <h2>Add Snippet</h2>
        <div className="">
          Description: <input type="text" ref="descInput"></input>
        </div>
        <div className="">
          Command: <input type="text" ref="contentInput"></input>
        </div>
        <SnippetTagSelection
          tags={this.props.tags}
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
  tags: React.PropTypes.object.isRequired
}

export default SnippetForm
