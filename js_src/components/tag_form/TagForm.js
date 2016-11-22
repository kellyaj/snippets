import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../../styles/TagForm.css'

class TagForm extends Component {

  submitNewTag() {
    const nameValue = this.refs.tagNameInput.value
    const tagData = {
      name: nameValue,
    }
    this.props.addTagHandler(tagData)
  }

  render() {
    return (
      <div className="TagForm-container">
        <h2>Add Tag</h2>
        <div className="">
          Name: <input type="text" ref="tagNameInput"></input>
        </div>
        <div onClick={this.submitNewTag.bind(this)} className="">
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
