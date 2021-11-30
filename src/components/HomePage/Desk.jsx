import React, { Component } from "react";
import { Table, Button, Space } from "antd";
import { Link } from "react-router-dom";

const { Column, ColumnGroup } = Table;

const columns = [
  {
    title: "Тест",
    dataIndex: "test",
    width: "10%",
  },
  {
    title: "Подтест",
    dataIndex: "subtest",
    width: "10%",
  },
  {
    title: "Отправитель",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
    width: "10%",
  },
  {
    title: "Приглашение",
    dataIndex: "invate",
    sorter: true,
    // render: (invate) => `${invate.first} ${invate.last}`,
    width: "15%",
  },
  {
    title: "Завершение",
    dataIndex: "end",
    sorter: true,
    // render: (end) => `${end.first} ${end.last}`,
    width: "15%",
  },
  {
    title: "Состояние",
    dataIndex: "state",
    filters: [
      { text: "Выполнено", value: "male" },
      { text: "В процессе", value: "female" },
      { text: "Не начато", value: "female" },
      { text: "Отказано", value: "female" },
    ],
    width: "15%",
  },
  {
    title: "Прогресc",
    dataIndex: "progres",
    width: "20%",
  },
  {
    title: "Действие",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        {record.subtest === "Gatb-5 Test" ? (
          <Link to={"/gatb-5test"}>Перейти</Link>
        ) : record.subtest === "Holland Test" ? (
          <Link to={"/holtest"}>Перейти</Link>
        ) : (
          <Link to={"/usktest"}>Перейти</Link>
        )}
        <a>Отказ</a>
        <a>Результат</a>
      </Space>
    ),
    width: "20%",
  },
];

const data = [
  {
    key: 1,
    name: "John Brown",
    test: "Тест №1",
    subtest: "Holland Test",
  },
  {
    key: 2,
    name: "Jim Green ",
    test: "Тест №2",
    subtest: "USK Test",
  },
  {
    key: 3,
    name: "Joe Black",
    test: "Тест №3",
    subtest: "Gatb-5 Test",
  },
];

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
        >
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <Space size="middle">
                <a>Invite {record.lastName}</a>
                <a>Delete</a>
              </Space>
            )}
          />
        </Table>
      </div>
    );
  }
}

export default Desk;
