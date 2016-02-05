// Import React
import React from "react";
import { render } from "react-dom";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import Video from 'react-html5video';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  react: require("../assets/react.png")
};

const videos = {
  brian: require("../assets/brian.mp4")
};

console.log(videos.brian);

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Ben Bayard
            </Heading>
            <Heading size={1} fit caps>
              Intent To Pursue: Solution Architect
            </Heading>
            <Text textColor="white">Technology Enablement</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/myself.example")}
              margin="30px auto"
            />
            <Heading size={1} caps fit textColor="primary" textFont="primary">
              A Brief Summary of my Career.
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" notes={
            `<ul>
              <li>did not last long</li>
              <li>was developing websites there after a few months</li>
              <li>Bleeding edge of mobile.</li>
              <li>Would have been able to say every mobile phone that existed back then.</li>
            </ul>`
          }>
            <Heading>
              Media Cannon
            </Heading>
            <List>
              <ListItem>Hired to do QA</ListItem>
              <ListItem>Soon thereafter was developing websites</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" notes={
            `<ul>
              <li>Moved to SF</li>
              <li>Here I did a lot of data analysis</li>
              <li>Built mobile web sites</li>
              <li>HTML5 Banner Ads</li>
              <li>Rails, oracle SQL. Took existing reporting and automated it.</li>
            </ul>`
          } bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Heading>
              Velti
            </Heading>
            <List textColor="white">
              <ListItem>Aquihired as a Mobile Web Developer.</ListItem>
              <ListItem>Led US Operations</ListItem>
              <ListItem>Built automated reporting system</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]} notes={
            `<ul>
              <li>Developed Websites with more than 5,000,000 visits</li>
              <li>Trained all new hires</li>
              <li>Developed code training to train clients</li>
              <li>Led platform development engineering.</li>
            </ul>`
          } bgImage="),-webkit-linear-gradient(orange 0%, orange 33%, green 33.01%, green 66%, blue 66%">
            <div >
              <Heading textColor="white" style={{
                "-webkit-text-stroke-width": "1px",
                "-webkit-text-stroke-color": "black"
              }}>
                Moovweb
              </Heading>
              <List textColor="white" bold style={{
                "-webkit-text-stroke-width": "1px",
                "-webkit-text-stroke-color": "black"
              }}>
                <ListItem>First Senior Level Position</ListItem>
                <ListItem>Built Websites to scale</ListItem>
              </List>
            </div>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="tertiary">
            <Heading caps fit textColor="primary">
              Finally Ending up at Slalom.
            </Heading>
            <Text caps fit textColor="white">
              A new title for a new job.
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" bgImage={images.react}
            notes={`
              <ul>
                <li>Never had released a production iPhone app</li>
                <li>Released on time!</li>
                <li>Was able to completely revamp the existing app</li>
              </ul>
            `}
          >
            <Heading style={{
              "-webkit-text-stroke-width": "2px",
              "-webkit-text-stroke-color": "black"
            }}>
              Tech I've used here.
            </Heading>
            <Layout>
              <Fill>
                <List textAlign="center" caps bold textColor="white" style={{
                  "-webkit-text-stroke-width": "2px",
                  "-webkit-text-stroke-color": "black",
                  "list-style": "none",
                  "font-size": "3rem"
                }}>
                  <ListItem>React</ListItem>
                  <ListItem>Angular</ListItem>
                  <ListItem>Backbone</ListItem>
                  <ListItem>MongoDB</ListItem>
                  <ListItem>Gulp</ListItem>
                  <ListItem>Grunt</ListItem>
                  <ListItem>Salesforce SDK</ListItem>
                </List>
              </Fill>
              <Fill>
              <List textAlign="center" caps bold textColor="white" style={{
                "-webkit-text-stroke-width": "2px",
                "-webkit-text-stroke-color": "black",
                "list-style": "none",
                "font-size": "3rem"
              }}>
                <ListItem>Swift</ListItem>
                <ListItem>Objective C</ListItem>
                <ListItem>Javascript / ES6</ListItem>
                <ListItem>Java</ListItem>
                <ListItem>Sass</ListItem>
                <ListItem>Stylus</ListItem>
                <ListItem>HTML5, CSS3</ListItem>
              </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              If there was ever a subject matter expert, it would be me.
            </Heading>
            <Appear>
              <Fill>
                <Text bold caps style={{
                  "background": "-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) )",
                  "color":"transparent",
                  "-webkit-background-clip": "text",
                  "background-clip": "text",
                  "font-size": "3.03rem",
                  "display": "inline-block",
                  "-webkit-text-stroke-width": "1px",
                  "-webkit-text-stroke-color": "rgba(0,0,0,.25)"
                }}>
                   but you don't have to take my word for it.
                </Text>
              </Fill>
            </Appear>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <video controls>
              <source src={videos.brian} />
            </video>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}
