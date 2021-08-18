import React from 'react'
import {useField, FieldHookConfig} from 'formik';
import { SelInput, Text, InvalidInput, InputDiv, Label, Option } from './Inputs.styled'

interface TSProps{
    label?:string,
    optionsArray?:Array<string>,
}

const SelectInput = (props: TSProps & FieldHookConfig<string | number>): JSX.Element =>{
    const [field,meta] = useField(props);
    return (
        <InputDiv>
        
            <Text htmlFor={props.id || props.name}></Text>
            <SelInput {...field} {...props}>
                {props.optionsArray?.map((x) => (<Option value={x} key={x}>{x}</Option>))}
            </SelInput>
            <Label>{props.label}</Label>
            {meta.touched && meta.error ? (<InvalidInput className="error">{meta.error}</InvalidInput>) : null}
        </InputDiv>  
    );
};

export default SelectInput;