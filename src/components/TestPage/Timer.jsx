import React from "react";
import { useNavigate } from "react-router";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
  });
  let navigate = useNavigate();
  if (minutes === 0 && seconds === 0) {
    navigate("/home");
  }

  return (
    <div className="clock">
      <div style={{ fontSize: "24px" }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}

export default function Timer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 120); // 2 minutes timer
  return (
    <>
      <MyTimer expiryTimestamp={time} />
    </>
  );
}
