import React, { Component } from "react";
import { Table, Button, Space } from "antd";

const columns = [
  {
    title: "Тест",
    dataIndex: "test",
    width: "15%",
  },
  {
    title: "Подтест",
    dataIndex: "subtest",
  },
  {
    title: "Отправитель",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Приглашение",
    dataIndex: "invate",
    sorter: true,
    // render: (invate) => `${invate.first} ${invate.last}`,
    width: "20%",
  },
  {
    title: "Завершение",
    dataIndex: "end",
    sorter: true,
    // render: (end) => `${end.first} ${end.last}`,
    width: "20%",
  },
  {
    title: "Состояние",
    dataIndex: "state",
    filters: [
      { text: "Выполнено", value: "male" },
      { text: "В процессе", value: "female" },
      { text: "Неи начато", value: "female" },
      { text: "Отказано", value: "female" },
    ],
    width: "20%",
  },
  {
    title: "Прогресc",
    dataIndex: "progres",
  },
  {
    title: "Действие",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>Перейти</a>
        <a>Отказ</a>
        <a>Результат</a>
      </Space>
    ),
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    test: `Тест ${i}`,
    subtest: `Тест ${"#2"}`,
    name: "Jim Green",
    filters: "В процессе",
    address: `London, Park Lane no. ${i}`,
  });
}

class Desk extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div className="desk">
        <Table
          rowSelection={rowSelection}
          columns={columns}
          size="small"
          dataSource={data}
        />
      </div>
    );
  }
}

export default Desk;
