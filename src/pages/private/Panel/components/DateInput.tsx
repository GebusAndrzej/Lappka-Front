import { FieldHookConfig, useField } from 'formik'
import React from 'react'
// import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css';
import { CustomDatePicker, Icon, InputDiv, InvalidInput } from './Inputs.styled';

interface OtherProps {
    label?: string
}

export const DateInput = (props: FieldHookConfig<Date> & OtherProps): JSX.Element => {
    const [field, meta, helpers] = useField(props);

    // console.log(helpers)

    return (
        <InputDiv>

            <CustomDatePicker
                placeholderText={props.label}
                dateFormat="dd-MM-yyyy"
                selected={field.value}
                // value={field.value}

                onChange={(date: Date) => {
                    helpers.setValue(date)
                }}
            >
            </CustomDatePicker>

            {/* <Label>{props.label}</Label> */}
            <Icon></Icon>
            {meta.touched && meta.error ? (<InvalidInput className="error">{meta.error}</InvalidInput>) : null}
        </InputDiv>
    )
}
