import FlashArea from '../flash_area/FlashArea'
import React, { Component } from 'react';

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
        <div onClick={this.props.toggleSnippetFormHandler} className="NavHeader-button">
          { this.addSnippetLabel() }
        </div>
        <div onClick={this.props.addTagHandler} className="NavHeader-button">
          { this.addTagLabel() }
        </div>
        <FlashArea
          uiData={this.props.uiData}
          removeFlashMessage={this.props.removeFlashMessage}
        />
      </div>
    );
  }
}

NavHeader.propTypes = {
  toggleSnippetFormHandler: React.PropTypes.func.isRequired,
  addTagHandler: React.PropTypes.func.isRequired
}

export default NavHeader
