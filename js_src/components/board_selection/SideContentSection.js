import React, { Component } from 'react'
import NewBoardForm from './NewBoardForm'
import JumpToBoardForm from './JumpToBoardForm'
import CloneBoardForm from './CloneBoardForm'
import TutorialCard from './TutorialCard'

class SideContentSection extends Component {
  displayNewBoardForm() {
    const { showNewBoardForm } = this.props.uiData
    if(showNewBoardForm) {
      return (
        <NewBoardForm
          createNewBoardHandler={this.props.createNewBoardHandler}
          toggleNewBoardFormHandler={this.props.toggleNewBoardFormHandler}
        />
      )
    }
  }

  displayCloneBoardForm() {
    const { showCloneBoardForm } = this.props.uiData
    if(showCloneBoardForm) {
      return (
        <CloneBoardForm
          cloneBoardHandler={this.props.cloneBoardHandler}
          toggleCloneBoardFormHandler={this.props.toggleCloneBoardFormHandler}
        />
      )
    }
  }

  displayJumpForm() {
    const { showJumpForm } = this.props.uiData
    if(showJumpForm) {
      return (
        <JumpToBoardForm
          jumpToSlugHandler={this.props.jumpToSlugHandler}
          toggleJumpFormHandler={this.props.toggleJumpFormHandler}
        />
      )
    }
  }

  displayTutorialCard() {
    const { showTutorialCard } = this.props.uiData
    if(showTutorialCard) {
      return (
        <TutorialCard
          toggleShowTutorialHandler={this.props.toggleShowTutorialHandler}
          displayTutorialHandler={this.props.displayTutorialHandler}
        />
      )
    }
  }

  render() {
    return (
      <div className="side-content-section-container">
        { this.displayNewBoardForm() }
        { this.displayJumpForm() }
        { this.displayCloneBoardForm() }
        { this.displayTutorialCard() }
      </div>
    )
  }
}

SideContentSection.propTypes = {
  uiData: React.PropTypes.object.isRequired,
  jumpToSlugHandler: React.PropTypes.func.isRequired,
  createNewBoardHandler: React.PropTypes.func.isRequired,
  toggleNewBoardFormHandler: React.PropTypes.func.isRequired,
  toggleJumpFormHandler: React.PropTypes.func.isRequired,
  cloneBoardHandler: React.PropTypes.func.isRequired,
  toggleCloneBoardFormHandler: React.PropTypes.func.isRequired,
}

export default SideContentSection
