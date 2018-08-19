import React, { Component } from 'react'
import "./assets/loading.css"
export default class Loading extends Component {
  render() {
    return (
      <div id={`loading_bg_${this.props.status}`}>

        <div class="loading">
          <div class={`loading-text-${this.props.status}`}>
            <span class="loading-text-words">L</span>
            <span class="loading-text-words">O</span>
            <span class="loading-text-words">A</span>
            <span class="loading-text-words">D</span>
            <span class="loading-text-words">I</span>
            <span class="loading-text-words">N</span>
            <span class="loading-text-words">G</span>
          </div>
        </div>

      </div>
    )
  }
}
