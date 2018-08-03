import React, { Component } from 'react'
import "./assets/left_3.css"
export default class Left_3 extends Component {

  render() {
    return (
      <div>
        <svg id="trapLeftThree" viewBox="0 0 264.301 861.622">
          <defs>
            <filter id="Path_6" x="0" y="0" width="264.301" height="861.622" filterUnits="userSpaceOnUse">
              <feOffset dx="5" dy="5" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood flood-opacity="0.161" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g class="cls-2-left-3" transform="matrix(1, 0, 0, 1, 0, 0)">
            <path id="Path_6-2" data-name="Path 6" class="cls-1-left-3" d={`M244.3,${this.props.current1},.144,${this.props.current2},0,841H244.3Z`} transform="translate(5 5.62)" />
          </g>
        </svg>
      </div >
    )
  }
}
