import { useEffect, useState } from 'react';
import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import { JSONSchema7 } from "json-schema";

import widgets from './widgets';

import 'antd/dist/antd.css';

const Form = withTheme(AntDTheme);

interface SchemaFormProps {
  schema: JSONSchema7,
  uiSchema: any,
  formData?: any,
  onChange?:(val: any) => void,
  onSubmit?:() => void,
  onError?:() => void,
}

export const SchemaForm = ({ schema, uiSchema, formData, onChange, onSubmit, onError }: SchemaFormProps) => {
  const [schemaState, setSchemaState] = useState(schema);
  const [formDataState, setFormDataState] = useState(formData);

  useEffect(() => {
    setSchemaState(schema);
  }, [schema]);

  useEffect(() => {
    setFormDataState(formData);
  }, [formData]);

  return (
    <Form
        uiSchema={uiSchema}  
        schema={schemaState}
        formData={formDataState}
        onChange={onChange}
        onSubmit={onSubmit}
        onError={onError}
        widgets={{ ...widgets }}
    />
  )
}
