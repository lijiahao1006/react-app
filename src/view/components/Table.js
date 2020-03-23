import React, { Component } from "react";
import { Table } from "antd";
import axios from "axios";

const columns = [
  {
    title: "图片",
    dataIndex: "img",
    key: "img",
    render: (text, record, index) => <div>
      <img
        style={{
          'width': '200px',
          'height': '140px'
        }}
        src={`http://aiqianduan.com:7897/images/carimages/${record.id}/view/${text}`} />
    </div>

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
  constructor(){
    super();
    this.state = {
      dataSource: []
    }
  }

  async componentDidMount() {
    await axios.get("http://www.aiqianduan.com:7897/cars")
    .then(data=>{
      console.log(data.data)
      this.setState({
        dataSource: data.data.results
      })
    });
  }
  render() {
    const { dataSource } = this.state
    return (
      <div>
        <Table
          dataSource={dataSource}
          rowKey="id"
          columns={columns}
        />;
      </div>
    );
  }
}
