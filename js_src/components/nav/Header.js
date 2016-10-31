import React, { Component } from 'react';
import '../../styles/NavHeader.css';

class NavHeader extends Component {
  render() {
    return (
      <div className="NavHeader-container">
        <h1>SnippetBoard</h1>
        <div onClick={this.props.toggleSnippetFormHandler} className="NavHeader-button">
          Add New Snippet
        </div>
        <div onClick={this.props.addTagHandler} className="NavHeader-button">
          Add Tag
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

