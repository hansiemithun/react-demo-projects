import React, { useState } from 'react';
import { SchemaForm } from '../../schema-form';
import { JSONSchema7 } from "json-schema";

import './rjsf.css';

const schema: JSONSchema7 = {
  title: "Form Elements",
  type: "object",
  required: ["name", "email"],
  properties: {
    name: {
      type: "string",
      title: "Textbox for Name"
    },
    done: { type: "boolean", title: "Custom Switch Widget for Boolean", default: false },
    email: { "title": "Email", type: 'string', format: 'email', maxLength: 30 },
    gender: {
      "type": "string",
      "title": "Dropdown for Gender",
      default: "Male",
      "enum": [
        "Male",
        "Female",
        "Others"
      ]
    }
  }
};

const uiSchema = {
  name: {
    "ui:field": "string",
    "ui:emptyValue": "hello"
  },
  done: {
    'ui:widget': 'switch',
    'ui:inline': true,
    'ui:help': 'This is help text for Custom Switch!',
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

const fetchFormData = () => {
  console.log('fetchFormData called...');
  setTimeout(() => {
    console.log('fetchFormData now setting');
    // setFormData({ name: 'Test' })
  }, 3000);
};


export function ReactJsonSchema() {
  const [formData, setFormData] = useState({});

  // fetchFormData();

  return (
    <div className="App">
      <SchemaForm
        schema={schema}
        formData={formData}
        onChange={changedData}
        onSubmit={() => log('submitted')}
        onError={() => log('error')}
        uiSchema={uiSchema} />
    </div>
  );
}
