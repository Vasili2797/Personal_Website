import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "../../src/MyProjects.css";

const standardPanel = (contentVariable) => {
  return (
    <Row>
      <Col xs={0} md={1}></Col>
      <Col className="content-background">{contentVariable}</Col>
      <Col xs={0} md={1}></Col>
    </Row>
  );
};

const MyProjects = () => {
  const componentContent = (
    <>
      <Row className="text-center mt-3">
        <h1>The Following Are Few of My Personal Projects Hosted on GitHub</h1>
      </Row>
      <ProjectOne />
      <OriginalWebSite />
      <StudentDataBase />
    </>
  );
  return standardPanel(componentContent);
};

const StudentDataBase = () => {
  return (
    <>
      <figure>
        <ul>
          <a
            href="https://github.com/Vasili2797/Java_Lessons/tree/main/src/main/com/Projects/StudentDatabaseApplication/src"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="image">
              <img
                src="https://www.shutterstock.com/image-illustration/stack-textbooks-isolated-on-white-600w-83105218.jpg"
                height="300px"
                width="450px"
                style={{ height: "300px", width: "450px" }}
                alt="student course registration image"
              />
              <figcaption>student course registration</figcaption>
              <div class="image__overlay">
                <div class="image__title">FInancial Planning</div>
                <p class="image__description">asdasd</p>
              </div>
            </div>
          </a>
        </ul>
      </figure>
    </>
  );
};

const OriginalWebSite = () => {
  return (
    <>
      <figure>
        <ul>
          <a
            a
            href="https://github.com/Vasili2797/Personal_Website/tree/main/newWebsite"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="image">
              <img
                src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1693321404/catalog/1696537762808541184/ksludrmq15x88tbrckzh.jpg"
                alt="Personal Website"
                height="300px"
                width="450px"
                style={{ height: "300px", width: "450px" }}
              />
              <figcaption>
                personal website
                <a
                  onClick={() => {
                    console.log(
                      "When Clicked, it will send the person to live display"
                    );
                  }}
                  style={{"text-align":"right"}}
                >
                Live
                </a>
              </figcaption>

              <div class="image__overlay">
                <div class="image__title">Personal Website in HTML and CSS</div>
                <p class="image__description">
                  Personal website done only in HTML and CSS
                </p>
              </div>
            </div>
          </a>
        </ul>
      </figure>
    </>
  );
};

const ProjectOne = () => {
  return (
    <>
      <figure>
        <ul>
          <a
            a
            href="https://github.com/Vasili2797/11-Machine-Learning/tree/main/11-Machine-Learning/Instructions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="image">
              <img
                src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="credit risk analysis using algorithms"
                height="300px"
                width="450px"
                style={{ height: "300px", width: "450px" }}
                // style=" min-width: 30px; max-width: 450; height: 300px;"
              />
              <figcaption>machine learning exercise in python</figcaption>

              <div class="image__overlay">
                <div class="image__title">Bricks</div>
                <p class="image__description">Here we are testing this</p>
              </div>
            </div>
          </a>
        </ul>
      </figure>
    </>
  );
};
export default MyProjects;
