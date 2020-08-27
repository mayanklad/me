import React from "react";
import styled from "styled-components";
import ProfilePicture from "../assets/pictures/profile.jpg";
import { FiToggleRight, FiToggleLeft } from "react-icons/fi";
import { BsDownload } from "react-icons/bs";
import { Button } from "react-bootstrap";
import Resume from "../data/Resume.pdf"

class Header extends React.Component {
  render() {
    const themeSwitch =
      this.props.onALLthemeProps === "light" ? (
        <FiToggleRight
          style={{ cursor: "pointer", color: "#73737d" }}
          onClick={this.props.onTheming}
          size={30}
        />
      ) : (
        <FiToggleLeft
          style={{ cursor: "pointer", color: "#73737d" }}
          onClick={this.props.onTheming}
          size={30}
        />
      );

    return (
      <HeaderContainer className="mb-4">
        <Head>
          <Box>
            <a
              href="https://www.linkedin.com/in/mayank-lad-602568151/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Profile alt="profile" src={ProfilePicture} />
            </a>
            <div>
              <Name className="font-name">Mayank</Name>
              <Subtitle>Computer Engineer</Subtitle>
            </div>
          </Box>
        </Head>
        <SwitcherContainer>
          <Switcher>Theme Switch {themeSwitch}</Switcher>
        </SwitcherContainer>
        <ShowResume>
          <Btn href={Resume} download>
            Resume <BsDownload className="ml-2" />
          </Btn>
        </ShowResume>
      </HeaderContainer>
    );
  }
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

/* Head */
const Head = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Name = styled.div`
  text-decoration: none;
  font-size: 35px;
  margin-left: 1rem;
  font-weight: bold;
  background: -webkit-linear-gradient(315deg, #2a2a72 0%, #009ffd 45%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.div`
  margin-left: 1rem;
  color: rgb(115, 115, 125);
`;
const Switcher = styled.div`
  color: #73737d;
  margin: 1.5rem 0;
  @media (max-width: 540px) {
    margin-top: 5rem;
  }
`;

const Profile = styled.img`
  padding: 4px;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.55);
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.85);
  }
`;

const SwitcherContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ShowResume = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Btn = styled(Button)`
  display: flex;
  align-items: center;
`;
