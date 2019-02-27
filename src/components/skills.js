import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Skills extends Component {
  render() {
    return (
      <Grid style={{ margin: "0px" }}>
        <Cell col={12}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {this.props.skill}&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <p>&nbsp;&nbsp;&nbsp;&nbsp;</p> */}
            {/* <ProgressBar
              style={{ margin: "auto", width: "75%" }}
              progress={this.props.progress}
            /> */}
            <progress
              style={{
                margin: "auto",
                width: "100%",
                borderRadius: "3px"
              }}
              value={this.props.progress}
              max="100"
            />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
