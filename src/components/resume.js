import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Avatar from "../img/avatar.png";
import Education from "./education";
import Skills from "./skills";
import ResumePDF from "../img/resume.pdf";

class Resume extends Component {
  componentDidMount() {
    document.title = "rubyZhang::resume";
  }
  render() {
    return (
      <div>
        <Grid className="resume-grid">
          <Cell
            className="resume-contact-cell"
            col={5}
            style={{ textAlign: "center" }}
          >
            <div style={{ textAlign: "center" }}>
              <img src={Avatar} alt="avatar" style={{ height: "200px" }} />
            </div>
            <h2
              style={{
                paddingTop: "0.5em",
                overflow: "visible"
              }}
            >
              Ruby Zhang
            </h2>
            <h4 style={{ color: "#404d89" }}>
              Bachelor of Science | Programmer
            </h4>
            <hr
              style={{
                borderTop: "3px solid #404D89",
                width: "50%",
                align: "center",
                marginLeft: "25%"
              }}
            />
            <p>
              I am a newly graduated computer science student with double major
              in applied mathematics. I have a strong ability to learn new
              skills quickly and work well in a team setting.
              <br />
              My current goal is to find an entry-level job to further develop
              my skills as a computer scientist
            </p>
            <hr
              style={{
                borderTop: "3px solid #404D89",
                width: "50%",
                align: "center",
                marginLeft: "25%"
              }}
            />
            <h5>Location</h5>
            <p>Toronto, Ontario, CAN</p>
            <h5>Phone</h5>
            <p>1(403)891-3268</p>
            <h5>Email</h5>
            <p>qiyzhang@icloud.com</p>
            <h5>Web</h5>
            <p>https://noodlemoodle.github.io/home</p>
            <hr
              style={{
                borderTop: "3px solid #404D89",
                width: "50%",
                align: "center",
                marginLeft: "25%"
              }}
            />
            <a
              href={ResumePDF}
              rel="noopener noreferrer"
              target="_blank"
              style={{ color: "#404D89", textDecoration: "none" }}
            >
              ☺Download My Resume☺
            </a>
          </Cell>
          <Cell className="resume-right-col" col={7}>
            <h2 style={{ padding: "0.1em", margin: "0px" }}>Education</h2>
            <Education
              startYear={2013}
              endYear={2019}
              schoolName="University of Calgary"
              schoolDescription="Bachelor of Science with Distinction in "
              major1="Computer Science"
              major2="Applied Mathematics"
              majorGPA1="3.7"
              majorGPA2="3.4"
            />
            {/* <hr style={{ borderTop: "3px solid #e8cbc0" }} /> */}
            <h2 style={{ padding: "0.1em", margin: "0px" }}>Skills</h2>
            <Grid
              style={{
                padding: "0px",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <Cell col={6} style={{ padding: "0px" }}>
                <div>
                  <h4
                    style={{
                      margin: "0px",
                      padding: "0px",
                      color: "rgb(241, 229, 224)"
                    }}
                  >
                    Languages
                  </h4>
                  <Skills skill="C++" progress={80} />
                  <Skills skill="Java" progress={60} />
                  <Skills skill="Python" progress={50} />
                  <Skills skill="Javascript" progress={50} />
                  <Skills skill="HTML/CSS" progress={70} />
                  <Skills skill="PHP" progress={30} />
                  <Skills skill="C" progress={60} />
                  <Skills skill="C#" progress={30} />
                </div>
              </Cell>
              <Cell col={6}>
                <div>
                  <h4
                    style={{
                      margin: "0px",
                      padding: "0px",
                      color: "rgb(241, 229, 224)"
                    }}
                  >
                    Platform
                  </h4>
                  <Skills skill="Linux" progress={40} />
                  <br />
                  <h4
                    style={{
                      margin: "0px",
                      padding: "0px",
                      color: "rgb(241, 229, 224)"
                    }}
                  >
                    Databases
                  </h4>
                  <Skills skill="MySQL" progress={60} />
                  <Skills skill="MongoDB" progress={20} />
                  <br />
                  <h4
                    style={{
                      margin: "0px",
                      padding: "0px",
                      color: "rgb(241, 229, 224)"
                    }}
                  >
                    Tools and Frameworks
                  </h4>
                  <Skills skill="Node.js / Express" progress={60} />
                  <Skills skill="Angular / React" progress={30} />
                  <Skills skill="Android Studios" progress={50} />
                </div>
              </Cell>
            </Grid>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
