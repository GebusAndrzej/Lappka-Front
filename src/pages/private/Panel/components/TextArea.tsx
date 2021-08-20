import React from 'react'
import { useField, FieldHookConfig } from 'formik';
import { InvalidInput, InputDiv, Label, Icon, DescriptionField } from './Inputs.styled'

interface TSProps {
    label?: string,
}

function TextArea(props: TSProps & FieldHookConfig<string>): JSX.Element {
    const [field, meta] = useField(props);

    return (
        <InputDiv>
            <DescriptionField {...field} required></DescriptionField>
            <Label>{props.label}</Label>
            <Icon></Icon>
            {meta.touched && meta.error ? (<InvalidInput className="error">{meta.error}</InvalidInput>) : null}
        </InputDiv>
    );
}

export default TextArea
