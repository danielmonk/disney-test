import React, { Component } from "react";
import { Grid, Cell } from 'react-foundation';

export default class Form extends Component {
  render() {
    return (
        <form>
            <div className="grid-container align-middle align-center">
                <h2>Contact Us</h2>
                <div className="grid-x grid-padding-x form-fields">
                    <div className="medium-6 cell">
                        <input required type="text" placeholder="Name*" data-id="/>
                    </div>
                    <div className="medium-6 cell">
                        <input required type="text" placeholder="Surname*" />
                    </div>
                    <div className="medium-6 cell">
                        <input required type="text" placeholder="Contact Number*" />
                    </div>
                    <div className="medium-6 cell">
                        <input required type="text" placeholder="Email Address*" />
                    </div>
                    <div className="medium-12 cell">
                        <textarea required type="text" placeholder="Leave your message here*" />
                    </div>
                </div>
                <button className="button button--round button--black button--video-title" type="button">{this.props.ButtonText}</button>
            </div>
      </form>
    );
  }
}