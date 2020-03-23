import React, { Component } from "react";
import "./App.scss";
import Color from './components/Color.js';
import List from './components/List.js';
import Ball from './components/Ball.js';
import Ta from './components/Table.js'
import cs from 'classnames';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      a: 111,
      img: 1,
      btn: 'btn1'
    };
  }
  add(){
    this.setState({
      a: this.state.a + 1
    })
  }
  render() {
    const { btn, img } = this.state
    return (
      <div className="box">
        <h1>hello my is{img}</h1>
        <button
          className={cs({
            'handleBtn': btn === 'btn1'
          })}
          onClick={() => {
            this.setState({
              img: this.state.img + 1,
              btn: 'btn1'
            })
          }}
          disabled={this.state.img === 5}
        >下一张</button>
        <button
          className={cs({
            'handleBtn': btn === 'btn2'
          })}
          onClick={() => {
            this.setState({
              img: this.state.img - 1,
              btn: 'btn2'
            })
          }}
          disabled={this.state.img === 1}
        >上一张</button>
        <img
          src={'./images/ym'+ this.state.img + '.jpg'} 
        />
        <Color />
        <List />
        <Ball a={this.state.a} add={this.add.bind(this)}/>
        <Ta />
      </div>
    );
  }
}
