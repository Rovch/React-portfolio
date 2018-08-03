import React, { Component } from 'react'
import "./assets/left_1.css"

export default class Left_1 extends Component {
  render() {
    return (
      <div>
        <svg id="trapLeftOne" viewBox="0 0 264.301 789.51">
          <defs>
            <filter id="Path_8" x="0" y="0" width="264.301" height="789.51" filterUnits="userSpaceOnUse">
              <feOffset dx="5" dy="5" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood floodOpacity="0.161" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g class="cls-2-left-1" transform="matrix(1, 0, 0, 1, 0, 0)">
            <path id="Path_8-2" data-name="Path 8" class="cls-1-left-1" d={`M244.3,${this.props.current1},0,${this.props.current2}.224V793H244.3Z`} transform="translate(5 -12.46)" >
            </path>
          </g>
        </svg>
      </div >
    )
  }
};
