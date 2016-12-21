import React, { Component } from 'react'
import NavHeader from './nav/Header'
import TagList from './tag_list/TagList'
import SnippetList from './snippet_list/SnippetList'
import Store from '../../store/Store'
import ActionCreators from '../../actions/ActionCreators'
import '../../styles/app.scss'

class SnippetBoard extends Component {

  componentDidMount() {
    const { id } = this.props.selectedBoard
    return Store.dispatch(ActionCreators.retrieveSnippets(id))
  }

  toggleSnippetFormHandler() {
    return Store.dispatch(ActionCreators.toggleSnippetForm(!this.props.uiData.showAddSnippetForm))
  }

  addSnippetHandler(snippetData) {
    return Store.dispatch(ActionCreators.addNewSnippet(snippetData))
  }

  toggleTagFormHandler() {
    return Store.dispatch(ActionCreators.toggleTagForm(!this.props.uiData.showAddTagForm))
  }

  addTagHandler(tagData) {
    return Store.dispatch(ActionCreators.addNewTag(tagData))
  }

  addTagToNewSnippetHandler(tagId) {
    return Store.dispatch(ActionCreators.addTagToNewSnippet(tagId))
  }

  removeTagFromNewSnippetHandler(tagId) {
    return Store.dispatch(ActionCreators.removeTagFromNewSnippet(tagId))
  }

  removeSnippetHandler(snippetId) {
    return Store.dispatch(ActionCreators.removeSnippet(snippetId))
  }

  lockSnippetHandler(snippetId, shouldLock) {
    return Store.dispatch(ActionCreators.toggleLockSnippet(snippetId, shouldLock))
  }

  removeFlashMessage() {
    return Store.dispatch(ActionCreators.removeFlashMessage())
  }

  render() {
    return (
      <div className="SnippetBoard-container">
        <NavHeader
          { ...this.props }
          addTagHandler={this.addTagHandler.bind(this)}
          addSnippetHandler={this.addSnippetHandler.bind(this)}
          addTagToNewSnippet={this.addTagToNewSnippetHandler.bind(this)}
          removeTagFromNewSnippet={this.removeTagFromNewSnippetHandler.bind(this)}
          toggleSnippetFormHandler={this.toggleSnippetFormHandler.bind(this)}
          toggleTagFormHandler={this.toggleTagFormHandler.bind(this)}
          addTagHandler={this.toggleTagFormHandler.bind(this)}
          removeFlashMessage={this.removeFlashMessage.bind(this)}
          boardName={this.props.selectedBoard.name}
          boardSlug={this.props.selectedBoard.slug}
        />
        <TagList
          tags={this.props.tags}
          uiData={this.props.uiData}
          selectedBoard={this.props.selectedBoard}
        />
        <SnippetList
          snippets={this.props.snippets}
          removeSnippetHandler={this.removeSnippetHandler.bind(this)}
          lockSnippetHandler={this.lockSnippetHandler.bind(this)}
        />
      </div>
    );
  }
}

SnippetBoard.propTypes = {
  snippets: React.PropTypes.object.isRequired,
  uiData: React.PropTypes.object.isRequired,
  tags: React.PropTypes.object.isRequired,
}

export default SnippetBoard
