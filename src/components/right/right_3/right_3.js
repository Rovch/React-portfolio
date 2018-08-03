import React, { Component } from 'react'
import "./assets/right_3.css"
export default class Right_3 extends Component {
  render() {

    return (
      <div>
        <svg id="trapRightThree" viewBox="0 0 264.361 789.51">
          <defs>
            <filter id="Path_5" x="0" y="0" width="264.361" height="789.51" filterUnits="userSpaceOnUse">
              <feOffset dx="5" dy="5" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood flood-opacity="0.161" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g class="cls-2-right-3" transform="matrix(1, 0, 0, 1, 0, 0)">
            <path id="Path_5-2" data-name="Path 5" class="cls-1-right-3" d={`M0,${this.props.current1},244,${this.props.current2}.224V793H0Z`} transform="translate(5 -18.49)" />
          </g>
        </svg>

      </div>
    )
  }
}
