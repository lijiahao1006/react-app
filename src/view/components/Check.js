import React, { Component } from "react";
import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;

const allOptions = ['红', '黄', '白','绿','蓝'];
// 加载时的默认选项
const defaultCheckedList = ['红', '白'];

export default class Check extends Component {
  constructor(){
    super();
    this.state = {
      checkedList: [],
      indeterminate: false,
      checkAll: false,
    }
  }
  render() {
    return (
      <div>
        <div className="site-checkbox-all-wrapper">
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={(e) => {
              this.setState({
                checkedList: e.target.checked ? allOptions : [],
                indeterminate: false,
                checkAll: e.target.checked,
              },() => {
                this.props.changeVal(this.state.checkedList);
              })
            }}
            checked={this.state.checkAll}
          >
            全选
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup
          options={allOptions}
          value={this.state.checkedList}
          onChange={(checkedList) => {
            this.setState({
              checkedList,
              // 双感叹号转换为布尔值
              indeterminate: !!checkedList.length && checkedList.length < allOptions.length,
              checkAll: checkedList.length === allOptions.length,
            },()=>{
              // 所选属性传给父亲
              this.props.changeVal(checkedList);
            })
          }}
        />
      </div>
    );
  }
}
