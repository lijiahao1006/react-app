import React, { Component } from "react";

export default class List extends Component {
  constructor(){
    super();
    this.state = {
      a: 1000,
      arr : ['你','好']
    };
  }
  render() {
    const { a, arr } = this.state;
    return (
      <div>
        {/* 双向绑定input方法
        <input value={ a } onChange={e => {
          this.setState({
            a: e.target.value
          })
        }}
        />
        <button
          onClick={() => {
            this.setState({
              a: '',
              arr: [...arr, a]
            })
          }}
          disabled={ a === '' }
        >提交</button> */}
        {/* ref获取dom方法 */}
        <input ref="ipt" />
        <button
          onClick={() => {
            let content = this.refs.ipt.value;
            this.setState({
              arr: [...arr, content]
            })
          }}
        >tijiao</button>
        <ul>
          {
            arr.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  <button onClick={() => {
                    this.setState({
                      arr: arr.filter((_item, idx) => idx !== index)
                    })
                  }}
                  >删除</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
