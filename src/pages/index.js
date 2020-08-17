import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Slider from '../components/Slider'
import TextBlock from '../components/TextBlock'
import starWarsLogo from '../assets/images/star-wars-logo.png'
import starWarsBg from '../assets/images/star-wars-bg.png'
import VideoTitle from '../components/VideoTitle'
import BATBCover from '../assets/images/beauty-and-the-beast.png'
import AIWCover from '../assets/images/alice-in-wonderland.png'
import TLKCover from '../assets/images/lion-king.png'
import TI2Cover from '../assets/images/incredibles-2.png'
import UPCover from '../assets/images/up.png'
import VideoBlock from '../components/VideoBlock'
import starWarsVideoBG from '../assets/images/star-wars-trailer.png'
import MultiCol from '../components/MultiCol'
import WDWImg from '../assets/images/walt-disney-world.png'
import disneySketch from '../assets/images/disney-sketch.png'
import frozenImg from '../assets/images/frozen.png'
import mickeyHand from '../assets/images/mickey-hand.png'
import Form from '../components/Form'
import CarsBG from '../assets/images/cars-bg.png'
import DisneyPlusLogo from '../assets/images/disney-plus.png'
import IncrdiblesBG from '../assets/images/incredibles-bg.png'



class HomeIndex extends React.Component {
  componentDidMount () {

    // set variables for scroll
    var scrollpos = window.scrollY;
    var header = document.querySelector(".slick-slider__hero");

    // adding inactive on scroll
    function add_class_on_scroll() {
        header.classList.add("slick-slider__hero--inactive");
    }

    // removing class on scroll
    function remove_class_on_scroll() {
        header.classList.remove("slick-slider__hero--inactive");
    }

    // scroll function
    window.addEventListener('scroll', function(){ 
        scrollpos = window.scrollY;

        // if scroll past 600 add class
        if(scrollpos > 600){
            add_class_on_scroll();
        }
        // remove class
        else {
            remove_class_on_scroll();
        }
    });
  }
    render() {

        return (
          <Layout>
            <Helmet
                title="Disney"
                meta={[
                    { name: 'description', content: 'Disney' }
                ]}
            >
            </Helmet>
            <Slider 
              backgroundImage1={starWarsBg}
              Logo1 = {starWarsLogo}
              Content1 = "Available Now to Rent or Buy"
              ButtonText1 = "Purchase"
              backgroundImage2={CarsBG}
              Logo2 = {DisneyPlusLogo}
              Content2 = "Available Now on Disney+"
              ButtonText2 = "Watch Now"
              backgroundImage3={IncrdiblesBG}
              Logo3 = {DisneyPlusLogo}
              Content3 = "Available Now on Disney+"
              ButtonText3 = "Watch Now"
            />
            <TextBlock
              heading="Covid-19 Update"
              content1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              content2= "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <VideoTitle
              Colour="black"
              Title="New releases this month"
              ButtonText="See All"
              BATBCover={BATBCover}
              BATBTitle="Beauty and the Beast"
              AIWCover={AIWCover}
              AIWTitle="Alice in Wonderland"
              TLKCover={TLKCover}
              TLKTitle="The Lion King"
              TI2Cover={TI2Cover}
              TI2Title="The Incredibles 2"
              UPCover={UPCover}
              UPTitle="Up"
            />
            <VideoTitle
              Colour="orange"
              Title="New releases this month"
              ButtonText="See All"
              BATBCover={BATBCover}
              BATBTitle="Beauty and the Beast"
              AIWCover={AIWCover}
              AIWTitle="Alice in Wonderland"
              TLKCover={TLKCover}
              TLKTitle="The Lion King"
              TI2Cover={TI2Cover}
              TI2Title="The Incredibles 2"
              UPCover={UPCover}
              UPTitle="Up"
            />
            <VideoBlock
              heading="New Star Wars Trailer"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              ButtonText="Read more"
              backgroundImage={starWarsVideoBG}
            />
            <MultiCol
              image1={WDWImg}
              image1alt="Walt Disney World Image"
              image2={disneySketch}
              image2alt="Disney Sketch Image"
              image3={frozenImg}
              image3alt="Disney Frozen Image'"
              image4={mickeyHand}
              image4alt="Disney Mickey Hand Image"
            />
            <Form 
              ButtonText = "Submit"
            />
          </Layout>
        )
    }
}

export default HomeIndex