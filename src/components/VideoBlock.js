import React, { Component } from "react";
import { Grid, Cell } from 'react-foundation';
import PlayIcon from '../assets/images/play-icon.png'
import Player from '@vimeo/player';

export default class VideoBlock extends Component {

  componentDidMount () {
      let playToggle = document.querySelectorAll('.video-block__play');
      let inlineImage = document.querySelectorAll('.video-block__image');
      let inlineVideo = document.querySelectorAll('.responsive-embed');

      let showVideoOpacityFunction = function() {
        for (var i = 0; i < inlineImage.length; i++) {
            inlineImage[i].classList.add("hidden-opacity");
        }
      }
      let showVideoFunction = function() {
        for (var i = 0; i < inlineImage.length; i++) {
            inlineImage[i].classList.add("hidden");
        }
        for (var i = 0; i < inlineVideo.length; i++) {
            inlineVideo[i].classList.remove("hidden");
        }
        const player = new Player('vimeo-player', {
            id: 446916837,
            width: 420,
            autoplay: true
        });
        
        player.on('play', function() {
            console.log('played the video!');
        });
      }

      for (var i = 0; i < playToggle.length; i++) {
        playToggle[i].addEventListener('click', function(event) {
            showVideoOpacityFunction();
            setTimeout(() => {
                showVideoFunction();
            }, 500)
        });
    }
  }
  
  render() {
    return (
    <section className="video-block">
      <Grid className="grid-container full">
        <Grid className="display align-middle align-left">
          <Cell small={12} large={6}>
            <div className="video-block__image" style={{  backgroundImage: "url(" + this.props.backgroundImage + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className="video-block__play">
                    <img className="play-logo "src={PlayIcon} alt="Video Play Icon" />
                </div>
            </div>
            <div className="responsive-embed hidden widescreen" id="vimeo-player">
                
            </div>
          </Cell>
          <Cell className="large-offset-1 small-offset-1 video-block__content" small={10} large={4}>
              <h3>{this.props.heading}</h3>
              <p>{this.props.content}</p>
              <button className="button button--round button--black button--video-title" type="button">{this.props.ButtonText}</button>
          </Cell>
        </Grid>
        </Grid>
      </section>
    );
  }
}