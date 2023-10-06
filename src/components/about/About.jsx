import React from "react";
import "./about.css";
import AboutImg from "../../assets/IMG_2339.jpeg";
import Resume from "../../assets/Tyler Bush Resume.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Hi, I am Tyler Bush, a recent graduate pursuing a position as a
            front-end software developer. Front-end development allows me to
            combine my technical and problem-solving abilities with my creative
            skills to make engaging, user-friendly web applications. I am
            passionate about continually expanding my technical skillset and
            well-being through learning and exercise. I enjoy reading, working
            out, walking my dog, and playing soccer with friends.
          </p>

          <a download="" href={Resume} className="button button--flex">
            Download Resume<i class="uil uil-file-download"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
