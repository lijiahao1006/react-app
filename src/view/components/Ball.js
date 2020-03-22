import React, { Component } from "react";
import "./ball.scss";
import cs from 'classnames';
import { Button } from 'antd';

export default class Ball extends Component {
  constructor(){
    super();
    this.state = {
      p1: 'p1',
      nowarr: [1,5,8,20]
    }
  }
  // 洗牌算法
  suiji(arr){
    let len = arr.length;
    for(let i=0;i<len;i++){
      let index = Math.floor(Math.random()*len);
      [arr[i], arr[index]] = [arr[index], arr[i]]
    }
    return arr
  }
  render() {
    const { nowarr } = this.state;
    return (
      <div style={{
        'width': '400px'
      }}>
        {
          (() => {
            let arr = [];
            for (let i=1; i<=36 ;i++) {
              arr.push(<p
                key={i}
                className={cs({
                  'cur': nowarr.includes(i),
                  'p1': true
                })}
                onClick={() => {
                  if (nowarr.includes(i)) {
                    this.setState({
                      nowarr: nowarr.filter(item => item!==i)
                    })
                  }else{
                    this.setState({
                      nowarr: [...nowarr, i]
                    })
                  }
                }}
              >{i}</p>);
            }
            <button>123</button>
            return arr
          })()
        }
        <button onClick={() => {
          let arr1 = [],
              arr2 = [];
          for(let i=1; i<=36; i++){
            arr1.push(i)
          }
          this.suiji(arr1);
          arr2 = arr1.splice(0,6);
          this.setState({
            nowarr: arr2
          })

        }}>随机</button>
        <div>fuqin{this.props.a}</div>
        <button onClick={()=>{
          this.props.add()
        }}>修改父亲值</button>

        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </div>
    );
  }
}
