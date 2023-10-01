import React, { useState } from "react";
import "./experience.css";
import GreyEagleLogo from "../../assets/greyEagleLogo.jpeg";
import WwtLogo from "../../assets/wwtLogo.png";
import SluLogo from "../../assets/sluLogo.png";

const Experience = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">Experience / Education</h2>
      <span className="section__subtitle"></span>

      <div className="experience__container container grid">
        <div className="experience__content">
          <div>
            <img src={GreyEagleLogo} alt="" className="experience__logo" />
            <h3 className="experience__title">Grey Eagle Distributors</h3>
          </div>

          <span className="experience__button" onClick={() => toggleTab(1)}>
            {" "}
            View More
            <i className="uil uil-arrow-right experience__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "experience__modal active-modal"
                : "experience__modal"
            }
          >
            <div className="experience__modal-content">
              <i
                className="uil uil-times experience__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="experience__modal-title">Merchandiser</h3>
              <p className="experience__modal-description">
                March 2020 - Present
              </p>

              <ul className="experience__modal-experiences grid">
                <li className="experience__modal-experience">
                  <i className="uil uil-check-circle experience__modal-icon"></i>
                  <p className="experience__modal-info">
                    Fostered relationships with key retailers, provided
                    merchandising and sales support at retail accounts, offered
                    exceptional customer service, and responded immediately to
                    special requests in a part-time and seasonal role while
                    attending college.
                  </p>
                </li>

                <li className="experience__modal-experience">
                  <i className="uil uil-check-circle experience__modal-icon"></i>
                  <p className="experience__modal-info">
                    Supported sales and delivery teams by building impactful
                    displays and gaining prime point-of-sale positions to
                    promote the beverage portfolio at grocery and big box stores
                    including Dierbergs, Schnucks, Walmart, and Target in the
                    St. Louis region.
                  </p>
                </li>

                <li className="experience__modal-experience">
                  <i className="uil uil-check-circle experience__modal-icon"></i>
                  <p className="experience__modal-info">
                    Successfully navigated the complexities of the COVID-19
                    pandemic utilizing organization and time management skills.
                  </p>
                </li>

                <li className="experience__modal-experience">
                  <i className="uil uil-check-circle experience__modal-icon"></i>
                  <p className="experience__modal-info">
                    Replenished shelves, rotated stock, and conducted inventory
                    to avoid out-of-stock, contributing to a growth in sales
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experience__content">
          <div>
            <img src={WwtLogo} alt="" className="experience__logo" />
            <h3 className="experience__title">World Wide Technology</h3>
          </div>

          <span className="experience__button" onClick={() => toggleTab(2)}>
            {" "}
            View More
            <i className="uil uil-arrow-right experience__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "experience__modal active-modal"
                : "experience__modal"
            }
          >
            <div className="experience__modal-content">
              <i
                className="uil uil-times experience__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="experience__modal-title">IT Intern</h3>
              <p className="experience__modal-description">
                May 2022 - August 2022
              </p>

              <ul className="experience__modal-experiences grid">
                <li className="experience__modal-experience">
                  <i className="uil uil-check-circle experience__modal-icon"></i>
                  <p className="experience__modal-info">
                    Worked in an environment where agile development was
                    promoted, encouraged, and emphasized; quickly learned
                    Ansible and PowerShell scripts to automate service desk
                    tasks, freeing employees' time to focus on more meaningful
                    work.
                  </p>
                </li>

                <li className="experience__modal-experience">
                  <i className="uil uil-check-circle experience__modal-icon"></i>
                  <p className="experience__modal-info">
                    Reliably and consistently fixed failed automated jobs and
                    other service desk tasks manually.
                  </p>
                </li>

                <li className="experience__modal-experience">
                  <i className="uil uil-check-circle experience__modal-icon"></i>
                  <p className="experience__modal-info">
                    Maintained distribution lists and tracked software licenses
                    for employees located throughout the U.S.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experience__content">
          <div>
            <img src={SluLogo} alt="" className="experience__logo" />
            <h3 className="experience__title">Saint Louis University</h3>
          </div>

          <span className="experience__button" onClick={() => toggleTab(3)}>
            {" "}
            View More
            <i className="uil uil-arrow-right experience__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "experience__modal active-modal"
                : "experience__modal"
            }
          >
            <div className="experience__modal-content">
              <i
                className="uil uil-times experience__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="experience__modal-title">B.S. Computer Science</h3>
              <p className="experience__modal-description">
                January 2020 - May 2023
              </p>

              <ul className="experience__modal-experiences grid">
                <li className="experience__modal-experience">
                  <i className="uil uil-check-circle experience__modal-icon"></i>
                  <p className="experience__modal-info">GPA: 3.51</p>
                </li>

                <li className="experience__modal-experience">
                  <i className="uil uil-check-circle experience__modal-icon"></i>
                  <p className="experience__modal-info">Related Coursework</p>
                </li>
                <ul className="experience__modal-experience-list">
                  <li> - Algorithms </li>
                  <li> - Data Structures </li>
                  <li> - Machine Learning </li>
                  <li> - Software Design </li>
                  <li> - Computer Architecture </li>
                  <li> - Object-Oriented Programming </li>
                  <li> - Computer Networking </li>
                  <li> - Game Programming </li>
                  <li> - Software Engineering </li>
                  <li> - Programming Languages </li>
                  <li> - Operating Systems </li>
                  <li> - Artificial Intelligence </li>
                  <li> - Web Technologies </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
