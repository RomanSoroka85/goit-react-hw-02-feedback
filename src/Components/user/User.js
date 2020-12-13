import React, { Component } from "react";

import s from "./user.module.css";

export default class User extends Component {
  static propTypes = {};
  static defaultProps = {};

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  onGood = () => {
    this.setState({ good: this.state.good + 1 });
  };
  onNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  onBad = () => {
    this.setState({ bad: this.state.bad + 1 });
  };
  render() {
    return (
      <>
        <div className={s.profile}>
          <div className={s.description}>
            <h3> Pleace leave feedback</h3>
            <button type="button" onClick={this.onGood} className={s.name}>
              Good
            </button>
            <button type="button" onClick={this.onNeutral} className={s.name}>
              Neutral
            </button>
            <button type="button" onClick={this.onBad} className={s.name}>
              Bad
            </button>
            <p className={s.statistics}>Statistics</p>
            <p>Good:{this.state.good}</p>
            <p>Neutral:{this.state.neutral}</p>
            <p>Bad:{this.state.bad}</p>
            <p>Total:{this.state.good + this.state.neutral + this.state.bad}</p>
            <p className={s.statistics}>
              Positive feedback{" "}
              {(
                (this.state.good /
                  (this.state.good + this.state.neutral + this.state.bad)) *
                100
              ).toFixed(2) }
              %
            </p>
          </div>
        </div>
      </>
    );
  }
}
