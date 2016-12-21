import React, { Component } from 'react';
import FlashArea from '../flash_area/FlashArea'
import BoardActionMenu from '../action_menu/BoardActionMenu'

class NavHeader extends Component {

  addSnippetLabel() {
    return this.props.uiData.showAddSnippetForm ? 'Cancel New Snippet' : 'Add New Snippet'
  }

  addTagLabel() {
    return this.props.uiData.showAddTagForm ? 'Cancel New Tag' : 'Add New Tag'
  }

  boardTitle() {
    const { boardName, boardSlug } = this.props
    return (
      <div className="board-title-container">
        <div className="board-title-name main-title">{ boardName }</div>
        <div className="board-title-slug">{ boardSlug }</div>
      </div>
    )
  }

  render() {
    return (
      <div className="NavHeader-container">
        { this.boardTitle() }
        <FlashArea
          uiData={this.props.uiData}
          removeFlashMessage={this.props.removeFlashMessage}
        />
        <BoardActionMenu
          uiData={this.props.uiData}
          tags={this.props.tags}
          newSnippet={this.props.newSnippet}
          addTagHandler={this.props.addTagHandler}
          toggleTagFormHandler={this.props.toggleTagFormHandler}
          addSnippetHandler={this.props.addSnippetHandler}
          addTagToNewSnippet={this.props.addTagToNewSnippet}
          removeTagFromNewSnippet={this.props.removeTagFromNewSnippet}
          toggleSnippetFormHandler={this.props.toggleSnippetFormHandler}
          selectedBoard={this.props.selectedBoard}
        />
        <div className="navheader-items">
          <div onClick={this.props.toggleSnippetFormHandler} className="NavHeader-button">
            { this.addSnippetLabel() }
          </div>
          <div onClick={this.props.addTagHandler} className="NavHeader-button">
            { this.addTagLabel() }
          </div>
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

