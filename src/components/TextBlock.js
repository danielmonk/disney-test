import React, { Component } from "react";
import { Grid, Cell } from 'react-foundation';

export default class TextBlock extends Component {
  render() {
    return (
    <section className="text-block">
      <Grid className="grid-container">
        <Grid className="display align-middle align-center">
          <Cell small={12} large={10}>
              <h3>{this.props.heading}</h3>
              <p>{this.props.content1}</p>
              <p>{this.props.content2}</p>
          </Cell>
        </Grid>
        </Grid>
      </section>
    );
  }
}