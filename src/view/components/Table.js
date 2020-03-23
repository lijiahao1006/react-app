import React, { Component } from "react";
import { Table } from "antd";
import axios from "axios";

const columns = [
  {
    title: "图片",
    dataIndex: "img",
    key: "img",
    render: (text, record, index) => (
      <div>
        <img
          style={{
            width: "200px",
            height: "140px"
          }}
          src={`http://aiqianduan.com:7897/images/carimages/${record.id}/view/${text}`}
        />
      </div>
    )
  },
  {
    title: "品牌",
    dataIndex: "brand",
    key: "brand"
  },
  {
    title: "车系",
    dataIndex: "series",
    key: "series"
  },
  {
    title: "颜色",
    dataIndex: "color",
    key: "color"
  }
];
export default class Ta extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      total: 0,
      page: 1,
      Tcolor:[]
    };
  }
  async loadData() {
    await axios
      .get(`http://www.aiqianduan.com:7897/cars?page=${this.state.page}&color=${this.state.Tcolor.join('v')}`)
      .then(data => {
        console.log(data.data);
        this.setState({
          dataSource: data.data.results,
          total: data.data.total
        });
      });
  }
  async componentDidMount() {
    this.loadData();
  }
  // 初次渲染不执行。更新时执行
  async shouldComponentUpdate(nextProps,nextState){
    // 系统会有误判读情况所以要写 条件语句
    if(nextProps.color.join('') !== nextState.Tcolor.join('')){
      this.setState({
        Tcolor: nextProps.color
      },() => {
        console.log(this.state.Tcolor)
         this.loadData()
      })
      return true
    }else{
      console.log(2)
      return false
    }
  }
  render() {
    const { dataSource, total, page, Tcolor } = this.state;

    return (
      <div>
        <Table
          dataSource={dataSource}
          rowKey="id"
          columns={columns}
          pagination={{
            total,
            current: page,
            onChange: (page)=> {
              this.setState(
                {
                  page
                },
                () => {
                  this.loadData();
                }
              );
            }
          }}
          title={() => <h1>汽车筛选器</h1>}
        />
        { this.props.color }
      </div>
    );
  }
}
