import React, { Component } from 'react'
import NavHeader from './nav/Header'
import TagList from './tag_list/TagList'
import SnippetList from './snippet_list/SnippetList'
import BoardActionMenu from './action_menu/BoardActionMenu'
import Store from '../../store/Store'
import ActionCreators from '../../actions/ActionCreators'
import '../../styles/app.scss'

class SnippetBoard extends Component {

  componentDidMount() {
    return Store.dispatch(ActionCreators.retrieveSnippets())
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
          uiData={this.props.uiData}
          toggleSnippetFormHandler={this.toggleSnippetFormHandler.bind(this)}
          addTagHandler={this.toggleTagFormHandler.bind(this)}
          removeFlashMessage={this.removeFlashMessage.bind(this)}
        />
        <BoardActionMenu
          uiData={this.props.uiData}
          tags={this.props.tags}
          newSnippet={this.props.newSnippet}
          addTagHandler={this.addTagHandler.bind(this)}
          toggleTagFormHandler={this.toggleTagFormHandler.bind(this)}
          addSnippetHandler={this.addSnippetHandler.bind(this)}
          addTagToNewSnippet={this.addTagToNewSnippetHandler.bind(this)}
          removeTagFromNewSnippet={this.removeTagFromNewSnippetHandler.bind(this)}
          toggleSnippetFormHandler={this.toggleSnippetFormHandler.bind(this)}
        />
        <TagList
          tags={this.props.tags}
          uiData={this.props.uiData}
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
