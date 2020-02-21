import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from './Pagination';
import './style.css'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: 'relative',
    width:"50%",
    margin: "20px 0"
  },
  slide: {
    padding: 15,
    minHeight: 350,
    color: '#fff',
  },
  slide1: {
    background:"url("+require("../../static/images/slider1.jpg")+")"

  },
  slide2: {
    background:"url("+require("../../static/images/slider2.jpg")+")"
  },
  slide3: {
   background:"url("+require("../../static/images/slider3.jpg")+")"
  },
};

class DemoAutoPlay extends React.Component {
  state = {
    index: 0,
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div style={styles.root}>
        <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex} className="sliderslider">
          <div onClick={()=>{this.handelSliderClick(1)}} style={Object.assign({}, styles.slide, styles.slide1)}></div>
          <div onClick={()=>{this.handelSliderClick(3)}} style={Object.assign({}, styles.slide, styles.slide2)}></div>
          <div onClick={()=>{this.handelSliderClick(6)}} style={Object.assign({}, styles.slide, styles.slide3)}></div>
        </AutoPlaySwipeableViews>
        <Pagination dots={3} index={index} onChangeIndex={this.handleChangeIndex} />
      </div>
    );
  }

  handelSliderClick(no){
    this.props.history.push(`/detail/primary/k0/${no}`)
  }
}

export default DemoAutoPlay;