import React, { useState } from "react";
import { Typography, Space, Progress, message } from "antd";
import { Steps, Button } from "antd";
import logo from "../../media/logo.png";

const { Title, Text } = Typography;
const Gatb = () => {
  const [current, setCurrent] = useState(0);
  const [start, setStart] = useState(true);
  const [count, setCount] = useState(0);
  const [dis, setDis] = useState(true);
  const [time, setTime] = useState(100);

  const next = () => {
    setCurrent(current + 1);
    setCount(count + 15);
    setDis(true);
  };

  function userChoise(code) {
    setDis(false);
  }
  return (
    <div className="test">
      <div className="steps-block">
        <img width="60px" src={logo} alt="" />
      </div>
      {start ? (
        <div className="gatbTest">
          <Space direction="vertical" size="large">
            <Title level={2}>Тест №3</Title>
            <Text strong={true}>
              Вам будут представлены два множества, в которых представлены
              геометрические фигуры.
            </Text>
            <Text strong={true}>Этот тест на время!</Text>
            <Text strong={true}>
              Найдите кажной фигуре первого множества соответствующую фигуру из
              второго.
            </Text>
            <Text style={{ fontSize: "12px" }}>
              Выбрать вариант можно при помощи мыши. Подтвердить выбор можно
              через двойной щелчок или кнопки “Продолжить”.
            </Text>
          </Space>
        </div>
      ) : null}
      <div style={start ? { display: "none" } : null} className="steps-content">
        <Title>Найдите соответствующие фигуры в обоих множествах</Title>
        <Progress
          type="circle"
          percent={time}
          format={(percent) => `${percent} : `}
        />
      </div>
      <div className="steps-action">
        {start ? (
          <Button type="primary " onClick={() => setStart(!start)}>
            Всё понятно
          </Button>
        ) : (
          <Button disabled={dis} type="primary " onClick={next}>
            Продолжить
          </Button>
        )}
        {
          <Button
            disabled={dis}
            type="primary"
            onClick={() => message.success("Тестирование завершено!")}
          >
            Завершить
          </Button>
        }
      </div>
    </div>
  );
};

export default Gatb;
