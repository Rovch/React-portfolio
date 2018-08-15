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
import Right_circle from "./components/right/circle";
import Left_circle from "./components/left/circle";


class App extends Component {
  constructor() {
    super();

    this.state = {
      current1: 120,
      current2: 242,
      current1_1: 139,
      current2_2: 304,
      left_2_right: 242,
      left_2_left: 186,
      motion: true,
      isToggleOn: true,
      elements: true,
      x: 0,
      y: 0,
      x_current: 0,
      cursor: true
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(props) {
    if (this.state.motion) {
      this.left_1_down()
      this.left_1_2_down()
      this.left_3_down()
      this.left_3_2_down()
    }
  }



  left_3_down() {
    let i = setInterval(() => {
      this.setState({
        current1: this.state.current1 + 1
      });
      if (this.state.current1 === 310) {
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
      if (this.state.current1 === 170) {
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
      if (this.state.current2 === 202) {
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
      if (this.state.current2 === 222) {
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
      if (this.state.current1_1 === 264) {
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
      if (this.state.current1_1 === 119) {
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
      if (this.state.current2_2 === 118) {
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
      if (this.state.current2_2 === 284) {
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

  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY, x_current: window.innerWidth });
    this.state.x < window.innerWidth / 2 ? this.setState({ cursor: true }) : this.setState({ cursor: false })
  }

  render() {
    const { x, y } = this.state;

    const test = {
      borderRadius: "50px",
      borderWidth: "1px",
      borderColor: "pink",
      borderStyle: "solid",
      width: "100px",
      height: "100px",
      position: "absolute",
      left: `${this.state.x - 50}px`,
      top: `${this.state.y - 150}px`
    }
    return (
      <div className={`container ${this.state.cursor}`} onMouseMove={this._onMouseMove.bind(this)} >
        <div style={test}>
        </div>
        <div id="wrapper"  >
          <DevBox test={this.handleClick} />
          <h1 onClick={this.handleClick} class={`resume ${this.state.isToggleOn ? 'viewHide' : 'view'}`} id="view"> VIEW </h1>
          <h1 onClick={this.handleClick} class={`resume ${this.state.isToggleOn ? 'resHide' : 'res'}`} id="resume"> RESUME </h1>
        </div>

        <Right_circle />
        <Left_circle />

        <Right1 current1={this.state.current1} current2={this.state.current2} />
        <Right2 current1={this.state.left_2_right} current2={this.state.left_2_left} />
        <Right3 current1={this.state.current1_1} current2={this.state.current2_2} />
        <RightTri />

      </div >
    );
  }
}

export default App;
