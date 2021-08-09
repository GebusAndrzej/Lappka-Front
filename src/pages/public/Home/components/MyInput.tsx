import React from 'react'
import { withFormik, useField, Form, FormikProps, Formik, FieldHookConfig, FormikHelpers} from 'formik';
import { Input, Text } from '../sections/Newsletter/NewsletterSection.styled';
import * as Yup from "yup";


interface TSProps{
    label?:string;
}
interface MyFormProps {
    initialEmail?: string;

}

const MyInput = (props: TSProps & FieldHookConfig<string | number>): JSX.Element =>{
    const [field, meta] = useField(props);
    return (
        <div>
        {props.label}
            <Text htmlFor={props.id || props.name}>{props.label}</Text>
            <Input {...field} {...props} />
        </div>
    );
};

export default MyInput;