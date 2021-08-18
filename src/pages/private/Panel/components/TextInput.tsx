import React from 'react'
import {useField, FieldHookConfig} from 'formik';
import { Input, Text, InvalidInput, InputDiv, Label } from './Inputs.styled'

interface TSProps{
    label?:string;
}

const TextInput = (props: TSProps & FieldHookConfig<string | number>): JSX.Element =>{
    const [field,meta] = useField(props);
    return (
        <InputDiv>
            <Text htmlFor={props.id || props.name}></Text>
            <Input {...field} {...props} />
            <Label>{props.label}</Label>
            {meta.touched && meta.error ? (<InvalidInput>{meta.error}</InvalidInput>) : null}
        </InputDiv>  
    );
};

export default TextInput;