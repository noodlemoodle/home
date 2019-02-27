import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Avatar from "../img/avatar.png";

class Landing extends Component {
  componentDidMount() {
    document.title = "rubyZhang::home";
  }
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={Avatar} alt="avatar" className="avatar-img" />
            <div className="banner-text">
              <h1>Ruby Zhang</h1>
              <h4>Recent Graduate && Aspiring Developer </h4>
              <hr />
              <p>C++ | Java | C | Python | C# | Javascript | HTML/CSS | SQL</p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/rubyqyzhang"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://www.github.com/noodlemoodle"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github-square" aria-hidden="true" />
                </a>
                {/* Leetcode */}
                <a
                  href="https://www.leetcode.com/noodlemoodle"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-code" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
