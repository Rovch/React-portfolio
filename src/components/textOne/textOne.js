import React, { Component } from 'react'
import "./assets/textOne.css"
export default class Text_one extends Component {
  render() {
    return (
      <div class="textOne" id="welcome">
        <svg id="welcome" viewBox="0 0 392 100">
          <text id="Welcome" class="cls-1-welcome"><tspan x="0" y="75">Welcome</tspan></text>
        </svg>

        <svg id="name" viewBox="0 0 251 102">
          <text id="my_name_is" data-name="my name is" class="cls-1-name" transform="translate(1)"><tspan x="0" y="59">my name is</tspan></text>
        </svg>

        <svg id="wesley" viewBox="0 0 178 107">
          <text id="Wesley" class="cls-1-wesley"><tspan x="0" y="62">Wesley</tspan></text>
        </svg>



      </div>
    )
  }
}
