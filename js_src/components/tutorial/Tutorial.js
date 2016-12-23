import React, { Component } from 'react'

import NewBoardForm from '../board_selection/NewBoardForm'
import TagForm from '../snippet_board/action_menu/tag_form/TagForm'
import SnippetForm from '../snippet_board/action_menu/snippet_form/SnippetForm'

import MockTagForm from './MockTagForm'
import MockSnippetForm from './MockSnippetForm'
import MockOpForm from './MockOpForm'

class Tutorial extends Component {

  render() {
    return (
      <div className="tutorial-container">
        <div className="tutorial-header">
          <h2>Welcome to the <span className="app-title">sysCommando</span> Tutorial!</h2>
        </div>
        <div className="tutorial-intro">
          <span className="small-app-title">sysCommando</span> is a tool that allows you to collect and organize various command line snippets. These snippets live on what is called an OpBoard. The OpBoard has other features that allow you to present, share, and manage snippets in various ways.
        </div>
        <div className="tutorial-steps-container">
          <div className="tutorial-step">
            <NewBoardForm
              createNewBoardHandler={() => {}}
              toggleNewBoardFormHandler={() => {}}
            />
            <div className="tutorial-step-text">
              <span className="text-step-number">1:</span> Create a new <span className="app-component-name">OpBoard</span> using the Add New Board form
            </div>
          </div>
          <div className="tutorial-step">
            <MockTagForm />
            <div className="tutorial-step-text">
              <span className="text-step-number">2:</span> Create one or several <span className="app-component-name">tags</span> to organize your <span className="app-component-name">snippets</span>
            </div>
          </div>
          <div className="tutorial-step">
            <MockSnippetForm />
            <div className="tutorial-step-text">
              <span className="text-step-number">3:</span> Add new command line <span className="app-component-name">snippets</span>
            </div>
          </div>
          <div className="tutorial-step">
            <MockOpForm />
            <div className="tutorial-step-text">
              <span className="text-step-number">4:</span> (In Development) Combine your <span className="app-component-name">snippets</span> into <span className="app-component-name">Operations</span>
            </div>
          </div>
          <div className="tutorial-step">
            <MockOpForm />
            <div className="tutorial-step-text">
              <span className="text-step-number">5:</span> (In Development) Use multiple <span className="app-component-name">Operations</span> to draw up your <span className="app-component-name">BattlePlans</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Tutorial.propTypes = {
  hideTutorialHandler: React.PropTypes.func.isRequired,
}

export default Tutorial
