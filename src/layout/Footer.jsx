import React from "react";
import { Social, ProgressBar, Cursor } from "../components";

class Footer extends React.Component {
  state = {
    //progress bar
    percentage: 0,
    progressBarColor: {
      primary: "#73737d",
      secondary: "#73737d",
    },
    isBarFull: false,
  };

  getProgressPercentage() {
    let maxHeight = document.body.scrollHeight - window.innerHeight;
    let percent = (window.pageYOffset / maxHeight) * 100;
    let progress = Math.round(percent);
    if (progress > 100) {
      progress = 100;
    }
    this.setState({ percentage: progress });

    if (progress === 100) {
      this.setState({ isBarFull: true });
    } else {
      this.setState({ isBarFull: false });
    }
  }

  lisenOnScrollEvent() {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        this.getProgressPercentage();
      });
    });
  }

  unlistenOnScroolEvent() {
    document.removeEventListener("scroll", () => {
      requestAnimationFrame(() => {
        this.getProgressPercentage();
      });
    });
  }

  componentDidMount() {
    this.lisenOnScrollEvent();
  }

  componentWillUnmount() {
    this.unlistenOnScroolEvent();
  }

  render() {
    return (
      <div>
        <Social isFull={this.state.isBarFull} />
        <ProgressBar
          barColor={this.state.progressBarColor}
          progress={this.state.percentage}
        />
        <center>
          <p
            className="col-md-5 col-8 mb-5"
            style={{ fontWeight: 600 }}
          >
            <br/>Made with &#x2764; by Mayank Lad
          </p>
        </center>
      </div>
    );
  }
}

export default Footer;
