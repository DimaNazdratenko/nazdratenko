import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  tada,
  rollIn,
  rotateInUpRight,
  fadeInLeftBig,
  fadeInRightBig
} from 'react-animations';
import './CV.scss';

const TadaAnimation = styled.div`animation: 1s ${keyframes`${tada}`}`;
const RollInAnimation = styled.div`animation: 1s ${keyframes`${rollIn}`}`;
const RotateInUpRightAnimation = styled.div`animation: 1s ${keyframes`${rotateInUpRight}`}`;
const FadeInLeftBigAnimation = styled.div`animation: 1s ${keyframes`${fadeInLeftBig}`}`;
const FadeInRightBigAnimation = styled.div`animation: 1s ${keyframes`${fadeInRightBig}`}`;

const CV = () => {
  return (
    <div className="cv">
      <a className="btn btn-dark mb-3" href="assets/site/CV_Nazdratenko.pdf" download>Export to Pdf</a>

      <TadaAnimation>
        <h1 className="cv_name">Dmytro Nazdratenko</h1>
      </TadaAnimation>

      <RollInAnimation>
        <div className="cv_separator">Objective</div>
      </RollInAnimation>
      <FadeInLeftBigAnimation>
        <div className="cv_text">Getting experience and the further professional growth in development. Interested in participation in challenging projects.</div>
      </FadeInLeftBigAnimation>

      <RotateInUpRightAnimation>
        <div className="cv_separator">Summary</div>
      </RotateInUpRightAnimation>
      <FadeInRightBigAnimation>
        <div className="cv_text">
          <ul>
            <li>More than <b>5 years</b> experience in IT</li>
            <li>Experience with <b>JavaScript, HTML, CSS</b> and <b>SQL</b></li>
            <li>Experience with frameworks <b>React, AngularJS</b></li>
            <li>Experience with <b>PixiJS, NodeJS</b></li>
            <li>Expirience with database <b>PostgreSQL</b></li>
            <li>Experience with CSS and HTML preprocessors <b>Sass, Less, Stylus, Pug</b></li>
            <li>Experience with build tools <b>Gulp, Webpack</b></li>
            <li>Experience with version control system <b>Git</b></li>
            <li>Experience with <b>AJAX</b> and <b>WebSocket</b></li>
            <li>Experience with <b>DevTools</b> (including performance, memory leaks)</li>
            <li>Knowledge of <b>OOP, BEM</b></li>
            <li>Knowledge and usage of principles <b>SOLID, KISS, DRY, YAGNI</b></li>
            <li>Experience in Automation testing <b>Behat, Mocha, Chai, Protractor, Jasmine, Jest</b></li>
            <li>Good understanding of <b>Page Object</b> pattern</li>
            <li>Experience of working with bug-tracking and test case management systems <b>JIRA, Mantis, TestRail</b></li>
            <li>Understanding of <b>Agile</b> and <b>Waterfall</b> methodologies</li>
          </ul>
        </div>
      </FadeInRightBigAnimation>

      <FadeInLeftBigAnimation>
        <div className="cv_text"><b>Personal qualities:</b>
          <ul>
            <li>Strong analytical skills with a high attention to details</li>
            <li>Ability to work well as part of a team</li>
            <li>Capability of a quick learning and willingness to learn new technologies</li>
            <li>Good communication skills</li>
          </ul>
        </div>
      </FadeInLeftBigAnimation>

      <RollInAnimation>
        <div className="cv_separator">Experience</div>
      </RollInAnimation>
      <FadeInRightBigAnimation>
        <div className="cv_text">
          <ul>
            <li><b>Infozahyst</b> (March 2018 - Present)
              <p><b>Front-End Developer</b></p>
              <p>Development and improvement of current solution using:</p>
              <ul>
                <li>JavaScript (ES6), AngularJS</li>
                <li>HTML5, CSS3, Pug, Stylus</li>
                <li>PixiJS</li>
                <li>NodeJS</li>
                <li>PostgreSQL</li>
              </ul>
            </li>

            <li><b>Lucky-Labs</b> (July 2015 – January 2018)
              <p><b>QA Engineer</b></p>
              <ul>
                <li>Automation testing of Web projects (Behat and Protractor + Cucumber/Jasmine)</li>
                <li>Writing and executing test cases and checklists</li>
                <li>Analyzing of technical documentation</li>
                <li>Bug reporting in bug tracking system</li>
                <li>Taking part in bug fixing (html/css)</li>
              </ul>
            </li>

            <li><b>Ukrtelecom</b> (February 2015 – July 2015)
              <p><b>Business process development specialist for IT department</b></p>
              <ul>
                <li>Preparation of technical documentation</li>
                <li>Analysis, design and implementation of business processes</li>
                <li>Administration of the CRM system:
                  <ul>
                    <li>Establishment of new services</li>
                    <li>Testing of new and existing services (Functional and GUI testing)</li>
                    <li>Program support of existing services</li>
                    <li>Customer Support</li>
                  </ul>
                </li>
              </ul>
            </li>

            <li><b>JTalks (JCommune Project)</b> (September 2014 – July 2015)
              <p><b>Software Test Engineer</b></p>
            </li>
          </ul>
        </div>
      </FadeInRightBigAnimation>

      <RotateInUpRightAnimation>
        <div className="cv_separator">Education</div>
      </RotateInUpRightAnimation>
      <FadeInLeftBigAnimation>
        <div className="cv_text">
          <ul>
            <li>2012-2013 − T. Shevchenko Kyiv National University,
              <p><b>Mechanics and Mathematics Faculty,</b></p>
              <p>specialty <b>"theoretical and applied mechanics, applied mathematics"</b>, full-time   education. Master's degree</p>
            </li>

            <li>2008-2012 − T. Shevchenko Kyiv National University,
              <p><b>Mechanics and Mathematics Faculty,</b></p>
              <p>pecialty <b>"engineer"</b>, full-time education. Bachelor’s degree</p>
            </li>
          </ul>
        </div>
      </FadeInLeftBigAnimation>

      <RollInAnimation>
        <div className="cv_separator">Language skills</div>
      </RollInAnimation>
      <FadeInRightBigAnimation>
        <div className="cv_text">
          <ul>
            <li>Ukrainian − native</li>
            <li>Russian − fluent</li>
            <li>English – intermediate</li>
          </ul>
        </div>
      </FadeInRightBigAnimation>

      <RotateInUpRightAnimation>
        <div className="cv_separator">Hobbies</div>
      </RotateInUpRightAnimation>
      <FadeInLeftBigAnimation>
        <div className="cv_text">
          <ul>
            <li>Tennis</li>
            <li>Swimming</li>
            <li>Technologies</li>
            <li>Computer games</li>
          </ul>
        </div>
      </FadeInLeftBigAnimation>
    </div>
  );
};

export default CV;
