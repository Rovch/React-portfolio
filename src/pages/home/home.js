import React, { Component } from 'react'
import Arrow from "../../components/arrow_down";
import TextOne from "../../components/textOne";
import PageId from "../../components/page_id";
import LeftCircle from "../../components/left/circle";
import RecOne from "../../components/rec_one";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Arrow />
        <TextOne />
        <PageId />
        <LeftCircle />
        <RecOne />
      </div>
    )
  }
}
