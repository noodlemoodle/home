import React, { Component } from "react";
import { Card, CardTitle, CardText } from "react-mdl";

class ProjectCard extends Component {
  render() {
    const backgroundUrl = this.props.backgroundImage;
    return (
      //   <div className="zoom">
      <Card
        className="project-card"
        shadow={5}
        style={{ minWidth: "450", margin: "0.8em" }}
      >
        <CardTitle
          style={{
            color: "white",
            // textShadow:
            //   "-1px -1px 0 gray, 1px -1px 0 gray, -1px 1px 0 gray,1px 1px 0 gray",
            height: "220px",
            // width: "600px",
            background: "url(" + backgroundUrl + ") center / cover"
          }}
        >
          <mark
            style={{
              fontSize: "20px",
              color: "white",
              backgroundColor: "rgb(99, 111, 164, 0.5)"
              //   backgroundColor: "rgb(241, 229, 224, 0.5)"
            }}
          >
            {this.props.cardTitle}
          </mark>
        </CardTitle>
        <CardText>
          {this.props.cardText}
          <br />
          <b>Language(s) Used: </b>
          {this.props.languages}
        </CardText>
        {/* <CardActions border>
          <Button
            href="https://www.linkedin.com/in/rubyqyzhang"
            target="_blank"
            colored
          >
            Github
          </Button>
          <Button
            href="https://www.linkedin.com/in/rubyqyzhang"
            target="_blank"
            colored
          >
            CodePen
          </Button>
          <Button
            href="https://www.linkedin.com/in/rubyqyzhang"
            target="_blank"
            colored
          >
            LiveDemo
          </Button>
        </CardActions> */}
        {/* <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu> */}
      </Card>
      //   </div>
    );
  }
}

export default ProjectCard;
