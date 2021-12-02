import React, { Component } from "react";
import { Table, Space, Progress } from "antd";
import { Link } from "react-router-dom";

const { Column } = Table;

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

    width: "15%",
  },
  {
    title: "Завершение",
    dataIndex: "end",
    sorter: true,
    width: "15%",
  },
  {
    title: "Состояние",
    dataIndex: "state",
    filters: [
      { text: "Выполнено", value: "" },
      { text: "В процессе", value: "" },
      { text: "Не начато", value: "" },
      { text: "Отказано", value: "" },
    ],
    width: "15%",
  },
  {
    title: "Прогресc",
    dataIndex: "progress",
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

const uskAnswers = JSON.parse(localStorage.getItem("usk"))
  ? JSON.parse(localStorage.getItem("usk")).uskAnswers
  : JSON.parse(localStorage.getItem("usk"))?.uskAnswers;
const holAnswers = JSON.parse(localStorage.getItem("hol"))
  ? JSON.parse(localStorage.getItem("hol")).holAnswers
  : JSON.parse(localStorage.getItem("hol"))?.holAnswers;
const gatbAnswers = JSON.parse(localStorage.getItem("gatb"))
  ? JSON.parse(localStorage.getItem("gatb")).gatbAnswers
  : JSON.parse(localStorage.getItem("gatb"))?.gatbAnswers;

const data = [
  {
    key: 1,
    name: "John Brown",
    test: "Тест №1",
    subtest: "Holland Test",
    progress: (
      <Progress
        width={10}
        percent={holAnswers ? holAnswers.length * 15 : 0}
        status="active"
      />
    ),
    invate: "00.00.00",
    end: "00.00.00",
    state: holAnswers
      ? holAnswers?.length * 15 <= 30
        ? holAnswers?.length * 15 >= 100
          ? "Выполнено"
          : "Не начато"
        : !(holAnswers?.length * 15 >= 100)
        ? "В процессе"
        : "Выполнено"
      : "Не выполнено",
  },
  {
    key: 2,
    name: "Jim Green ",
    test: "Тест №2",
    subtest: "USK Test",
    progress: (
      <Progress
        width={10}
        percent={uskAnswers ? uskAnswers?.length * 15 : 0}
        status="active"
      />
    ),
    invate: "00.00.00",
    end: "00.00.00",
    state: uskAnswers
      ? uskAnswers?.length * 15 <= 30
        ? uskAnswers?.length * 15 >= 100
          ? "Выполнено"
          : "Не начато"
        : !(uskAnswers?.length * 15 >= 100)
        ? "В процессе"
        : "Выполнено"
      : "Не выполнено",
  },
  {
    key: 3,
    name: "Joe Black",
    test: "Тест №3",
    subtest: "Gatb-5 Test",
    progress: (
      <Progress
        width={10}
        percent={gatbAnswers ? gatbAnswers[0].result * 12 : 0}
        status="active"
      />
    ),
    invate: "00.00.00",
    end: "00.00.00",
    state: gatbAnswers
      ? gatbAnswers[0].result * 12 <= 30
        ? gatbAnswers[0].result * 12 >= 100
          ? "Выполнено"
          : "Не начато"
        : !(gatbAnswers[0].result * 12 >= 100)
        ? "В процессе"
        : "Выполнено"
      : "Не выполнено",
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
