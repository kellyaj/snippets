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
          <div className="step-aside">
            Your <span className="app-component-name">OpBoard</span> will help you gather and organize command line instructions, or <span className="app-component-name">Snippets</span>. It will be assigned a unique slug by which it can be observed, edited, and cloned, depending on the privacy settings. It is important to note that in the current build of <span className="small-app-title">sysCommando</span>, anyone who knows or guesses your slug may edit and potentially destroy it.
          </div>
          <div className="tutorial-step">
            <MockTagForm />
            <div className="tutorial-step-text">
              <span className="text-step-number">2:</span> Create one or several <span className="app-component-name">tags</span> to organize your <span className="app-component-name">snippets</span>
            </div>
          </div>
          <div className="step-aside">
            Zero, one, or more <span className="app-component-name">Tags</span> can be applied to a particular <span className="app-component-name">Snippet</span>. You can also filter based on <span className="app-component-name">Tag</span>.
          </div>
          <div className="tutorial-step">
            <MockSnippetForm />
            <div className="tutorial-step-text">
              <span className="text-step-number">3:</span> Add new command line <span className="app-component-name">snippets</span>
            </div>
          </div>
          <div className="step-aside">
            A <span className="app-component-name">Snippet</span> has two fields: a description and the command itself. From the main <span className="app-component-name">OpsBoard</span> view, you may lock, unlock, and delete <span className="app-component-name">snippets</span>. Locked <span className="app-component-name">snippets</span> cannot be deleted until they are unlocked. You can also copy a <span className="app-component-name">snippet</span> to your clipboard by clicking on the <i className="fa fa-clipboard"></i> icon.
          </div>
          <div className="tutorial-step">
            <MockOpForm />
            <div className="tutorial-step-text">
              <span className="text-step-number">4:</span> (In Development) Combine your <span className="app-component-name">snippets</span> into <span className="app-component-name">Operations</span>
            </div>
          </div>
          <div className="step-aside">
            More information on Operations TBD
          </div>
          <div className="tutorial-step">
            <MockOpForm />
            <div className="tutorial-step-text">
              <span className="text-step-number">5:</span> (In Development) Use multiple <span className="app-component-name">Operations</span> to draw up your <span className="app-component-name">BattlePlans</span>
            </div>
          </div>
          <div className="step-aside">
            More information on this TBD
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
