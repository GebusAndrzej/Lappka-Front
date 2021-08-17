import React from 'react'
import {useField, FieldHookConfig} from 'formik';
import { SelInput, Text, InvalidInput, InputDiv } from './Inputs.styled'

interface TSProps{
    label?:string;
}

const SelectInput = (props: TSProps & FieldHookConfig<string | number>): JSX.Element =>{
    const [field,meta] = useField(props);
    return (
        <InputDiv>
        {props.label}
            <Text htmlFor={props.id || props.name}></Text>
            <SelInput {...field} {...props} ></SelInput>
            {meta.touched && meta.error ? (<Text><InvalidInput className="error">{meta.error}</InvalidInput></Text>) : null}
        </InputDiv>  
    );
};

export default SelectInput;