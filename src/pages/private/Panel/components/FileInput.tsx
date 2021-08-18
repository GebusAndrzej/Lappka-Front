import React from 'react'
import {useField, FieldHookConfig} from 'formik';
import { FiInput, Text, InvalidInput, InputDiv, Label } from './Inputs.styled'

interface TSProps{
    label?:string;
}

const FileInput = (props: TSProps & FieldHookConfig<Array<File>>): JSX.Element =>{
    const [field,meta] = useField(props);
    return (
        <InputDiv>
            <Text htmlFor={props.id || props.name}></Text>
            <FiInput {...field} {...props} />
            <Label>{props.label}</Label>
            {meta.touched && meta.error ? (<InvalidInput>{meta.error}</InvalidInput>) : null}
        </InputDiv>  
    );
};

export default FileInput;