import React, { Component } from 'react'
import Store from '../store/Store'
import ActionCreators from '../actions/ActionCreators'
import SnippetBoard from './snippet_board/SnippetBoard'
import BoardSelection from './board_selection/BoardSelection'
import Navigation from './navigation/Navigation'

class Application extends Component {

  componentDidMount() {
    const slug = window.location.pathname.split("/")[1]
    if(slug.length > 0) {
       return Store.dispatch(ActionCreators.displaySlug(slug))
    }
  }

  showBoardList() {
    return Store.dispatch(ActionCreators.showBoardList())
  }

  toggleNewBoardForm() {
    const { showNewBoardForm } = this.props.uiData
    return Store.dispatch(ActionCreators.toggleNewBoardForm(!showNewBoardForm))
  }

  jumpToSlug(slug) {
    return Store.dispatch(ActionCreators.jumpToSlug(slug))
  }

  toggleCloneBoardForm() {
    const { showCloneBoardForm } = this.props.uiData
    return Store.dispatch(ActionCreators.toggleCloneBoardForm(!showCloneBoardForm))
  }

  toggleJumpForm() {
    const { showJumpForm } = this.props.uiData
    return Store.dispatch(ActionCreators.toggleJumpForm(!showJumpForm))
  }

  renderPrimaryContent() {
    const { selectedBoard } = this.props
    if(selectedBoard) {
      return (
        <SnippetBoard
          {...this.props}
        />
      )
    } else {
      return (
        <BoardSelection
          {...this.props}
          toggleNewBoardFormHandler={this.toggleNewBoardForm.bind(this)}
          jumpToSlugHandler={this.jumpToSlug.bind(this)}
          toggleJumpFormHandler={this.toggleJumpForm.bind(this)}
          toggleCloneBoardFormHandler={this.toggleCloneBoardForm.bind(this)}
        />
      )
    }
  }

  render() {
    return (
      <div className="app-container">
        <Navigation
          {...this.props}
          showBoardListHandler={this.showBoardList.bind(this)}
          toggleNewBoardFormHandler={this.toggleNewBoardForm.bind(this)}
          toggleCloneBoardFormHandler={this.toggleCloneBoardForm.bind(this)}
          toggleJumpFormHandler={this.toggleJumpForm.bind(this)}
        />
        { this.renderPrimaryContent() }
      </div>
    )
  }
}

export default Application
