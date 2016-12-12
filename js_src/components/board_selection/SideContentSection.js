import React, { Component } from 'react'
import NewBoardForm from './NewBoardForm'
import BoardBySlugCard from './BoardBySlugCard'
import CloneBoardForm from './CloneBoardForm'

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
    } else {
      return (
        <BoardBySlugCard
          jumpToSlugHandler={this.props.jumpToSlugHandler}
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

  render() {
    return (
      <div className="side-content-section-container">
        { this.displayNewBoardForm() }
        { this.displayCloneBoardForm() }
      </div>
    )
  }
}

SideContentSection.propTypes = {
  uiData: React.PropTypes.object.isRequired,
  jumpToSlugHandler: React.PropTypes.func.isRequired,
  createNewBoardHandler: React.PropTypes.func.isRequired,
  toggleNewBoardFormHandler: React.PropTypes.func.isRequired,
  cloneBoardHandler: React.PropTypes.func.isRequired,
}

export default SideContentSection
