import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import Avatar from "../img/avatar.png";

class About extends Component {
  componentDidMount() {
    document.title = "rubyZhang::about";
  }
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell className="contact-cell" col={6}>
            <h2>Ruby Zhang</h2>
            <img
              src={Avatar}
              alt="avatar"
              style={{ height: "200px", paddingBottom: "0.5em" }}
            />
            {/* <hr /> */}
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Allan" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    1(403)891-3268
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "20px",
                      fontFamily: "Allan"
                    }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    qiyzhang@icloud.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Allan" }}
                  >
                    <i className="fab fa-skype" aria-hidden="true" />
                    qiyzhang@icloud.com
                  </ListItemContent>
                </ListItem>

                {/* <ListItem>
                  <ListItemContent
                    style={{ fontSize: "20px", fontFamily: "Allan" }}
                  >
                    <i className="fab fa-discord" aria-hidden="true" />
                    noodlemoodle
                  </ListItemContent>
                </ListItem> */}
              </List>
            </div>
          </Cell>
          <Cell col={6}>
            <h2>About Me</h2>
            <hr />
            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "1em",
                paddingLeft: "1.5em",
                textAlign: "left"
              }}
            >
              I am Ruby, a newly graduated computer scientist with a strong
              background in applied mathematics and statistics.
              <br />
              In 2013, I came to the University of Calgary with the intention of
              completing an Applied Mathematics degree. By chance, I found and
              fell in love with computer science in an introductory course in
              computer science, so I decided to further pursue this passion by
              extending my period of study and completing a second major in
              computer science.
              <br />
              By December of 2018, I will have obtained my BSc. with a double
              major in Computer Science and Applied Mathematics with a
              concentration in scientific computation. my areas of interest in
              the field of computer science includes computer graphics,
              networks, and scientific computing. <br />
              my portfolio include a variety of projects that reflect my
              interests as well as my attempts at learning other various skills
              and topics in computer science and mathematics. This website will
              contain an onging record of my portfolio, resume, and goals. I am
              looking for work or collaboration whereby I can best apply my
              skills.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
