import React, { Component } from "react";
import { connect } from 'react-redux';
import "./App.scss";
import Color from './components/Color';
import List from './components/List';
import Ball from './components/Ball';
import Ta from './components/Table';
import Check from './components/Check'
import cs from 'classnames';

class App extends Component {
  constructor() {
    super();
    this.state = {
      a: 111,
      img: 1,
      btn: 'btn1',
      Acolor: []
    };
  }
  render() {
    const { btn, img, Acolor } = this.state
    return (
      <div className="box">
        <h1>hello {this.props.a}</h1>
        <button onClick={() => this.props.dispatch({'type':'add'})}>++redux</button>
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
        {/* <Color />
        <List />
        <Ball a={this.state.a} add={()=>{
              this.setState({
                a: this.state.a + 1
              })
        }}/>
        <Ta color={ Acolor }/>
        <Check
          changeVal={(val) => {
            this.setState({
              Acolor: val
            })
          }}
        /> */}
      </div>
    );
  }
}
export default connect(
  (state) => ({
    a: state.counter.a
  }),
  dispatch => ({
    dispatch
  })
)(App)