import React, { Component } from "react";

const box = {
  width: '300px',
}

export default class Color extends Component {
  constructor() {
    super();
    this.state = {
      a: 10,
      r: 0,
      g: 0,
      b: 0,
    };
  }
  render() {
    const {a, r, g, b} = this.state
    return (
      <div>
        <input
          type="range"
          max={255} min={0}
          value={r}
          onChange={e => {
            this.setState({
              r: e.target.value
            })
          }}
        />
        r{r}
        <br />
        <input
          type="range"
          max={255} min={0}
          value={g}
          onChange={e => {
            this.setState({
              g: e.target.value
            })
          }}
        />
        g{g}
        <br />
        <input
          type="range"
          max={255} min={0}
          value={b}
          onChange={e => {
            this.setState({
              b: e.target.value
            })
          }}
        />
        b{b}
        <div
          style={{
            'width': '300px',
            'height': '100px',
            'backgroundColor':`rgba(${r},${g},${b})`
          }}
        >1234</div>
      </div>
    );
  }
}
