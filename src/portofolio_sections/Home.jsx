import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";

const Home = () => {
  return (
    <div className="mt-5 pt-3">
      <Col className="mb-5 p-0">
        <Title className="font-title">
          Building Better World One Syntax at a Time
        </Title>
      </Col>
      <P>
        <br/>
        <span style={{ fontStyle: "italic" }}>
          "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning."
        </span>
        <span style={{ fontWeight: "bold" }}> - Albert Einstein</span>
      </P>
    </div>
  );
};

export default Home;

const Title = styled.h1`
  font-size: 95px;
  font-weight: bold;
  background: -webkit-linear-gradient(315deg, #2a2a72 0%, #009ffd 45%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 480px) {
    font-size: 55px;
  }
`;

const P = styled.p`
  text-align: justify;
  font-size: 18px;
`;
