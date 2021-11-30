import { Steps, Button, message } from "antd";
import { React, useEffect, useState } from "react";
import "./test.css";
import logo from "../../media/logo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  get_testing_user,
  get_tests,
  post_choise,
} from "../../redux/actions/tests";
import { Typography, Space, Progress } from "antd";

const { Title, Text } = Typography;

const { Step } = Steps;

const Test = () => {
  const [start, setStart] = useState(true);
  const [dis, setDis] = useState(true);
  const steps = [
    {
      title: "",
      content: {
        index: 1,
        question: "Какую профессию вы бы предпочли?",
        answers: {
          left: {
            name: "R",
            text: "Автомеханик",
          },
          right: {
            name: "I",
            text: "Биофизик",
          },
        },
      },
    },
    {
      title: "",
      content: {
        index: 2,
        question: "Какую профессию вы бы предпочли?",
        answers: {
          left: {
            name: "R",
            text: "Егерь",
          },
          right: {
            name: "S",
            text: "Интервьюер",
          },
        },
      },
    },
    {
      title: "",
      content: {
        index: 3,
        question: "Какую профессию вы бы предпочли?",
        answers: {
          left: {
            name: "R",
            text: "Кондитер",
          },
          right: {
            name: "C",
            text: "Делопроизводитель",
          },
        },
      },
    },
    {
      title: "",
      content: {
        index: 4,
        question: "Какую профессию вы бы предпочли?",
        answers: {
          left: {
            name: "A",
            text: "Фотограф",
          },
          right: {
            name: "E",
            text: "Заведующий магазином",
          },
        },
      },
    },
    {
      title: "",
      content: {
        index: 5,
        question: "Какую профессию вы бы предпочли?",
        answers: {
          left: {
            name: "A",
            text: "Актер",
          },
          right: {
            name: "S",
            text: "Адвокат",
          },
        },
      },
    },
    {
      title: "",
      content: {
        index: 6,
        question: "Какую профессию вы бы предпочли?",
        answers: {
          left: {
            name: "S",
            text: "Врач-психиатр",
          },
          right: {
            name: "C",
            text: "Статистик",
          },
        },
      },
    },
    {
      title: "",
      content: {
        index: 7,
        question: "Какую профессию вы бы предпочли?",
        answers: {
          left: {
            name: "S",
            text: "Политический деятель",
          },
          right: {
            name: "A",
            text: "Писатель",
          },
        },
      },
    },
    {
      title: "",
      content: {
        index: 8,
        question: "Какую профессию вы бы предпочли?",
        answers: {
          left: {
            name: "I",
            text: "Биолог",
          },
          right: {
            name: "R",
            text: "Экономист",
          },
        },
      },
    },
  ];
  const token = useSelector((state) => state?.user?.user?.token);
  console.log(token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(get_tests(token));
      dispatch(get_testing_user(token));
    }
  }, [token]);

  function userChoise(index, name) {
    dispatch(post_choise(index, name, token));
    setDis(false);
  }

  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const next = () => {
    setCurrent(current + 1);
    setDis(true);
    setCount(count + 15);
  };

  return (
    <div className="test">
      <>
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
          <div className="holTest">
            <Space direction="vertical" size="middle">
              <Title level={2}>Тест №1</Title>
              <Text strong={true}>
                Вам попарно будут представлены различные профессии, например:
              </Text>
              <div className="buttons">
                <Button size="large">
                  <Title level={5}>ЗООТЕХНИК</Title>
                </Button>
                <Button size="large">
                  <Title level={5}>ГЛАВНЫЙ ВРАЧ</Title>
                </Button>
              </div>
              <Text strong={true}>
                В каждой паре Вам следует отдать предпочтение какой-то одной.
              </Text>

              <Text style={{ fontSize: "12px" }}>
                Выбрать вариант можно при помощи мыши. Подтвердить выбор можно
                через двойной щелчок или кнопки “Продолжить”.
              </Text>
            </Space>
          </div>
        ) : null}
        <div
          style={start ? { display: "none" } : null}
          className="steps-content"
        >
          <Space direction="vertical" size="middle">
            <Title level={1}>{steps[current].content?.question}</Title>

            <Progress percent={count} status="active" />
            <div className="buttons">
              <Button
                onClick={() =>
                  userChoise(
                    steps[current].content?.index,
                    steps[current].content?.answers.left
                  )
                }
                size="large"
              >
                <Title level={5}>
                  {steps[current].content?.answers?.left.text}
                </Title>
              </Button>
              <Button
                onClick={() =>
                  userChoise(
                    steps[current].content?.index,
                    steps[current].content?.answers.right
                  )
                }
                size="large"
              >
                <Title level={5}>
                  {steps[current].content?.answers?.right.text}
                </Title>
              </Button>
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
              Завершить
            </Button>
          )}
        </div>
      </>
    </div>
  );
};

export default Test;
