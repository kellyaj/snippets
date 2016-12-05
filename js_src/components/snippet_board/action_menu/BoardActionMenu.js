import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SnippetForm from './snippet_form/SnippetForm'
import TagForm from './tag_form/TagForm'

class BoardActionMenu extends Component {

  snippetFormContent() {
    if(this.props.uiData.showAddSnippetForm) {
      return (
        <SnippetForm
          uiData={this.props.uiData}
          addSnippetHandler={this.props.addSnippetHandler}
          addTagToNewSnippet={this.props.addTagToNewSnippet}
          removeTagFromNewSnippet={this.props.removeTagFromNewSnippet}
          toggleSnippetFormHandler={this.props.toggleSnippetFormHandler}
          tags={this.props.tags}
          newSnippet={this.props.newSnippet}
          selectedBoard={this.props.selectedBoard}
          key={"sf"}
        />
      )
    }
  }

  tagFormContent() {
    if(this.props.uiData.showAddTagForm) {
      return (
        <TagForm
          uiData={this.props.uiData}
          addTagHandler={this.props.addTagHandler}
          toggleTagFormHandler={this.props.toggleTagFormHandler}
          selectedBoard={this.props.selectedBoard}
          key={"tf"}
        />
      )
    }
  }

  render() {
    return (
      <div className="board-actions-container">
        <ReactCSSTransitionGroup transitionName="slideMe" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          { this.snippetFormContent() }
          { this.tagFormContent() }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

BoardActionMenu.propTypes = {
  uiData: React.PropTypes.object.isRequired,
  tags: React.PropTypes.object.isRequired,
  newSnippet: React.PropTypes.object.isRequired,
  addTagToNewSnippet: React.PropTypes.func.isRequired,
  removeTagFromNewSnippet: React.PropTypes.func.isRequired,
  addTagHandler: React.PropTypes.func.isRequired,
  selectedBoard: React.PropTypes.object.isRequired,
}

export default BoardActionMenu
