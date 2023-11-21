import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

const standardPanel = (contentVariable) => {
  return (
    <Row>
      <Col xs={0} md={1}></Col>
      <Col className="content-background">{contentVariable}</Col>
      <Col xs={0} md={1}></Col>
    </Row>
  );
};

const Home = () => {
  const componentContent = (
    <>
      <h1>Personal Website of Vasili Nashvilli</h1>
      <p>
        Welcome to my personal website. This is the place where you can see
        different projects I developed. Thank you for visiting!
      </p>
    </>
  );

  return standardPanel(componentContent);
};
export default Home;
