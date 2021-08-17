import React from 'react'
import {useField, FieldHookConfig} from 'formik';
import { Input, Text, InvalidInput, InputDiv } from './Inputs.styled'

interface TSProps{
    label?:string;
}

const TextInput = (props: TSProps & FieldHookConfig<string | number>): JSX.Element =>{
    const [field,meta] = useField(props);
    return (
        <InputDiv>
        {props.label}
            <Text htmlFor={props.id || props.name}>{props.label}</Text>
            <Input {...field} {...props} />
            {meta.touched && meta.error ? (<Text><InvalidInput>{meta.error}</InvalidInput></Text>) : null}
        </InputDiv>  
    );
};

export default TextInput;