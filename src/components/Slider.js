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
      fade: true
    };
    return (
      <div>
        <Slider {...settings} className="slider slick-slider__hero">
          <div>
                <div className="bg" style={{  backgroundImage: "url(" + this.props.backgroundImage + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}  alt="Star Wars Background"  />
                <img className="logo "src={this.props.Logo} alt="Star Wars Logo" />
                <h2>{this.props.Content} </h2>
                <button className="button large button--round button--outline" type="button">{this.props.ButtonText} </button>
          </div>
          <div>
            <div className="bg" style={{  backgroundImage: "url(" + this.props.backgroundImage + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}  alt="Star Wars Background"  />
                <img className="logo "src={this.props.Logo} alt="Star Wars Logo" />
                <h2>{this.props.Content} </h2>
                <button className="button large button--round button--outline" type="button">{this.props.ButtonText} </button>
          </div>
          <div>
                <div className="bg" style={{  backgroundImage: "url(" + this.props.backgroundImage + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}  alt="Star Wars Background"  />
                <img className="logo "src={this.props.Logo} alt="Star Wars Logo" />
                <h2>{this.props.Content} </h2>
                <button className="button large button--round button--outline" type="button">{this.props.ButtonText} </button>
          </div>
        </Slider>
      </div>
    );
  }
}