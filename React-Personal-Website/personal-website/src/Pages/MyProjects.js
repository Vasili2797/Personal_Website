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

const MyProjects = () => {
  return (
    <>
      <h1>Hello from My Projects Page</h1>
    </>
  );
};
export default MyProjects;
