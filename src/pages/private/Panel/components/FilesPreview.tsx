import styled from "styled-components";
import React from 'react'
import { FieldHookConfig} from 'formik';

// function returnFileSize(number<) {
//     if(number < 1024) {
//       return number + 'bytes';
//     } else if(number >= 1024 && number < 1048576) {
//       return (number/1024).toFixed(1) + 'KB';
//     } else if(number >= 1048576) {
//       return (number/1048576).toFixed(1) + 'MB';
//     }
//   }
const ImagePreview = styled.img`

`;


interface TSProps{
    linkUrl?:string;
}

const updateImageDisplay = (props: TSProps & FieldHookConfig<Array<string>>): JSX.Element =>{
    return(
        <>
            {props.linkUrl} ? <ImagePreview src={URL.createObjectURL(props.linkUrl)} alt=""/>
        </>
    )
}
export default updateImageDisplay 