import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import IndexImage from "../Files/image/index_picture.jpg";
import Image from "react-bootstrap/Image";
import About from "./About";

const standardPanel = (contentVariable) => {
  return (
    <Row>
      <Col xs={0} md={1}></Col>
      <Col className="content-background">{contentVariable}</Col>
      <Col xs={0} md={1}></Col>
    </Row>
  );
};

const indexImage = () => {
  <Image src={{ IndexImage }} fluid alt="Index Image" id="indexPageImage" />;
};

const Home = () => {
  const componentContent = (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={12} sm={2} md={3}>
          <img
            align="center"
            src={IndexImage}
            alt="Index Image"
            id="indexPageImage"
          />
        </Col>
      </Row>

      <Row className="text-center mt-3">
        <h1>Welcome to The Personal Website of Vasili Nashvilli</h1>
      </Row>

      <Row className="mt-3">
        <Col>
          <About />
        </Col>
      </Row>
    </>
  );

  return standardPanel(componentContent);
};
export default Home;
