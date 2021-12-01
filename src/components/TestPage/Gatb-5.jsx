import React, { useEffect, useState } from "react";
import { Typography, Space, Progress, message } from "antd";
import { Steps, Button } from "antd";
import logo from "../../media/logo.png";
import Timer from "./Timer";
// ========DATA FOR GATB_5================
import A from "../../GATB/A.jpg";
import A6 from "../../GATB/A6.jpg";
import B from "../../GATB/B.jpg";
import B3 from "../../GATB/B3.jpg";
import C from "../../GATB/C.jpg";
import C2 from "../../GATB/C2.jpg";
import D from "../../GATB/D.jpg";
import D1 from "../../GATB/D1.jpg";
import E from "../../GATB/E.jpg";
import E4 from "../../GATB/E4.jpg";
import F from "../../GATB/F.jpg";
import F5 from "../../GATB/F5.jpg";
import M from "../../GATB/M.png";
import M20 from "../../GATB/M20.png";
import З from "../../GATB/З.png";
import З25 from "../../GATB/З25.png";
import Ц from "../../GATB/Ц.png";
import Ц22 from "../../GATB/Ц22.png";
// =====================
import True from "../../GATB/image 1.svg";
import { Link } from "react-router-dom";
import Cancel from "../../GATB/cancel.png";
import { useDispatch, useSelector } from "react-redux";
import { post_gatb_choise, post_hol_choise } from "../../redux/actions/tests";
// ============DATA=================
const { Step } = Steps;

let data = [
  {
    key: 1,
    img: A,
    width: "50px",
  },
  {
    key: 3,
    img: C,
    width: "40px",
  },
  {
    key: 2,
    img: B,
  },
  {
    key: 4,
    img: D,
  },
  {
    key: 5,
    img: E,
    width: "45px",
  },
  {
    key: 6,
    img: F,
  },
  {
    key: 7,
    img: M,
  },
  {
    key: 8,
    img: З,
  },
  {
    key: 9,
    img: Ц,
  },
];

let data2 = [
  {
    key: 1,
    img: A6,
    width: "30px",
  },
  {
    key: 5,
    img: E4,
    width: "30px",
  },
  {
    key: 9,
    img: Ц22,
  },
  {
    key: 3,
    img: C2,
    width: "50px",
  },
  {
    key: 4,
    img: D1,
    width: "40px",
  },
  {
    key: 7,
    img: M20,
  },
  {
    key: 8,
    img: З25,
  },

  {
    key: 2,
    img: B3,
  },
  {
    key: 6,
    img: F5,
  },
];

// ===========================

const { Title, Text } = Typography;
const Gatb = () => {
  const [start, setStart] = useState(true);
  const [count, setCount] = useState(false);
  const [dis, setDis] = useState(true);
  const [time, setTime] = useState(100);
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [cancel, setCancel] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState(0);
  useEffect(() => {
    if (img1 === img2 && typeof img1 === "number" && typeof img2 === "number") {
      setCount(true);

      data = data.filter((el) => el.key !== img2);
      data2 = data2.filter((el) => el.key !== img2);
      setDis(true);
      next();
      setTimeout(() => {
        setCount(false);
      }, 3000);
      setAnswer(answer + 1);
    } else if (
      img1 !== img2 &&
      typeof img1 === "number" &&
      typeof img2 === "number"
    ) {
      setCancel(true);
      setTimeout(() => {
        setCancel(false);
      }, 3000);
    }
  }, [img2]);

  setTimeout(() => {
    setTime(time - 0.86);
  }, 1000);

  function checkImg1(key) {
    setDis(false);
    setImg1("");
    setImg1(key);
  }
  function checkImg2(key2) {
    setImg2("");
    setImg2(key2);
  }
  const token = useSelector((state) => state?.user?.user?.token);
  const dispatch = useDispatch();
  const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const next = () => {
    setCurrent(current + 1);
  };
  function userChoise(answer) {
    dispatch(post_gatb_choise(answer, token));
  }

  return (
    <div className="test">
      <div className="steps-block">
        <img width="60px" src={logo} alt="" />
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item} />
          ))}
        </Steps>
        ,
      </div>
      {start ? (
        <div className="gatbTest">
          <Space direction="vertical" size="large">
            <Title level={2}>Тест №3</Title>
            <Text strong={true}>
              Вам будут представлены два множества, в которых представлены
              геометрические фигуры.
            </Text>
            <Text style={{ color: "#1890ff" }} strong={true}>
              Этот тест на время!
            </Text>
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.8fr 0.2fr",
            height: 80,
          }}
        >
          <Title>Найдите соответствующие фигуры в обоих множествах</Title>

          <div className="timer">
            <Timer />
            <Progress width={80} type="circle" percent={time} />
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            maxWidth: 800,
            gridColumnGap: 30,
            margin: "40px auto",
          }}
        >
          <img
            style={count ? null : { display: "none" }}
            className={count ? "appear" : null}
            src={True}
            alt="correct"
          />
          <img
            style={cancel ? null : { display: "none" }}
            className={cancel ? "appear" : null}
            src={Cancel}
            alt="false"
          />

          <div className="gatb1">
            {data.map((el) => (
              <>
                <img
                  style={{ margin: "8px 15px" }}
                  onClick={() => {
                    checkImg1(el.key);
                  }}
                  key={el.key}
                  width={el.width ? el.width : "60px"}
                  src={el.img}
                  alt="1"
                />
              </>
            ))}
          </div>
          <div className="gatb2">
            {data2.map((el) => (
              <img
                style={{ margin: "10px" }}
                onClick={() => {
                  checkImg2(el.key);
                }}
                key={el.key}
                width={el.width ? el.width : "60px"}
                src={el.img}
                alt="1"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="steps-action">
        {start ? (
          <Button
            type="primary "
            onClick={() => {
              setStart(!start);
            }}
          >
            Всё понятно
          </Button>
        ) : (
          <Button
            onClick={() => userChoise(answer)}
            disabled={dis}
            type="primary "
          >
            <Link to={"/home"}>Завершить</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Gatb;
