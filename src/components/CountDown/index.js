import React from "react";
import { Statistic } from "antd";
import moment from "moment";
const { Countdown } = Statistic;

const CountDown = (props) => {
  return <Countdown title="Countdown" value={moment().add(props.deadline, "s")} onFinish={props.Finish} />;
};

export default React.memo(CountDown);
