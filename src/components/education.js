import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <Grid style={{ margin: "0px" }}>
        <Cell
          col={12}
          style={{ borderLeft: "2px solid #e8cbc0", padding: "1.2em" }}
        >
          <h4 style={{ marginTop: "0px", color: "rgb(241, 229, 224)" }}>
            {this.props.schoolName}
          </h4>
          <h5
            style={{
              padding: "0px",
              margin: "0px",
              //   fontWeight: "bold ",
              fontStyle: "italic"
            }}
          >
            {this.props.schoolDescription}
          </h5>
          <Grid style={{ padding: "0px", margin: "0px" }}>
            <Cell col={6} style={{ padding: "0px", margin: "0px" }}>
              <ul>
                <li style={{ padding: "0.5em", fontSize: "1.3em" }}>
                  {this.props.major1}
                </li>
                <li style={{ padding: "0.5em", fontSize: "1.3em" }}>
                  {this.props.major2}
                </li>
              </ul>
            </Cell>
            <Cell col={6} style={{ padding: "0px", margin: "0px" }}>
              <ul>
                <li style={{ padding: "0.5em", fontSize: "1.3em" }}>
                  Major GPA: {this.props.majorGPA1}
                </li>
                <li style={{ padding: "0.5em", fontSize: "1.3em" }}>
                  Major GPA: {this.props.majorGPA2}
                </li>
              </ul>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
