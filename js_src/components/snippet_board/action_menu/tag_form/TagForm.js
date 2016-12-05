import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class TagForm extends Component {
  determineClassNames() {
    const { addTagFormClass } = this.props.uiData
    return `TagForm-container ${addTagFormClass}`
  }

  submitNewTag() {
    const nameValue = this.refs.tagNameInput.value
    const { id } = this.props.selectedBoard
    const tagData = {
      name: nameValue,
      board_id: id
    }
    this.props.addTagHandler(tagData)
  }

  render() {
    return (
      <div className={this.determineClassNames()}>
        <div className="tag-form-menu">
          <i className="fa fa-trash-o" onClick={this.props.toggleTagFormHandler}></i>
        </div>
        <h2>Add Tag</h2>
        <div className="tag-form-field">
          Name: <input type="text" ref="tagNameInput"></input>
        </div>
        <div onClick={this.submitNewTag.bind(this)} className="action-button">
          Add Tag
        </div>
      </div>
    );
  }
}

TagForm.propTypes = {
  uiData: React.PropTypes.object.isRequired
}

export default TagForm
