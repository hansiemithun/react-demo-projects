// import { withTheme } from '@rjsf/core';
import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import { JSONSchema7 } from "json-schema";

import 'antd/dist/antd.css';

const Form = withTheme(AntDTheme);

// Make modifications to the theme with your own fields and widgets

const schema: JSONSchema7 = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};

const log = (type: string) => console.log.bind(console, type);

export const TestForm = () => {
  return (
    <Form schema={schema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
  )
}
