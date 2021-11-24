import React from 'react';
import { SchemaForm } from './schema-form';
import { JSONSchema7 } from "json-schema";

import './App.css';


const schema: JSONSchema7 = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {
      type: "string",
      title: "title",
      
    },
    done: { type: "boolean", title: "Done?", default: false }
  }
};

const uiSchema = {
  title: {
    "ui:field": "string",
    "ui:emptyValue": "hello"
  },
  done: {
    'ui:widget': 'switch',
    'ui:inline': false,
    'ui:options': {
      checkedChildren: 'On',
      unCheckedChildren: 'Off',
    }
  }
};

const log = (value: string) => {
  console.log(value);
}

const changedData = (val: any) => {
  console.log('changedData => ', JSON.stringify(val));
}

function App() {
  return (
    <div className="App">
      <SchemaForm
        schema={schema}
        onChange={changedData}
        onSubmit={() => log('submitted')}
        onError={() => log('error')}
        uiSchema={uiSchema} />
    </div>
  );
}

export default App;
