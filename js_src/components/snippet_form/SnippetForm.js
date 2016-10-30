import React, { Component } from 'react';
import '../../styles/SnippetForm.css';

import SnippetTagSelection from './SnippetTagSelection';

class SnippetForm extends Component {
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
      </div>
    );
  }
}

SnippetForm.propTypes = {
  uiData: React.PropTypes.object.isRequired,
  tags: React.PropTypes.object.isRequired
}

export default SnippetForm
