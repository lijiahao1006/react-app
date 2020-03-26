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
      // (.header+.navigation>.tab*5>{number $})+.footer>.title+.content
    // .title>ul>(li.hhh>lorem3)*4
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
                     arr.splice(index,1)
                    this.setState({
                      arr
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
