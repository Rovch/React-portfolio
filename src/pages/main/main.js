import React, { Component } from 'react'
import RightCircle from "../../components/right/circle";
import Right1 from "../../components/right/right_1";
import Right2 from "../../components/right/right_2";
import Right3 from "../../components/right/right_3";
import Nav from "../../components/right/nav";
export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      current1: 120,
      current2: 242,
      current1_1: 139,
      current2_2: 304,
      left_2_right: 242,
      left_2_left: 186,
    }
  }

  componentDidMount(props) {
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

  render() {
    return (
      <div>
        <RightCircle />
        <Right1 current1={this.state.current1} current2={this.state.current2} />
        <Right2 current1={this.state.left_2_right} current2={this.state.left_2_left} />
        <Right3 current1={this.state.current1_1} current2={this.state.current2_2} />
        <Nav handle={this.props.handle} status={this.props.page} />

      </div>
    )
  }
}
