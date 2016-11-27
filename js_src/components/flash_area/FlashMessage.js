import React, { Component } from 'react'

class FlashMessage extends Component {

  determineClassNames() {
    const { flashMessageClass } = this.props
    return `flash-message-card ${flashMessageClass}`
  }

  render() {
    const { message } = this.props
    return (
      <div className={this.determineClassNames()}>
        {message}
      </div>
    )
  }
}

FlashMessage.propTypes = {
  message: React.PropTypes.string.isRequired
}

export default FlashMessage
