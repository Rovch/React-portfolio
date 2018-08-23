import React, { Component } from 'react';
import './App.css';
import DevBox from "./components/devBox";
import Loading from "./components/loading";
import Home from "./pages/home";
import Main from "./pages/main";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      page: "home",
      x: 0,
      y: 0,
      x_current: 0
    }
    this.handleLoading = this.handleLoading.bind(this);
  }

  handleLoading(data) {
    console.log(data)
    switch (data) {
      case "home":
        this.setState({ page: "home" });

        break;
      case "about":
        this.setState({ page: "about" });
        break;
      case "work":
        this.setState({ page: "work" });
        break;
      case "contact":
        this.setState({ page: "contact" });
        break;
      default:
        this.setState({ page: "home" });
    }

    this.setState(prevState => ({
      loading: !prevState.loading,
    }));

    setTimeout(() => {
      this.setState(prevState => ({
        loading: !prevState.loading,
      }));
    }, 5000)
  }

  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY, x_current: window.innerWidth });
    this.state.x < window.innerWidth / 2 ? this.setState({ cursor: true }) : this.setState({ cursor: false })
  }

  render() {
    const { x, y } = this.state;
    const test = {
      zIndex: "99999",
      pointerEvents: "none",
      borderRadius: "50px",
      borderWidth: "1px",
      borderColor: "white",
      borderStyle: "solid",
      width: "50px",
      height: "50px",
      position: "absolute",
      left: `${this.state.x - 15}px`,
      top: `${this.state.y - 112}px`
    }
    return (
      <div className={`container ${this.state.cursor}`} onMouseMove={this._onMouseMove.bind(this)} >
        <div id="wrapper"  >
          <DevBox test={this.handleClick} />
        </div>

        <Loading status={this.state.loading} />
        <Home />
        <Main handle={this.handleLoading} page={this.state.page} />

        {/* <div style={test}>
        </div> */}
      </div >
    );
  }
}

export default App;
