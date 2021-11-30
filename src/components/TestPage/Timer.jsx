import React from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
  });

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
  time.setSeconds(time.getSeconds() + 300); // 10 minutes timer
  return (
    <>
      <MyTimer expiryTimestamp={time} />
    </>
  );
}
