import React, { Component } from 'react';
import "./assets/lTriangle.css";

class LeftTri extends Component {

  render() {
    return (
      <div className="Left_Main_Div">
        <svg id="Left_Main" viewBox="0 0 1001 666">
          <defs>
            <filter id="Path_1" x="0" y="0" width="1000" height="666" filterUnits="userSpaceOnUse">
              <feOffset dx="5" dy="5" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood flood-opacity="0.161" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
            <filter id="B" x="767" y="300" width="234" height="766" filterUnits="userSpaceOnUse">
              <feOffset dx="5" dy="5" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur-2" />
              <feFlood flood-opacity="0.161" />
              <feComposite operator="in" in2="blur-2" />
              <feComposite in="SourceGraphic" />
            </filter>
            <filter id="ACK-END" x="263" y="600" width="600" height="349" filterUnits="userSpaceOnUse">
              <feOffset dx="2" dy="3" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur-3" />
              <feFlood flood-opacity="0.161" />
              <feComposite operator="in" in2="blur-3" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g id="Group_3" data-name="Group 3" transform="translate(4 -666)">
            <g class="cls-6-left" transform="matrix(1, 0, 0, 1, -4, 666)">
              <path id="Path_1-2" data-name="Path 1" class="cls-1-left" d="M1001,0V475.35H0Z" transform="translate(4 190.65)" />
            </g>
            <g class="cls-5-left" transform="matrix(1, 0, 0, 1, -4, 539)">
              <text id="B-2" data-name="B" class="cls-2-left" transform="matrix(-1, 0, 0, 1, 987, 541)"><tspan x="-42" y="255">B</tspan></text>
            </g>
            <g class="cls-4-left" transform="matrix(1, 0, 0, 1, -4, 539)">
              <text id="ACK-END-2" data-name="ACK-END" class="cls-3-left" transform="matrix(-1, 0, 0, 1, 794, 541)"><tspan x="-42" y="255">ACK-END</tspan></text>
            </g>
          </g>
        </svg>
      </div>
    );
  };
};

export default LeftTri;