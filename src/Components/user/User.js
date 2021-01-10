import React, { Component } from "react";

import s from "./user.module.css";

export default class User extends Component {
  // static propTypes = {};
  // static defaultProps = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHandleClick = (e) => {
    const { name } = e.target;
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };
  getTotalFeebback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  getPositiveFeedback = () => {
    return (this.state.good * 100) / this.getTotalFeebback();
  };
  render() {
    const { good, neutral, bad } = this.state;

    return (
      // <>
      //   <div className={s.profile}>
      //     <div className={s.description}>
      //       <h3> Pleace leave feedback</h3>
      //       <button type="button" onClick={this.onGood} className={s.name}>
      //         Good
      //       </button>
      //       <button type="button" onClick={this.onNeutral} className={s.name}>
      //         Neutral
      //       </button>
      //       <button type="button" onClick={this.onBad} className={s.name}>
      //         Bad
      //       </button>
      //       <p className={s.statistics}>Statistics</p>
      //       {!!g && <p>Good:{g}</p>}
      //       {!!n && <p>Neutral:{n}</p>}
      //       {!!b && <p>Bad:{b}</p>}

      //       {!!(g + n + b)  && <p>Total:{g + n + b}</p>}

      //       {!!(g + n + b) && (
      //         <p className={s.statistics}>
      //           Positive feedback {((g / (g + n + b)) * 100).toFixed(2)}%
      //         </p>
      //       )}
      //     </div>
      //   </div>
      // </>
      <>
        <div className={s.profile}>
          <div className={s.description}>
            <h3> Pleace leave feedback</h3>
            <button
              type="button"
              name="good"
              onClick={this.onHandleClick}
              className={s.name}
            >
              Good
            </button>
            <button
              type="button"
              name="neutral"
              onClick={this.onHandleClick}
              className={s.name}
            >
              Neutral{" "}
            </button>{" "}
            <button
              type="button"
              name="bad"
              onClick={this.onHandleClick}
              className={s.name}
            >
              Bad{" "}
            </button>
            <p className={s.statistics}>Statistics</p>
            {!!this.getTotalFeebback() && (
              <ul className={s.feedBack}>
                <li>
                  <span>Good: {good}</span>
                </li>
                <li>
                  <span>Neutral: {neutral}</span>
                </li>
                <li>
                  <span>Bad: {bad}</span>
                </li>
                <li>
                  <span>Total: {this.getTotalFeebback()}</span>
                </li>
                <li>
                  <span>
                    Positive feedback: {this.getPositiveFeedback().toFixed(2)}%
                  </span>
                </li>
              </ul>
            )}
          </div>
        </div>
      </>
    );
  }
}
