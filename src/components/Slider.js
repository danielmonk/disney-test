import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      //fade: true
    };
    return (
      <div>
        <Slider {...settings} className="slider slick-slider__hero">
          <div>
                <div className="bg" style={{  backgroundImage: "url(" + this.props.backgroundImage1 + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}  alt="Star Wars Background"  />
                <img className="logo "src={this.props.Logo1} alt="Star Wars Logo" />
                <h2>{this.props.Content1} </h2>
                <button className="button large button--round button--outline" type="button">{this.props.ButtonText1} </button>
          </div>
          <div>
            <div className="bg" style={{  backgroundImage: "url(" + this.props.backgroundImage2 + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}  alt="Star Wars Background"  />
                <img className="logo "src={this.props.Logo2} alt="Star Wars Logo" />
                <h2>{this.props.Content2} </h2>
                <button className="button large button--round button--outline" type="button">{this.props.ButtonText2} </button>
          </div>
          <div>
                <div className="bg" style={{  backgroundImage: "url(" + this.props.backgroundImage3 + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}  alt="Star Wars Background"  />
                <img className="logo "src={this.props.Logo3} alt="Star Wars Logo" />
                <h2>{this.props.Content3} </h2>
                <button className="button large button--round button--outline" type="button">{this.props.ButtonText3} </button>
          </div>
        </Slider>
      </div>
    );
  }
}