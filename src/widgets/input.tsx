import React from "react";
import { Input } from "antd";

function BaseInput(props: any) {
  return <Input onChange={event => props.onChange(event.target.value)} />;
}

export default BaseInput;
