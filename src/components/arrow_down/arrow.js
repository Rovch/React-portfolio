import React, { Component } from 'react'
import "./assets/arrow.css"
export default class Arrow extends Component {
  render() {
    return (
      <div style={{ zIndex: 300 }} class="arrow">
        <svg id="arrow_svg" viewBox="0 0 31.631 97.388">
          <defs>
          </defs>
          <g id="Group_48" data-name="Group 48" transform="translate(-448.185 -498.5)">
            <line id="Line_15" data-name="Line 15" class="cls-1-a" y2="84" transform="translate(463.5 498.5)" />
            <g id="Group_23" data-name="Group 23" transform="translate(5 -9)">
              <line id="Line_16" data-name="Line 16" class="cls-1-a" x2="16" y2="13" transform="translate(443.5 591.5)" />
              <line id="Line_17" data-name="Line 17" class="cls-1-a" x1="16" y2="13" transform="translate(458.5 591.5)" />
            </g>
            <g id="Group_24" data-name="Group 24" transform="translate(11.757 -12.231)">
              <path id="Path_24" data-name="Path 24" class="cls-2-a" d="M0,0,8.9,7.231" transform="translate(443.5 591.5)" />
              <path id="Path_25" data-name="Path 25" class="cls-3-a" d="M8.9,0,0,7.231" transform="translate(451.843 591.5)" />
            </g>
          </g>
        </svg>

      </div>
    )
  }
}
