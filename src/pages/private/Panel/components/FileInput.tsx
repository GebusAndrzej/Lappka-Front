import React from 'react'
import {useField, FieldHookConfig} from 'formik';
import { FiInput, Text, InvalidInput, InputDiv, Label, Icon } from './Inputs.styled'
import { ReactComponent as SVG_Camera } from '../../../../assets/svg/camera.svg';


interface TSProps{
    label?:string;
}

const FileInput = (props: TSProps & FieldHookConfig<Array<File>>): JSX.Element =>{
    const [field,meta] = useField(props);
    return (
        <InputDiv>
            <Icon top="15px"><SVG_Camera/></Icon>
            <Text htmlFor={props.id || props.name}></Text>
            <FiInput {...field} {...props} />
            <Label>{props.label}</Label>
            {meta.touched && meta.error ? (<InvalidInput>{meta.error}</InvalidInput>) : null}
        </InputDiv>  
    );
};

export default FileInput;