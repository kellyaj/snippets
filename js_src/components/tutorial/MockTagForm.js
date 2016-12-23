import React, { Component } from 'react'

class MockTagForm extends Component {
  render() {
    return (
      <div className="tutorial-card">
        <i className="fa fa-trash-o tutorial-card-header"></i>
        <h2>Add Tag</h2>
        <div className="tag-form-field">
          Name: <input type="text"></input>
        </div>
        <div className="action-button">
          Add Tag
        </div>
      </div>
    )
  }
}

export default MockTagForm
