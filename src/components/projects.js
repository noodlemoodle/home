import React, { Component } from "react";
import { Tab, Tabs, Grid, Cell } from "react-mdl";

import Bspline from "../img/bspline.png";
import Bus from "../img/bus.png";
import Chess from "../img/chess.png";
import Flashcards from "../img/flashcards.png";
import Mondrian from "../img/mondrian.png";
import Poisson from "../img/poisson.png";
import Prolog from "../img/prolog.png";
import SchoolDBMS from "../img/471proj.png";
import PixelWorld from "../img/589proj.png";
import DNE from "../img/noimage.jpg";
import TypeIo from "../img/513proj.png";

import ProjectCard from "./projectcard";

class Project extends Component {
  componentDidMount() {
    document.title = "rubyZhang::projects";
  }
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <ProjectCard
            backgroundImage={TypeIo}
            cardTitle="Type.io"
            cardText="A team vs. team web-based typing game where players on the team must work together to type out the sentences or words on the screen. The individual letters of the text are pseudo-randomly highlighted to a certain color corresponding to a team member. "
            languages="HTML/CSS/Javascript, Node.js, Socket.io"
          />
          <ProjectCard
            backgroundImage={SchoolDBMS}
            cardTitle="School Database System"
            cardText="A DBMS with an HTML interface and a database system in MySQL. The system allows admins of a school to manage student and teacher records."
            languages="PHP, MySQL, HTML/CSS"
          />
          <ProjectCard
            backgroundImage={DNE}
            cardTitle="Bad Spelling Web Proxy"
            cardText="A web proxy that randomly adds spelling errors to the contents of a web page and highlights them before it is delivered to the browser. "
            languages="C"
          />
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <ProjectCard
            backgroundImage={PixelWorld}
            cardTitle="3D Sketch Based Pixel World"
            cardText="Creation of natural landscapes by using strategically placed cameras to captures the movement of a pen with a special colored-tip."
            languages="C++, OpenGL, Swift"
          />
          <ProjectCard
            backgroundImage={Flashcards}
            cardTitle="Flashcards Application"
            cardText="A flashcard application allowing a student to create decks of flashcards to study from."
            languages="Java, Android Studios"
          />
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          <ProjectCard
            backgroundImage={Mondrian}
            cardTitle="Mondrian Style Art Generator"
            cardText="A program that uses recursion to generate pseudo-random art in a Mondrian style outputted to an HTML document using HTML rectangle primitives."
            languages="Haskell, HTML"
          />
          <ProjectCard
            backgroundImage={Prolog}
            cardTitle="Prolog Course Picker"
            cardText="A Prolog knowledge base that allows the user to use rules to identify all combination of courses that can be used to satisfy the prerequisite for a course or courses needed in order to taken a certain course, as well as a stream of leftover courses needed to satisfy a CPSC degree with a certain concentration."
            languages="Prolog"
          />
          <ProjectCard
            backgroundImage={PixelWorld}
            cardTitle="3D Sketch-Based Pixel World"
            cardText="Creation of natural landscapes by using strategically placed cameras to captures the movement of a pen with a special colored-tip."
            languages="C++, OpenGL, Swift"
          />
          <ProjectCard
            backgroundImage={Bspline}
            cardTitle="B-Spline Wavelets and Their Applications"
            cardText="Study on the B-spline family of wavelets that includes the presentation of B-spline wavelet and scaling functions of lower degrees and some of their characteristics as well as an implementation of the wavelets to be compared to Haar wavelets when used in multiresolution analysis "
            languages="Python"
          />
          <ProjectCard
            backgroundImage={Chess}
            cardTitle="Computer Graphics"
            cardText="A series of computer graphics projects such as interactive B-splines, animated hypocycloids, 3D rendering and image manipulation."
            languages="C++, OpenGL"
          />
          <ProjectCard
            backgroundImage={Poisson}
            cardTitle="Numerical Analysis"
            cardText="A series of implementation of numerical methods using Matlab, such methods for computing bvps, odes, integrals, root-finding, etc."
            languages="Matlab"
          />
          <ProjectCard
            backgroundImage={DNE}
            cardTitle="Tweet Encoder/Decoder"
            cardText="A network-based application that offers tweet encoding (and decoding) with various hashing schemes as a service to users."
            languages="C"
          />
          <ProjectCard
            backgroundImage={DNE}
            cardTitle="Secure File Transfer with Prior Key Agreement"
            cardText="A secure file transfer application using simple client/server socket-based program using the Diffie-Hellman protocol for key agreement and AES-128-CBC encryption with a shared 128-bit session key."
            languages="Java"
          />
          <ProjectCard
            backgroundImage={DNE}
            cardTitle="Interactive B-Spline Modelling"
            cardText="Interactive program to display B-splines of various parameters."
            languages="C++, OpenGL"
          />
          <ProjectCard
            backgroundImage={DNE}
            cardTitle="Interactive Hypocycloids"
            cardText="Interactive program to display hypocycloids of various parameters."
            languages="C++, OpenGL"
          />
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div className="projects-grid">
          <ProjectCard
            backgroundImage={Bus}
            cardTitle="Bus Ticketing Kiosk System"
            cardText="A bus ticket kiosk application that allows users to purchase/pick-up tickets, lookup bus routes with special attention usability and efficiency."
            languages="C#"
          />
        </div>
      );
    } else {
      return (
        <div className="projects-grid">
          <ProjectCard
            backgroundImage={PixelWorld}
            cardTitle="3D Sketch Based Pixel World"
            cardText="Creation of natural landscapes by using strategically placed cameras to captures the movement of a pen with a special colored-tip."
            languages="C++, OpenGL, Swift"
          />
          <ProjectCard
            backgroundImage={Flashcards}
            cardTitle="Flashcards Application"
            cardText="A flashcard application allowing a student to create decks of flashcards to study from."
            languages="Java, Android Studios"
          />
          <ProjectCard
            backgroundImage={Bus}
            cardTitle="Bus Ticketing Kiosk System"
            cardText="A bus ticket kiosk application that allows users to purchase/pick-up tickets, lookup bus routes with special attention usability and efficiency."
            languages="C#"
          />
          <ProjectCard
            backgroundImage={TypeIo}
            cardTitle="Type.io"
            cardText="A team vs. team web-based typing game where players on the team must work together to type out the sentences or words on the screen. The individual letters of the text are pseudo-randomly highlighted to a certain color corresponding to a team member. "
            languages="HTML/CSS/Javascript, Node.js, Socket.io"
          />
          <ProjectCard
            backgroundImage={SchoolDBMS}
            cardTitle="School Database System"
            cardText="A DBMS with an HTML interface and a database system in MySQL. The system allows admins of a school to manage student and teacher records."
            languages="PHP, MySQL, HTML/CSS"
          />
          <ProjectCard
            backgroundImage={Mondrian}
            cardTitle="Mondrian Style Art Generator"
            cardText="A program that uses recursion to generate pseudo-random art in a Mondrian style outputted to an HTML document using HTML rectangle primitives."
            languages="Haskell, HTML"
          />
          <ProjectCard
            backgroundImage={Prolog}
            cardTitle="Prolog Course Picker"
            cardText="A Prolog knowledge base that allows the user to use rules to identify all combination of courses that can be used to satisfy the prerequisite for a course or courses needed in order to taken a certain course, as well as a stream of leftover courses needed to satisfy a CPSC degree with a certain concentration."
            languages="Prolog"
          />
          <ProjectCard
            backgroundImage={Bspline}
            cardTitle="B-Spline Wavelets and Their Applications"
            cardText="Study on the B-spline family of wavelets that includes the presentation of B-spline wavelet and scaling functions of lower degrees and some of their characteristics as well as an implementation of the wavelets to be compared to Haar wavelets when used in multiresolution analysis "
            languages="Python"
          />
          <ProjectCard
            backgroundImage={Chess}
            cardTitle="Computer Graphics"
            cardText="A series of computer graphics projects such as interactive B-splines, animated hypocycloids, 3D rendering and image manipulation."
            languages="C++, OpenGL"
          />
          <ProjectCard
            backgroundImage={Poisson}
            cardTitle="Numerical Analysis"
            cardText="A series of implementation of numerical methods using Matlab, such methods for computing bvps, odes, integrals, root-finding, etc."
            languages="Matlab"
          />
          <ProjectCard
            backgroundImage={DNE}
            cardTitle="Bad Spelling Web Proxy"
            cardText="A web proxy that randomly adds spelling errors to the contents of a web page and highlights them before it is delivered to the browser. "
            languages="C"
          />
          <ProjectCard
            backgroundImage={DNE}
            cardTitle="Tweet Encoder/Decoder"
            cardText="A network-based application that offers tweet encoding (and decoding) with various hashing schemes as a service to users."
            languages="C"
          />
          <ProjectCard
            backgroundImage={DNE}
            cardTitle="Secure File Transfer with Prior Key Agreement"
            cardText="A secure file transfer application using simple client/server socket-based program using the Diffie-Hellman protocol for key agreement and AES-128-CBC encryption with a shared 128-bit session key."
            languages="Java"
          />
          <ProjectCard
            backgroundImage={DNE}
            cardTitle="Interactive B-Spline Modelling"
            cardText="Interactive program to display B-splines of various parameters."
            languages="C++, OpenGL"
          />
          <ProjectCard
            backgroundImage={DNE}
            cardTitle="Interactive Hypocycloids"
            cardText="Interactive program to display hypocycloids of various parameters."
            languages="C++, OpenGL"
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>All</Tab>
          <Tab>Web</Tab>
          <Tab>Mobile</Tab>
          <Tab>Terminal</Tab>
          <Tab>Desktop</Tab>
        </Tabs>
        <Grid className="project-display-grid">
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Project;
