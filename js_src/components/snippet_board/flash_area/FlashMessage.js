import React, { Component } from 'react'

class FlashMessage extends Component {
  determineClassNames() {
    const { flashMessageClass } = this.props
    return `flash-message-card ${flashMessageClass}`
  }

  render() {
    const { message } = this.props
    return (
      <div>
        <div className={this.determineClassNames()}>
          {message}
          <i className="fa fa-times close-x" onClick={this.props.removeFlashMessage}></i>
        </div>
    </div>
    )
  }
}

FlashMessage.propTypes = {
  message: React.PropTypes.string.isRequired,
  flashMessageClass: React.PropTypes.string.isRequired,
  removeFlashMessage: React.PropTypes.func.isRequired
}

export default FlashMessage
