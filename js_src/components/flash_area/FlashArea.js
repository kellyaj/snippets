import React, { Component } from 'react'
import FlashMessage from './FlashMessage'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
          removeFlashMessage={this.props.removeFlashMessage}
          key={"flashmessage"}
        />
      )
    }
  }

  render() {
    return (
      <div className="flash-area">
        <ReactCSSTransitionGroup transitionName="flashFadeOut" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          {this.renderFlashMessages()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

FlashArea.propTypes = {
  uiData: React.PropTypes.object.isRequired,
  removeFlashMessage: React.PropTypes.func.isRequired
}

export default FlashArea
