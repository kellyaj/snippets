import React, { Component } from 'react'
import NewBoardForm from './NewBoardForm'

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
  render() {
    return (
      <div className="side-content-section-container">
        { this.displayNewBoardForm() }
      </div>
    )
  }
}

export default SideContentSection
