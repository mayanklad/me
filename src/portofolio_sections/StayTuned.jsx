import React from "react";
import { Col } from "react-bootstrap";
import { Title } from "../components";
import Garment from "../assets/others/garment.svg";
import styled from "styled-components";

const StayTuned = () => {
  return (
    <Container>
      <Col className="m-0 p-0">
        <Title title="Contact" icon={Garment} />
        <Panel>
          <p
            className="col-md-5 col-8 mb-5"
            style={{ textAlign: "center", fontWeight: 600 }}
          >
            Although not looking for a job at the moment, I am open to any new
            opportunities.
          </p>
          <form className="col-lg-6">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label
                  for="inputEmail4"
                  style={{ color: "#73737d", fontWeight: 600 }}
                >
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email Address"
                />
              </div>
              <div class="form-group col-md-6">
                <label
                  style={{ color: "#73737d", fontWeight: 600 }}
                  for="inputText"
                >
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Full Name"
                ></input>
              </div>
            </div>
            <div class="form-group">
              <label
                style={{ color: "#73737d", fontWeight: 600 }}
                for="exampleFormControlTextarea1"
              >
                Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Drop me a line"
              ></textarea>
            </div>
            <button
              style={{ background: "#00D1B2", color: "#fff" }}
              type="button"
              className="btn mt-4 mt-sm-0"
            >
              Send
            </button>
          </form>
        </Panel>
      </Col>
    </Container>
  );
};

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
