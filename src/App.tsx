import React from 'react';
import { SchemaForm } from './schema-form';
import { JSONSchema7 } from "json-schema";

import './App.css';

const schema: JSONSchema7 = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "title" },
    done: { type: "boolean", title: "Done?" }
  }
};

const uiSchema = {
  title: {
    "ui:field": "string",
    "ui:emptyValue": "hello"
  }
};

const log = (value: string) => {
  console.log(value);
}

function App() {
  return (
    <div className="App">
      <SchemaForm
        schema={schema}
        onChange={() => log('changed')}
        onSubmit={() => log('submitted')}
        onError={() => log('error')}
        uiSchema={uiSchema} />
    </div>
  );
}

export default App;
