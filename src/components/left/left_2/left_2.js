import React, { Component } from 'react'
import "./assets/left_2.css"

export default class Left_2 extends Component {
  render() {
    return (
      <div>
        <svg id="trapLeftTwo" viewBox="0 0 264.301 788.742">
          <defs>
            <filter id="Path_7" x="0" y="0" width="264.301" height="788.742" filterUnits="userSpaceOnUse">
              <feOffset dx="5" dy="5" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood flood-opacity="0.161" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g class="cls-2-left-2" transform="matrix(1, 0, 0, 1, 0, 0)">
            <path id="Path_7-2" data-name="Path 7" class="cls-1-left-2" d={`M244,${this.props.current2},0,${this.props.current1}.483V839H244Z`} transform="translate(5 -65.26)" />
          </g>
        </svg>
      </div >
    )
  }
}
