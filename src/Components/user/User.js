import React, { Component } from "react";

import s from "./user.module.css";

export default class User extends Component {
  // static propTypes = {};
  // static defaultProps = {};

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
    const g = this.state.good;
    const n = this.state.neutral;
    const b = this.state.bad;

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
            {!!g && <p>Good:{g}</p>}
            {!!n && <p>Neutral:{n}</p>}
            {!!b && <p>Bad:{b}</p>}

            {!!g + n + b && (
              <p>
                Total:{g + n + b}
              </p>
            )}

            {!!g + n + b && (
              <p className={s.statistics}>
                Positive feedback{" "}
                {(
                  (g /
                    (g + n + b)) *
                  100
                ).toFixed(2)}
                %
              </p>
            )}
          </div>
        </div>
      </>
    );
  }
}
