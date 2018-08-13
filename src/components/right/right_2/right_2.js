import React, { Component } from 'react'
import "./assets/right_2.css"
export default class Right_2 extends Component {
  render() {
    return (
      <div>
        <svg id="trapRightTwo" viewBox="0 0 264.361 789.742">
          <defs>
            <filter id="Path_4" x="0" y="0" width="264.361" height="789.742" filterUnits="userSpaceOnUse">
              <feOffset dx="5" dy="5" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood flood-opacity="0.161" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g class="cls-2-right-2" transform="matrix(1, 0, 0, 1, 0, 0)">
            <path id="Path_4-2" data-name="Path 4" class="cls-1-right-2" d={`M0,${this.props.current1},244,${this.props.current2}.483V839H0Z`} transform="translate(5 -65.26)" />
          </g>
        </svg>

      </div >
    )
  }
}
