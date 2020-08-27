import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import { Cert, Title, Lotties } from "../components";
import Ring from "../assets/animations/loader-ring.json";
import Cargo from "../assets/others/cargo-ship.svg";
import certificates from "../data/certificates.json";

class Certificate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      certificateData: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.setState({ certificateData: certificates});
    this.setState({ loading: false });
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
        <Title title="Licenses & Certificates" icon={Cargo}></Title>

        <CertContainer>
          {this.state.certificateData.map((cert) => (
            <Cert key={cert.id} repoData={cert} />
          ))}
        </CertContainer>
      </div>
    );
  }
}

export default Certificate;

const CertContainer = styled(Col)`
  display: flex;
  flex-wrap: wrap;
`;
