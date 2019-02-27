import React from "react";
import projects from "../../../data/projects";

import Carousel from "../../../components/carousel";
import Iphone from "../../../components/iphone";
import Macbook from "../../../components/macbook";
import OutboundLink from "../../../components/outbound-link";
import Wrapper from "../../../components/wrapper";
import {
  ProjectDescription,
  ProjectIntro,
  ProjectPage
} from "../../../components/project";

import styles from "./styles.module.css";

const images = {
  desktop: [
    { src: require("./img/1.jpg"), description: "City Atlas (screenshot 1)" },
    { src: require("./img/2.jpg"), description: "City Atlas (screenshot 2)" }
  ],
  mobile: [
    { src: require("./img/1.jpg"), description: "kindyNow centre detail rooms" }
  ]
};

const Cityatlas = ({ location }) => {
  const project = projects.find(p => p.slug === "spacialdb");

  const image = (
    <div className={styles.image}>
      <img src={project.cover || images["desktop"][0]["src"]} alt="Cover" />
    </div>
  );

  const iphone = (
    <Iphone invert>
      <Carousel images={images.mobile} />
    </Iphone>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      {/* <ProjectDescription media={iphone}>
        <h3>Project</h3>
        <p>Responsible for delivering the front end of the web app from designs through to production, I worked closely with the designers, developers and managers of the <OutboundLink to="https://kindynow.com">KindyNow</OutboundLink> team to ensure requirements were met and it that worked seamlessly with the API. I used React and Redux to build the platform.</p>
      </ProjectDescription> */}
      <Wrapper>
        <Macbook>
          <Carousel images={images.desktop} />
        </Macbook>
      </Wrapper>
    </ProjectPage>
  );
};

export default Cityatlas;
