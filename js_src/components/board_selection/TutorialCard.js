import React, { Component } from 'react'

class TutorialCard extends Component {

  render() {
    return (
      <div className="tutorial-card-container">
        <i className="fa fa-times board-close-x" onClick={this.props.toggleShowTutorialHandler}></i>
        <h2>First time here?</h2>
        <div onClick={this.props.displayTutorialHandler} className="action-button">
          View the Tutorial
        </div>
      </div>
    )
  }
}

TutorialCard.propTypes = {
  toggleShowTutorialHandler: React.PropTypes.func.isRequired,
  displayTutorialHandler: React.PropTypes.func.isRequired,
}

export default TutorialCard
