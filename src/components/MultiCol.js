import React, { Component } from "react";
import { Grid, Cell } from 'react-foundation';

export default class MultiCol extends Component {
  render() {
    return (
    <section className="multi-col">
      <Grid className="grid-container fluid grid-margin-x align-middle align-center">
        <Cell small={6} large={3} className="image-col">
            <img className="play-logo "src={this.props.image1} alt={this.props.image1Alt} />
        </Cell>
        <Cell small={6} large={3} className="image-col">
            <img className="play-logo "src={this.props.image2} alt={this.props.image2Alt} />
        </Cell>
        <Cell small={6} large={3} className="image-col">
            <img className="play-logo "src={this.props.image3} alt={this.props.image3Alt} />
        </Cell>
        <Cell small={6} large={3} className="image-col">
            <img className="play-logo "src={this.props.image4} alt={this.props.image4Alt} />
        </Cell>
        </Grid>
      </section>
    );
  }
}