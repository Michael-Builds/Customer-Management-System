import React from "react";
import { Progress } from "antd";

const ProgressComponent = ({ percent }: any) => {
  return <Progress percent={percent} showInfo={false} />;
};

export default ProgressComponent;
