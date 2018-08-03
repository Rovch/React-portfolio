import React, { Component } from 'react';
import './App.css';
import Resume from "./components/resume";
import LeftTri from "./components/left/left_Tri/index.js"
import RightTri from "./components/right/right_Tri/index.js"
import Left1 from "./components/left/left_1"
import Left2 from "./components/left/left_2"
import Left3 from "./components/left/left_3"
import Right1 from "./components/right/right_1";
import Right2 from "./components/right/right_2";
import Right3 from "./components/right/right_3";
import DevBox from "./components/devBox";


class App extends Component {
  constructor() {
    super();

    this.state = {
      current1: 0,
      current2: 122,
      current1_1: 19,
      current2_2: 184,
      left_2_right: 120,
      left_2_left: 70,
      motion: false,
      isToggleOn: true,
      elements: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(props) {
    if (this.state.motion) {
      this.test();
    }

  }

  test() {
    this.left_1_down()
    this.left_1_2_down()
    this.left_3_down()
    this.left_3_2_down()
  }

  left_3_down() {
    let i = setInterval(() => {
      this.setState({
        current1: this.state.current1 + 1
      });
      if (this.state.current1 === 210) {
        clearInterval(i);
        this.left_3_up()
      }
    }, 50);
  }

  left_3_up() {
    let i = setInterval(() => {
      this.setState({
        current1: this.state.current1 - 1
      });
      if (this.state.current1 === 70) {
        clearInterval(i);
        this.left_3_down()
      }
    }, 50);
  }

  left_3_2_down() {
    let i = setInterval(() => {
      this.setState({
        current2: this.state.current2 - 1,
        left_2_right: this.state.left_2_right - 1
      });
      if (this.state.current2 === 102) {
        clearInterval(i);
        this.left_3_2_up()
      }
    }, 115);
  }

  left_3_2_up() {
    let i = setInterval(() => {
      this.setState({
        current2: this.state.current2 + 1,
        left_2_right: this.state.left_2_right + 1
      });
      if (this.state.current2 === 122) {
        clearInterval(i);
        this.left_3_2_down()
      }
    }, 115);
  }


  // -------------- set 2 -------------- //

  left_1_down() {
    let i = setInterval(() => {
      this.setState({
        current1_1: this.state.current1_1 + 1,
        left_2_left: this.state.left_2_left + 1
      });
      if (this.state.current1_1 === 164) {
        clearInterval(i);
        this.left_1_up()
      }
    }, 70);
  }

  left_1_up() {
    let i = setInterval(() => {
      this.setState({
        current1_1: this.state.current1_1 - 1,
        left_2_left: this.state.left_2_left - 1
      });
      if (this.state.current1_1 === 19) {
        clearInterval(i);
        this.left_1_down()
      }
    }, 70);
  }

  left_1_2_down() {
    let i = setInterval(() => {
      this.setState({
        current2_2: this.state.current2_2 - 1
      });
      if (this.state.current2_2 === 18) {
        clearInterval(i);
        this.left_1_2_up()
      }
    }, 115);
  }

  left_1_2_up() {
    let i = setInterval(() => {
      this.setState({
        current2_2: this.state.current2_2 + 1
      });
      if (this.state.current2_2 === 184) {
        clearInterval(i);
        this.left_1_2_down()
      }
    }, 115);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      motion: !prevState.isToggleOn
    }));


    if (!this.state.isToggleOn) {
      let i = setInterval(() => {
        console.log("test")
        this.setState(prevState => ({
          elements: !prevState.isToggleOn
        }));
        clearInterval(i);
      }, 3000);
    }
  }


  render() {
    return (
      <div className="container">
        <div style={{ height: "100px", width: "200px" }}>
          <a-scene>
            <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
            <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
            <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
            <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
            <a-sky color="#ECECEC"></a-sky>
          </a-scene>
        </div>
        <div id="wrapper"  >
          <DevBox test={this.handleClick} />
          <h1 onClick={this.handleClick} class={`resume ${this.state.isToggleOn ? 'viewHide' : 'view'}`} id="view"> VIEW </h1>
          <h1 onClick={this.handleClick} class={`resume ${this.state.isToggleOn ? 'resHide' : 'res'}`} id="resume"> RESUME </h1>
        </div>

        {/* <div>
          <Resume active={this.state.isToggleOn ? 'resActive' : 'resInactive'} elements={this.state.isToggleOn ? 'Active' : 'InActive'} />
        </div> */}

        <Left1 current1={this.state.current1_1} current2={this.state.current2_2} />
        <Left2 current1={this.state.left_2_left} current2={this.state.left_2_right} />
        <Left3 current1={this.state.current1} current2={this.state.current2} />
        <LeftTri />

        <Right1 current1={this.state.current1} current2={this.state.current2} />
        <Right2 current1={this.state.left_2_right} current2={this.state.left_2_left} />
        <Right3 current1={this.state.current1_1} current2={this.state.current2_2} />
        <RightTri />

      </div >
    );
  }
}

export default App;
