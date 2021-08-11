import React from 'react'
import {useField, FieldHookConfig} from 'formik';
import { Input, Text, InvalidMail } from '../sections/Newsletter/NewsletterSection.styled';

interface TSProps{
    label?:string;
}

const EmailInput = (props: TSProps & FieldHookConfig<string | number>): JSX.Element =>{
    const [field,meta] = useField(props);
    return (
        <div>
        {props.label}
            <Text htmlFor={props.id || props.name}>{props.label}</Text>
            <Input {...field} {...props} />
            {meta.touched && meta.error ? (<Text><InvalidMail className="error">{meta.error}</InvalidMail></Text>) : null}
        </div>  
    );
};

export default EmailInput;