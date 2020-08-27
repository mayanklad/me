import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import Sample from "../assets/pictures/cert_frame.jpg";

class Cert extends React.Component {
  render() {
    const { name, credential_url } = this.props.repoData;
    return (
      <CardCert style={{ width: "15rem" }} className="bg-dark text-white">
        <Card.Img src={Sample} alt="Card image" />
        <a
          style={{color: "#73737d", fontWeight: 600 }}
          href={credential_url}
          rel="noopener noreferrer"
          target="_blank"
          className="mr-2"
        >
          <CardOverlay>
            <CertTitle align="center">{name}</CertTitle>
          </CardOverlay>
        </a>
      </CardCert>
    );
  }
}

export default Cert;

const CardCert = styled(Card)`
  border: none;
  border-radius: 15px !important;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  :hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;
const CertTitle = styled(Card.Text)``;
const CardOverlay = styled(Card.ImgOverlay)`
  margin: 0;
  padding: 30px;
`;
