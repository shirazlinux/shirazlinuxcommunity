import React, { useState } from "react";
import "./timer.css";
export default function Timer() {
  let currentDate = Date.now();
  let futureDate = new Date(2023, 6, 13).getTime();
  const persianNumber = new Intl.NumberFormat("fa");
  const [leftDays, setDays] = useState(
    persianNumber.format(Math.floor((futureDate - currentDate) / 86_400_000))
  );
  const [leftHours, setHours] = useState(
    persianNumber.format(
      Math.floor(((futureDate - currentDate) % 86_400_000) / 3_600_000)
    )
  );
  const [leftMinutes, setMinutes] = useState(
    persianNumber.format(
      Math.floor(
        (((futureDate - currentDate) % 86_400_000) % 3_600_000) / 60_000
      )
    )
  );
  const [leftSeconds, setSeconds] = useState(
    persianNumber.format(
      Math.floor(
        ((((futureDate - currentDate) % 86_400_000) % 3_600_000) % 60_000) /
          1_000
      )
    )
  );
  setInterval(() => {
    currentDate = Date.now();

    setSeconds((prevSeconds) => {
      return (prevSeconds = persianNumber.format(
        Math.floor(
          ((((futureDate - currentDate) % 86_400_000) % 3_600_000) % 60_000) /
            1_000
        )
      ));
    });

    setMinutes((prevMinutes) => {
      return (prevMinutes = persianNumber.format(
        Math.floor(
          (((futureDate - currentDate) % 86_400_000) % 3_600_000) / 60_000
        )
      ));
    });
    setHours((prevHour) => {
      return (prevHour = persianNumber.format(
        Math.floor(((futureDate - currentDate) % 86_400_000) / 3_600_000)
      ));
    });

    setDays((prevDay) => {
      return (prevDay = persianNumber.format(
        Math.floor((futureDate - currentDate) / 86_400_000)
      ));
    });
  }, 1000);

  return (
    <div className="timer">
      <div className="timer_item">
        {leftDays} <span>روز</span>
      </div>
      <div className="timer_item">
        {leftHours} <span>ساعت</span>
      </div>
      <div className="timer_item">
        {leftMinutes} <span>دقیقه</span>
      </div>
      <div className="timer_item">
        {leftSeconds} <span>ثانیه</span>
      </div>
    </div>
  );
}
