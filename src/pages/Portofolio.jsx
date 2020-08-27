import React from "react";
import Layout from "../layout/Layout";
import { Home, Work, About, StayTuned, Certificate, Experience, Skill, Interest } from "../portofolio_sections";

class Portofolio extends React.Component {
  render() {
    return (
      <Layout
        allthemeProps={this.props.allProps}
        onTheme={this.props.onThemeChange}
      >
        <Home />
        <About />
        <Experience />
        <Skill />
        <Interest />
        <Work />
        <Certificate />
        <StayTuned />
      </Layout>
    );
  }
}

export default Portofolio;
