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





  // const components = {
  //     photo: PhotoStory,
  //     video: VideoStory
  // };

  // function Story(props) {
  //     // Correct! JSX type can be a capitalized variable.
  //     const SpecificStory = components[props.storyType];
  //     return <SpecificStory story={props.story} />;
  // }


  handleLoading(data) {
    switch (data) {
      case "home":
        setTimeout(() => {
          this.setState({ page: "home" });
        }, 2000)
        break;
      case "about":
        setTimeout(() => {
          this.setState({ page: "about" });
        }, 2000)
        break;
      case "work":
        setTimeout(() => {
          this.setState({ page: "work" });
        }, 2000)
        break;
      case "contact":
        setTimeout(() => {
          this.setState({ page: "contact" });
        }, 2000)
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
    let currentPage
    switch (this.state.page) {
      case "home":
        currentPage = <Home />
        break;
      case "about":
        // currentPage = <Main />
        break;
      case "work":
        currentPage = <Home />
        break;
      case "contact":
        currentPage = <Home />
        break;
      default:
        currentPage = <Home />
    }
    return (
      <div className={`container ${this.state.cursor}`} onMouseMove={this._onMouseMove.bind(this)} >
        <div id="wrapper"  >
          <DevBox test={this.handleClick} />
        </div>
        <Main handle={this.handleLoading} page={this.state.page} />
        <Loading status={this.state.loading} />
        {currentPage}
        {/* <div style={test}>
        </div> */}
      </div >
    );
  }
}

export default App;
