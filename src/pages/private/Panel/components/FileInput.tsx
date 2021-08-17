import React from 'react'
import {useField, FieldHookConfig} from 'formik';
import { FiInput, Text, InvalidInput, InputDiv } from './Inputs.styled'

interface TSProps{
    label?:string;
}

const FileInput = (props: TSProps & FieldHookConfig<Array<File>>): JSX.Element =>{
    const [field,meta] = useField(props);
    return (
        <InputDiv>
        {props.label}
            <Text htmlFor={props.id || props.name}>{props.label}</Text>
            <FiInput {...field} {...props} />
            {meta.touched && meta.error ? (<Text><InvalidInput>{meta.error}</InvalidInput></Text>) : null}
        </InputDiv>  
    );
};

export default FileInput;