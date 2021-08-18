import styled from "styled-components";
import React from 'react'

const ImagePreview = styled.img`
    width: 100px;
    height:100px;
    margin:10px;
    margin-top:20px;
    border-radius: 8px;
`;


interface TSProps {
    blob: Blob;
}

const FilesPreview = (props: TSProps): JSX.Element => {
    const url = URL.createObjectURL(props.blob)

    return (
        <>
            {props.blob ?
                <>
                    <ImagePreview src={url} alt="image preview" />

                </>

                :
                false
            }
        </>
    )
}
export default FilesPreview