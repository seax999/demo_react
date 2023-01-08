import React, { useState, useMemo, useRef, useEffect } from "react";
import { Statistic } from "antd";
import moment from "moment";
const { Countdown } = Statistic;

/**
 * @description 基于 moment 和 antd 组件搭配 React.memo 封装的
 * @param props {deadline: number, Finish: ()=>void}
 * @returns
 */
const CountDown = (props) => {
  return <Countdown title="Countdown" value={moment().add(props.deadline, "s")} onFinish={props.Finish} />;
};

export default React.memo(CountDown, (oldProps, props) => {
  if (JSON.stringify(oldProps.Finish) === JSON.stringify(props.Finish)) return false;
});

/**
 * @description 基于 moment 封装的倒计时
 * @param props {deadline: number, Finish: ()=>void}
 * @returns
 */
export const HandleWriteCountDown = (props) => {
  const { deadline, Finish } = props;
  const timeLeft = useRef(deadline);
  const [refresh, setRefresh] = useState(1);

  useEffect(() => {
    let times = setInterval(() => {
      timeLeft.current = timeLeft.current - 1;
      setRefresh((refresh) => refresh + 1);
      if (timeLeft.current === 0) {
        clearInterval(times);
        Finish();
      }
    }, 1000);
    return () => {
      clearInterval(times);
    };
  }, []);

  const getTime = useMemo(() => {
    const currentTime = moment.duration(timeLeft.current, "s");
    const h = currentTime.hours();
    const m = currentTime.minutes();
    const s = currentTime.seconds();
    return moment().set({ h, m, s }).format("HH:mm:ss");
  }, [timeLeft.current]);

  return <p>{getTime}</p>;
};
