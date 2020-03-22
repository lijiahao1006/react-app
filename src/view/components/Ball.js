import React, { Component } from "react";
import "./ball.scss";
import cs from 'classnames'

export default class Ball extends Component {
  constructor(){
    super();
    this.state = {
      p1: 'p1'
    }
  }
  render() {
    return (
      <div>
        {
          (() => {
            let arr = [];
            for (let i=1; i<=36 ;i++) {
              arr.push(<p
                key={i}
                className={cs({
                  'cur': true,
                  'p1': true
                })}
              >{i}</p>);
            }
            return arr
          })()
        }
      </div>
    );
  }
}
