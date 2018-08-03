import React, { Component } from 'react';
import "./assets/rTriangle.css";

class RightTri extends Component {
  render() {
    return (
      <div className="Right_Main_Div">
        <svg className="Right_child" viewBox="0 0 1000 666" >
          <defs>
            <filter id="Path_2" x="0" y="0" width="1050" height="666" filterUnits="userSpaceOnUse">
              <feOffset dx="5" dy="5" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood flood-opacity="0.161" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
            <filter id="F" x="0" y="100" width="240" height="709" filterUnits="userSpaceOnUse">
              <feOffset dx="5" dy="5" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur-2" />
              <feFlood flood-opacity="0.161" />
              <feComposite operator="in" in2="blur-2" />
              <feComposite in="SourceGraphic" />
            </filter>
            <filter id="RONT-END" x="90" y="500" width="700" height="349" filterUnits="userSpaceOnUse">
              <feOffset dx="5" dy="5" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur-3" />
              <feFlood flood-opacity="0.161" />
              <feComposite operator="in" in2="blur-3" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g id="Group_4" data-name="Group 4" transform="translate(-1040 -666)">
            <g class="cls-5-right" transform="matrix(1, 0, 0, 1, 1000, 666)">
              <path id="Path_2-2" data-name="Path 2" d="M0,0,1000,475.35H0Z" transform="translate(36 191)" />
            </g>
            <g class="cls-4-right" transform="matrix(1, 0, 0, 1, 929, 528)">
              <text id="F-2" data-name="F" class="cls-1-right" transform="translate(79 260)"><tspan x="0" y="572">F</tspan></text>
            </g>
            <g class="cls-3-right" transform="matrix(1, 0, 0, 1, 929, 528)">
              <text id="RONT-END-2" data-name="RONT-END" class="cls-2-right" transform="translate(170 615)"><tspan x="0" y="191">RONT-END</tspan></text>
            </g>
          </g>
        </svg>
      </div >
    );
  };
};

export default RightTri;