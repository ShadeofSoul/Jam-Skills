import React, { useState } from "react";
import { Typography, Space, Progress, message } from "antd";
import { Steps, Button } from "antd";
import logo from "../../media/logo.png";
import { Link } from "react-router-dom";
import { post_usk_choise } from "../../redux/actions/tests";
import { useDispatch, useSelector } from "react-redux";

const { Step } = Steps;

const { Title, Text } = Typography;
const steps = [
  {
    title: "",
    content: {
      index: 1,
      question:
        "Продвижение по службе больше зависит от удачного обстоятельства, чем от способностей и усилий человека.",
    },
  },
  {
    title: "",
    content: {
      index: 2,
      question:
        "Большинство разводов происходит оттого, что люди не захотели приспособиться друг к другу.",
    },
  },
  {
    title: "",
    content: {
      index: 3,
      question:
        "Болезнь – дело случая; если уж суждено заболеть, то ничего не поделаешь.",
    },
  },
  {
    title: "",
    content: {
      index: 4,
      question:
        "Люди оказываются одинокими из-за того, что сами не проявляют интереса и дружелюбия к окружающим.",
    },
  },
  {
    title: "",
    content: {
      index: 5,
      question:
        "Думаю, что правильный образ жизни может больше помочь здоровью, чем врачи и лекарства.",
    },
  },
  {
    title: "",
    content: {
      index: 6,
      question:
        "Бесполезно предпринимать усилия для того, чтобы завоевать симпатию других людей.",
    },
  },
  {
    title: "",
    content: {
      index: 7,
      question:
        "То хорошее, что я делаю, обычно бывает по достоинству оценено другими.",
    },
  },
  {
    title: "",
    content: {
      index: 8,
      question:
        "Когда я строю планы, то я, в общем, верю, что смогу осуществить их.",
    },
  },
];

let answers = [
  {
    code: 3,
    text: "Полностью согласен",
  },
  {
    code: 2,
    text: "Пожалуй, согласен",
  },
  {
    code: 1,
    text: "Скорее согласен, чем несогласен",
  },
  {
    code: -1,
    text: "Скорее несогласен, чем согласен",
  },
  {
    code: -2,
    text: "Пожалуй, несогласен",
  },
  {
    code: -3,
    text: "Полностью несогласен",
  },
];

const UskTest = () => {
  const [current, setCurrent] = useState(0);
  const [start, setStart] = useState(true);
  const [count, setCount] = useState(0);
  const [dis, setDis] = useState(true);

  const next = () => {
    setCurrent(current + 1);
    setCount(count + 15);
    setDis(true);
  };
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.user?.user?.token);
  console.log(token);

  function userChoise(index, code) {
    dispatch(post_usk_choise(index, code, token));
    setDis(false);
  }

  return (
    <div className="test">
      <div className="steps-block">
        <img width="60px" src={logo} alt="" />
        <Steps current={current}>
          {steps.map((item) => (
            <>
              <Step key={item.title} title={item.title} />
            </>
          ))}
        </Steps>
      </div>
      {start ? (
        <div className="uskTest">
          <Space direction="vertical" size="middle">
            <Title level={2}>Тест №2</Title>
            <Text strong={true}>
              Вам предстоит оценить ряд утверждений, касающихся различных сторон
              жизни. <br /> Просим вас отвечать правдиво и быстро.
            </Text>
            <Text strong={true}>
              Помните, что нет ответов хороших и плохих, правильных и
              неправильных. Просто мы все разные.
            </Text>
            <Text style={{ fontSize: "12px" }}>
              Выбрать вариант можно при помощи мыши. Подтвердить выбор можно
              через двойной щелчок или кнопки “Продолжить”.
            </Text>
          </Space>
        </div>
      ) : null}
      <div style={start ? { display: "none" } : null} className="steps-content">
        <Space direction="vertical" size="middle">
          <Title level={2}>Выберите один из вариантов</Title>
          <Progress percent={count} status="active" />
          <div className="usk">
            <div className="uskQ">
              <Title level={3}>{steps[current].content.question}</Title>
            </div>
            <div className="uskA">
              {answers.map((element) => (
                <button
                  onClick={() =>
                    userChoise(steps[current].content.index, element.code)
                  }
                >
                  {element.text}
                </button>
              ))}
            </div>
          </div>
        </Space>
      </div>
      <div className="steps-action">
        {start
          ? current < steps.length - 1 && (
              <Button type="primary " onClick={() => setStart(!start)}>
                Всё понятно
              </Button>
            )
          : current < steps.length - 1 && (
              <Button disabled={dis} type="primary " onClick={next}>
                Продолжить
              </Button>
            )}
        {current === steps.length - 1 && (
          <Button
            disabled={dis}
            type="primary"
            onClick={() => message.success("Тестирование завершено!")}
          >
            <Link to={"/gatb-5test"}>Завершить</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default UskTest;
