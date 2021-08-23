import React, { FunctionComponent } from 'react'
import {useField, FieldHookConfig} from 'formik';
import { Input, Text, InvalidInput, InputDiv, Label, Icon } from './Inputs.styled'

interface TSProps{
    label?:string,
    svg?:FunctionComponent,
}

const TextInput = (props: TSProps & FieldHookConfig<string | number | FunctionComponent>): JSX.Element =>{
    const [field,meta] = useField(props);
    return (
        <InputDiv className={meta.touched && meta.error ? "error" : "valid"}>
            <Text htmlFor={props.id || props.name}></Text>
            <Input placeholder="placeholder" {...field} {...props} />
            <Label>{props.label}</Label>
            {meta.touched && meta.error ? (<InvalidInput>{meta.error}</InvalidInput>) : null}
            {props.svg ? <Icon top="10px"><props.svg/></Icon> : null}
        </InputDiv>  
    );
};

export default TextInput;