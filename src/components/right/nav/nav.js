import React, { Component } from 'react';
import "./assets/nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="Right_Main_Div" >
        <div class="line_home" onClick={this.props.handle}>
          <svg id="home_svg" viewBox="0 0 138 51">
            <text id="Home" class="cls-1-home"><tspan x="0" y="38">Home</tspan></text>
          </svg>
          <div class={`home_lines_${this.props.status}`} id="line_1" />
          <div class={`home_lines_${this.props.status}`} id="line_2" />
          <div class={`home_lines_${this.props.status}`} id="line_3" />
          <div class={`home_lines_${this.props.status}`} id="line_4" />
        </div>


        <div class="line_about">
          <svg id="about" viewBox="0 0 138 51">
            <text id="About" class="cls-1-about"><tspan x="0" y="38">About</tspan></text>
          </svg>
          <div class="about_lines" id="line_1_about" />
          <div class="about_lines" id="line_2_about" />
          <div class="about_lines" id="line_3_about" />
          <div class="about_lines" id="line_4_about" />
        </div>

        <div class="line_work">
          <svg id="work" viewBox="0 0 138 51">
            <text id="Work" class="cls-1-work"><tspan x="0" y="38">Work</tspan></text>
          </svg>

          <div class="work_lines" id="line_1_work" />
          <div class="work_lines" id="line_2_work" />
          <div class="work_lines" id="line_3_work" />
          <div class="work_lines" id="line_4_work" />
        </div>

        <div class="line_contact">
          <svg id="contact" viewBox="0 0 155 51">
            <text id="Contact" class="cls-1-contact"><tspan x="0" y="38">Contact</tspan></text>
          </svg>

          <div class="contact_lines" id="line_1_contact" />
          <div class="contact_lines" id="line_2_contact" />
          <div class="contact_lines" id="line_3_contact" />
          <div class="contact_lines" id="line_4_contact" />
        </div>




        <svg class="Right_child" viewBox="0 0 1000 250">
          <defs>
            <filter id="Rectangle_21" x="0" y="40" width="1000" height="215" filterUnits="userSpaceOnUse">
              <feOffset dx="3" dy="3" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood flood-opacity="0.161" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </defs>
          <g class="cls-4-nav" transform="matrix(1, 0, 0, 1, 0, 0)">
            <g id="Rectangle_21-2" data-name="Rectangle 21" class="cls-1-nav">
              <rect class="cls-2-nav" x="0.5" y="55" width="999" height="197" />
              <rect class="cls-3-nav" x="0.5" y="55" width="999" height="196" />
            </g>
          </g>
        </svg>
      </ div >
    );
  };
};

export default Nav;