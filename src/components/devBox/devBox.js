import React, { Component } from 'react'
import "./assets/devBox.css"
export default class DevBox extends Component {
  render() {
    return (
      <div style={{ zIndex: 305 }} id="devBox">
        <svg width="100%" height="100%" viewBox="0 0 355 72" version="1.1" id="style1">
          <g onClick={this.props.test}>
            <rect x="8.779" y="8.779" width="168.998" height="53.759" />
            <path d="M177.777,62.537l-168.998,0l0,-53.758l168.998,0l0,53.758Zm-167.998,-52.758l0,51.758l166.998,0l0,-51.758l-166.998,0Z" id="style2" />
            <rect x="176.656" y="9.725" width="169.121" height="51.835" />
            <text x="90.462px" y="45.156px" id="style3" >DEVELOPER</text>
          </g>
          <defs>
            <image id="_Image1" width="185px" height="70px" />
          </defs>
        </svg>
      </div>
    )
  }
}
