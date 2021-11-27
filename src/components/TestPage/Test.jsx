import { Steps, Button, message } from "antd";
import { React, useState } from "react";
import "./test.css";
import logo from "../../media/logo.png";

const { Step } = Steps;

const steps = [
  {
    title: "",
    content: "First-content",
  },
  {
    title: "",
    content: "Second-content",
  },
  {
    title: "",
    content: "Last-content",
  },
  {
    title: "",
    content: "First-content",
  },
  {
    title: "",
    content: "First-content",
  },
  {
    title: "",
    content: "First-content",
  },
  {
    title: "",
    content: "First-content",
  },
  {
    title: "",
    content: "First-content",
  },
];

const Test = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
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
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {/* {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )} */}
        </div>
      </>
    </div>
  );
};

export default Test;
