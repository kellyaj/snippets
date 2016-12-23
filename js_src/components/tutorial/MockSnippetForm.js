import React, { Component } from 'react'

class MockSnippetForm extends Component {
  render() {
    return (
      <div className="tutorial-card tutorial-snippet-form">
        <i className="fa fa-trash-o tutorial-card-header"></i>
        <h2>Add Snippet</h2>
        <div className="snippet-form-field">
          Description: <input type="text"></input>
        </div>
        <div className="snippet-form-field bottom-field">
          Command: <input type="text"></input>
        </div>
        <div className="tutorial-tag-card">
          <input type="checkbox"></input>Linux
        </div>
        <div className="tutorial-tag-card">
          <input type="checkbox"></input>webdev
        </div>
        <div className="action-button">
          Add Snippet
        </div>
      </div>
    )
  }
}

export default MockSnippetForm
