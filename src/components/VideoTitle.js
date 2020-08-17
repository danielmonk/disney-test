import React, { Component } from "react";
import Slider from "react-slick";
import { Grid, Cell } from 'react-foundation';
import { Link } from 'gatsby'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      variableWidth: true,
      arrows: false,
      //centerMode: true,
      //centerPadding: 100,
      autoplay: true,
    };
    return (
      <div>
        <section className="video-title" id={this.props.Colour}>
            <div className="video-title__top">
                <Grid className="grid-container align-middle">
                    <Cell small={12} large={6}>
                        <h2>{this.props.Title}</h2>
                    </Cell>
                    <Cell small={12} large={6} className="align-right">
                        <button className="button button--round button--white button--video-title" type="button">{this.props.ButtonText}</button>
                    </Cell>
                </Grid>
            </div>
            <Grid className="grid-container align-middle">
                <Slider {...settings} className="slider slick-slider--video-title">
                <div>
                        <img className="cover "src={this.props.BATBCover} alt="Beauty and the Beast Cover" />
                        <Link to="#"><p>{this.props.BATBTitle} </p></Link>
                </div>
                <div>
                        <img className="cover "src={this.props.AIWCover} alt="Alice in Wonderland Cover" />
                        <Link to="#"><p>{this.props.AIWTitle} </p></Link>
                </div>
                <div>
                        <img className="cover "src={this.props.TLKCover} alt="The Lion King Cover" />
                        <Link to="#"><p>{this.props.TLKTitle} </p></Link>
                </div>
                <div>
                        <img className="cover "src={this.props.TI2Cover} alt="The Incredibles 2 Cover" />
                        <Link to="#"><p>{this.props.TI2Title} </p></Link>
                </div>
                <div>
                        <img className="cover "src={this.props.UPCover} alt="UP Cover" />
                        <Link to="#"><p>{this.props.UPTitle} </p></Link>
                </div>
                </Slider>
            </Grid>
        </section>
      </div>
    );
  }
}