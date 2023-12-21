import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "../../src/MyProjects.css";
import StudentDataBase from "../Projects/StudentDataBase";
import OriginalWebSite from "../Projects/OriginalWebsite";
import MachineLearning from "../Projects/MachineLearning";
import CryptoCurrencyPortfolio from "../Projects/CryptoCurrencyPortfolio";

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
      <MachineLearning />
      <OriginalWebSite />
      <StudentDataBase />
      <CryptoCurrencyPortfolio />
    </>
  );
  return standardPanel(componentContent);
};

export default MyProjects;
