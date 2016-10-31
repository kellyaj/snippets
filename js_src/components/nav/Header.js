import React, { Component } from 'react';
import '../../styles/NavHeader.css';

class NavHeader extends Component {

  addSnippetLabel() {
    return this.props.uiData.showAddSnippetForm ? 'Cancel New Snippet' : 'Add New Snippet'
  }

  addTagLabel() {
    return this.props.uiData.showAddTagForm ? 'Cancel New Tag' : 'Add New Tag'
  }

  render() {
    return (
      <div className="NavHeader-container">
        <h1>SnippetBoard</h1>
        <div onClick={this.props.toggleSnippetFormHandler} className="NavHeader-button">
          { this.addSnippetLabel() }
        </div>
        <div onClick={this.props.addTagHandler} className="NavHeader-button">
          { this.addTagLabel() }
        </div>
      </div>
    );
  }
}

NavHeader.propTypes = {
  toggleSnippetFormHandler: React.PropTypes.func.isRequired,
  addTagHandler: React.PropTypes.func.isRequired
}

export default NavHeader

