import React, { Component } from 'react'
import SnippetBoard from './snippet_board/SnippetBoard'
import BoardSelection from './board_selection/BoardSelection'
import Navigation from './navigation/Navigation'

class Application extends Component {

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
        />
      )
    }
  }

  render() {
    return (
      <div className="app-container">
        <Navigation
          {...this.props}
        />
        { this.renderPrimaryContent() }
      </div>
    )
  }
}

export default Application
