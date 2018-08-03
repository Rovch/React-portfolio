import React, { Component } from 'react';
import "./assets/right_1.css";
export default class Right_1 extends Component {

  render() {
    return (
      <div>
        <svg id="trapRightOne" viewBox="0 0 265.399 861.622">
          <defs>
            <filter id="Path_3" x="0" y="0" width="265.399" height="861.622" filterUnits="userSpaceOnUse">
              <feOffset dx="5" dy="5" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood flood-opacity="0.161" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g className="cls-2-right-1" transform="matrix(1, 0, 0, 1, 0, 0)">
            <path id="Path_3-2" data-name="Path 3" className="cls-1-right-1" d={`M0,${this.props.current1},244.176,${this.props.current2},244.361,841H-1.037Z`} transform="translate(6.04 5.62)" />
          </g>
        </svg>

      </div>
    )
  };
};
