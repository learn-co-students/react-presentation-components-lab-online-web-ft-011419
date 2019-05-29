import React, { Component } from 'react'

class simpleComponent extends Component {

  state = {
    mood: 'happy'
  }

  handleClick = () => {
    const moodChange = this.state.mood === 'happy' ? 'sad' : 'happy'
    this.setState({ mood: moodChange })
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}

export default simpleComponent
