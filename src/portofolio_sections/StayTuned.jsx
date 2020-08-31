import React from "react";
import { Col } from "react-bootstrap";
import { Title } from "../components";
import Garment from "../assets/others/garment.svg";
import styled from "styled-components";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';  

class StayTuned extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      feedback: "",
    };
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const names = target.name;
    const values = target.value;
    this.setState({ [names]: values });
  }

  sendMessage(event) {
    event.preventDefault();

    const templateParams = {
      from_name: this.state.name,
      from_email: this.state.email,
      feedback: this.state.feedback
    };
    emailjs
          .send("gmail", "template_h9nEjF1x", templateParams, "user_LS7HeApe4sOGB4mor1bdG")
          .then(
            function(response) {
              toast.success("Your message has successfully sent!", {
                position: toast.POSITION.BOTTOM_CENTER
              });
              console.log("SUCCESS!", response.status, response.text);
            },
            function(err) {
              toast.error("Your message was not able to be sent");
            }
          );
    this.setState({
          name: "",
          email: "",
          feedback: ""
        });
  }

  render() {
    return (
      <Container>
        <Col className="m-0 p-0">
          <Title title="Contact" icon={Garment} />
          <Panel>
            <form
              className="col-lg-6"
              id={this.props.id}
              name={this.props.name}
              method={this.props.method}
              action={this.props.action}
            >
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label
                    for="email"
                    style={{ color: "#73737d", fontWeight: 600 }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email Address"
                    id="email"
                    name="email"
                    onChange={this.handleInputChange.bind(this)}
                    required
                    value={this.state.email}
                  />
                </div>
                <div class="form-group col-md-6">
                  <label
                    style={{ color: "#73737d", fontWeight: 600 }}
                    for="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Full Name"
                    id="name"
                    name="name"
                    onChange={this.handleInputChange.bind(this)}
                    required
                    value={this.state.name}
                  ></input>
                </div>
              </div>
              <div class="form-group">
                <label
                  style={{ color: "#73737d", fontWeight: 600 }}
                  for="feedback"
                >
                  Message
                </label>
                <textarea
                  class="form-control"
                  rows="3"
                  placeholder="Drop me a line"
                  id="feedback"
                  name="feedback"
                  onChange={this.handleInputChange.bind(this)}
                  required
                  value={this.state.feedback}
                ></textarea>
              </div>
              <button
                style={{ background: "#00D1B2", color: "#fff" }}
                type="button"
                className="btn mt-4 mt-sm-0"
                onClick={this.sendMessage.bind(this)}
              >
                Send
              </button>
            </form>
          </Panel>
        </Col>
      </Container>
    );
  }
}

export default StayTuned;

const Container = styled.div`
  @media (max-width: 992px) {
    margin-top: 12.5rem;
  }
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
