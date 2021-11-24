// import { withTheme } from '@rjsf/core';
import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import { JSONSchema7 } from "json-schema";

import 'antd/dist/antd.css';
import widgets from './widgets';

const Form = withTheme(AntDTheme);

interface SchemaFormProps {
  schema: JSONSchema7,
  uiSchema: any,
  onChange?:(val: any) => void,
  onSubmit?:() => void,
  onError?:() => void,
}

export const SchemaForm = ({ schema, uiSchema, onChange, onSubmit, onError }: SchemaFormProps) => { 
  return (
    <Form schema={schema}
        uiSchema={uiSchema}
        onChange={onChange}
        onSubmit={onSubmit}
        onError={onError}
        widgets={{ ...widgets }}
    />
  )
}
