import React, { Component } from 'react';
import '../../styles/SnippetForm.css';

import SnippetTagSelection from './SnippetTagSelection';

class SnippetForm extends Component {

  submitNewSnippet() {
    // use refs to pull values from inpts
    this.props.addSnippetHandler();
  }

  render() {
    return (
      <div className="SnippetForm-container">
        <h2>Add Snippet</h2>
        <div className="">
          Description: <input type="text"></input>
        </div>
        <div className="">
          Command: <input type="text"></input>
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
