import { FieldHookConfig, useField } from 'formik'
import React from 'react'
// import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css';
import { CustomDatePicker, Icon, InputDiv, InvalidInput, Label} from './Inputs.styled';
import { ReactComponent as SVG_Date } from '../../../../assets/svg/date_icon.svg';


interface OtherProps {
    label?: string
}

export const DateInput = (props: FieldHookConfig<Date> & OtherProps): JSX.Element => {
    const [field, meta, helpers] = useField(props);

    // console.log(helpers)

    return (
        <InputDiv className={meta.touched && meta.error ? "error" : "valid"}>

            <CustomDatePicker
                placeholderText="none"
                dateFormat="dd-MM-yyyy"
                selected={field.value}
                // value={field.value}

                onChange={(date: Date) => {
                    helpers.setValue(date)
                }}
            >
            </CustomDatePicker>
            <Label>{props.label}</Label>
            <Icon top="18px"><SVG_Date/></Icon>
            {meta.touched && meta.error ? (<InvalidInput className="error">{meta.error}</InvalidInput>) : null}
        </InputDiv>
    )
}
