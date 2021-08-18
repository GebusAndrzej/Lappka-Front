import React from 'react'
import {useField, FieldHookConfig} from 'formik';
import { SelInput, Text, InvalidInput, InputDiv, Label, Option, Icon } from './Inputs.styled'
import { ReactComponent as SVG_Arrow } from '../../../../assets/svg/DropdownArrow.svg';

interface TSProps{
    label?:string,
    optionsArray?:Array<string>,
}

const SelectInput = (props: TSProps & FieldHookConfig<string | number>): JSX.Element =>{
    const [field,meta] = useField(props);
    return (
        <InputDiv>
            <Text htmlFor={props.id || props.name}></Text>
            <SelInput {...field} {...props} required>
                <Option hidden></Option>
                {props.optionsArray?.map((x) => (<Option value={x} key={x}>{x}</Option>))}
            </SelInput>
            <Label>{props.label}</Label>
            <Icon><SVG_Arrow /></Icon> 
            {meta.touched && meta.error ? (<InvalidInput className="error">{meta.error}</InvalidInput>) : null}
        </InputDiv>  
    );
};

export default SelectInput;