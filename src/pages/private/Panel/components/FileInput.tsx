import React from 'react'
import { useField, FieldHookConfig } from 'formik';
import { FiInput, Text, InvalidInput, InputDiv, Label, Icon } from './Inputs.styled'
import { ReactComponent as SVG_Camera } from '../../../../assets/svg/camera.svg';
import FilesPreview from './FilesPreview';

interface TSProps {
    label?: string;
}

const FileInput = (props: TSProps & FieldHookConfig<File>): JSX.Element => {
    const [field, meta, helpers] = useField(props);

    function handleChange(e: any) {
        helpers.setValue(e.target.files[0]);
        // console.dir(e.currentTarget.files[0]);
    }

    return (
        <>
            <InputDiv className={meta.touched && meta.error ? "error" : "valid"}>
                <Icon top="15px"><SVG_Camera /></Icon>
                <Text htmlFor={props.id || props.name}></Text>
                <FiInput {...props} onChange={(e: any) => handleChange(e)} />
                <Label>{props.label}</Label>
                {meta.touched && meta.error ? (<InvalidInput>{meta.error}</InvalidInput>) : null}
            </InputDiv>

            {field.value ?
                <FilesPreview blob={new Blob([field.value])}></FilesPreview>
                :
                false}
        </>
    );
};

export default FileInput;