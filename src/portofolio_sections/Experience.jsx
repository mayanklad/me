import React from "react";
import { Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import { Title, Lotties } from "../components";
import Ring from "../assets/animations/loader-ring.json";
import Cargo from "../assets/others/cargo-ship.svg";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      // reposistoryData: [],
    };
  }

  render() {
    return this.state.loading === true ? (
      <Lotties
        animationData={Ring}
        lh="5vw"
        lw="5vw"
        mh="10vw"
        mw="10vw"
      ></Lotties>
    ) : (
      <div className="mt-2 pt-2">
        <Title title="Professional Experience" icon={Cargo}></Title>

        <RepoContainer>
          <CardRepo className="bg-dark text-white">
            <Info>
              <Card.Header>
                Internship Trainee
                <Subtitle>June 2019</Subtitle>
              </Card.Header>
              <Card.Body>
                <Card.Title>Nuclear Power Corporation of India Limited</Card.Title>
                <Card.Text className="mt-5">
                Worked on a web application project for Complaint Management System using C# and .NET Framework.
                </Card.Text>
              </Card.Body>
            </Info>
          </CardRepo>
        </RepoContainer>
      </div>
    );
  }
}
  
export default Experience;

const RepoContainer = styled(Col)``;

const CardRepo = styled(Card)`
  border: none;
  border-radius: 5px !important;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  margin: 1rem;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const RepoTitle = styled(Card.Text)``;

const CardOverlay = styled(Card.ImgOverlay)`
  margin: 0;
  padding: 8px;
`;
const Group = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Subtitle = styled.div`
  color: rgb(175, 175, 200);
`;
