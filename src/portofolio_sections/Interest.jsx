import React from "react";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import { Title, Lotties } from "../components";
import Ring from "../assets/animations/loader-ring.json";
import Cargo from "../assets/others/cargo-ship.svg";

class Interest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
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
        <Title title="Interests" icon={Cargo}></Title>

        <RepoContainer>
          <CardRepo className="bg-dark text-white">
              <Card.Body>
                <Card.Text>
                  Research
                </Card.Text>
              </Card.Body>
          </CardRepo>
          <CardRepo className="bg-dark text-white">
            <Card.Body>
              <Card.Text>
                Machine Learning
              </Card.Text>
            </Card.Body>
          </CardRepo>
          <CardRepo className="bg-dark text-white">
            <Card.Body>
              <Card.Text>
                Artificial Intelligence
              </Card.Text>
            </Card.Body>
          </CardRepo>
          <CardRepo className="bg-dark text-white">
            <Card.Body>
              <Card.Text>
                Spring
              </Card.Text>
            </Card.Body>
          </CardRepo>
          <CardRepo className="bg-dark text-white">
            <Card.Body>
              <Card.Text>
                Travelling
              </Card.Text>
            </Card.Body>
          </CardRepo>
          <CardRepo className="bg-dark text-white">
            <Card.Body>
              <Card.Text>
                Football
              </Card.Text>
            </Card.Body>
          </CardRepo>
          <CardRepo className="bg-dark text-white">
            <Card.Body>
              <Card.Text>
                Table Tennis
              </Card.Text>
            </Card.Body>
          </CardRepo>
          <CardRepo className="bg-dark text-white">
            <Card.Body>
              <Card.Text>
                Music
              </Card.Text>
            </Card.Body>
          </CardRepo>
        </RepoContainer>
      </div>
    );
  }
}
  
export default Interest;

const RepoContainer = styled(Col)`
  display: flex;
  flex-wrap: wrap;
`;

const CardRepo = styled(Card)`
border: none;
border-radius: 15px !important;
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
margin: 1rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
