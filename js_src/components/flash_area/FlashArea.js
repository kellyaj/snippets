import React, { Component } from 'react'
import FlashMessage from './FlashMessage'

class FlashArea extends Component {

  renderFlashMessages() {
    const {
      displayFlashMessage,
      flashMessage,
      flashMessageClass
    } = this.props.uiData

    if(displayFlashMessage) {
      return (
        <FlashMessage
          message={flashMessage}
          flashMessageClass={flashMessageClass}
        />
      )
    }
  }

  render() {
    return (
      <div className="flash-area">
        {this.renderFlashMessages()}
      </div>
    )
  }
}

FlashArea.propTypes = {
  uiData: React.PropTypes.object.isRequired
}

export default FlashArea
