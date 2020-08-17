import React, { Component } from "react";
import { Grid, Cell } from 'react-foundation';

export default class Form extends Component {
    componentDidMount () {
        let formField = document.querySelectorAll('input, textarea');

        for (var i = 0; i < formField.length; i++) {
            let formFieldData = formField[i].dataset.placeholder_new;
            formField[i].addEventListener('click', function(event) {
                this.placeholder = formFieldData;
            });
        }
   }
  render() {
    return (
        <form>
            <div className="grid-container align-middle align-center">
                <h2>Contact Us</h2>
                <div className="grid-x grid-padding-x form-fields">
                    <div className="medium-6 cell">
                        <input required type="text" placeholder="Name*" data-placeholder="Name*" data-placeholder_new="Entering Name"/>
                    </div>
                    <div className="medium-6 cell">
                        <input required type="text" placeholder="Surname*" data-placeholder="Surname*" data-placeholder_new="Entering Surname"/>
                    </div>
                    <div className="medium-6 cell">
                        <input required type="text" placeholder="Contact Number*" data-placeholder="Contact Number*" data-placeholder_new="Entering Contact Number"/>
                    </div>
                    <div className="medium-6 cell">
                        <input required type="text" placeholder="Email Address*" data-placeholder="Email Address*" data-placeholder_new="Entering Email Address" />
                    </div>
                    <div className="medium-12 cell">
                        <textarea required type="text" placeholder="Leave your message here*" data-placeholder="Leave your message here*" data-placeholder_new="Entering Message"/>
                    </div>
                </div>
                <button className="button button--round button--black button--video-title" type="button">{this.props.ButtonText}</button>
            </div>
      </form>
    );
  }
}