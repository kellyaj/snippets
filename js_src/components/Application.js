import React, { Component } from 'react'
import SnippetBoard from './SnippetBoard';

class Application extends Component {

  render() {
    return (
      <div className="app-container">
        <SnippetBoard
          {...this.props}
        />
      </div>
    )
  }
}

export default Application