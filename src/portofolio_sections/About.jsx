import React from "react";
import styled from "styled-components";
import { Title } from "../components/";
import Rest from "../assets/others/food-and-restaurant.svg";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  details = {
    name: "Mayank Lad",
    occupation: "Student",
    degree: "Bachelor of Engineering - Computer Engineer",
    birth: "6 May 1998",
    city: "Boisar, Maharashtra, India",
    about: "Computer science graduate looking to obtain the position of software developer. I want to work with an organization that can give me ample opportunities to grow so that i will be able to help in the growth of that organization and will be able to enhance my skills and my capabilities.",
    image: `${require("../assets/carousel/IMG_E4417-edited.jpg")}`,
    link: ""
  };

  render() {
    const details = this.details;
    return (
      <div className="mt-2 pt-2">
        <Title title="About Me" icon={Rest} />
        
        <Inner>
            <TileContainer src={details.image} alt={details.title}></TileContainer>
            <Content>
              <Info>{details.about}</Info>
              <br/>
              <Heading>{details.name}</Heading>
              <Desc>{details.occupation}</Desc>
              <br/>
              <Heading>Degree</Heading>
              <Desc>{details.degree}</Desc>
              <br/>
              <Heading>Birthday</Heading>
              <Desc>{details.birth}</Desc>
              <br/>
              <Heading>City</Heading>
              <Desc>{details.city}</Desc>
            </Content>
          </Inner>
      </div>
    );
  }
}

export default About;

//INNER CONTENT
const Inner = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 0 0 2rem;
  transition: all 0.3s;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0 3rem;
    transition: all 0.3s;
  }

  @media (max-width: 580px) {
  }
`;

// IMAGES
const TileContainer = styled.img`
  box-shadow: 0px 0px 40px rgba(0, 0, 10, 0.25);
  overflow: hidden;
  height: 460px;
  width: 340px;
  min-height: 460px;
  min-width: 340px;
  border-radius: 10px;
`;

//  TEXT CONTENT
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 4rem;

  @media (max-width: 992px) {
    margin: 4rem 0 0 0;
  }
`;

const Info = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const Heading = styled.div`
  color: #787785;
  font-size: 17px;
  font-weight: 600;
`;

const Desc = styled.div`
  font-size: 15px;
  color: #787785;
`;
