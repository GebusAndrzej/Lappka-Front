import styled from "styled-components";
import DatePicker from "react-datepicker"

export const Text = styled.label<{ fontWeight?: string }>`
`;

export const InvalidInput = styled.p`
    position: absolute;
    top:42px;
    transition: 0.1s ease all;
    opacity: 1;
    color: red;
    mix-blend-mode: normal;
    left: 18px;
    letter-spacing: -0.02em;
    font-size: 16px;
`;

export const Icon = styled.div<{ top?: string }>`
    position: absolute;
    top: ${props => props.top || "20px"};
    right:20px;
`;

//Inputs Wrapper + default proporties
export const InputDiv = styled.div`
    position: relative;
    background-color:white;
    border-radius: 20px;
    box-shadow: 0px 0px 20px rgba(200,200,200,0.3);

    input,select{
        width: 100%;
        height: 56px;
        border: 0px;
        border-radius: 20px;
        position: relative;
        box-sizing: border-box;
        line-height: 18px;
        font-size: 16px;
        letter-spacing: -0.02em;
        text-indent: 18px;
        outline: none;

    }    
    :hover,:focus-within,:active{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.15);
    }
    
    &.error{
        background: #F9E3E3;
    }
`;

// Input styles
export const Input = styled.input`
    color: ${props => props.theme.colors.black};
    background-color:transparent;
    display: block;
    padding-top: 10px;
    text-indent: 16px;
    line-height: 18px;
    ::placeholder{
        opacity: 0;
    }

    
`;

// Select styles
export const SelInput = styled.select`
    background-color:transparent;
    color: ${props => props.theme.colors.black};
    display: block;
    padding-top: 10px;
    text-indent: 14px;
    -webkit-appearance: none;
`;

export const Option = styled.option`
`;

// File Input styles
export const FiInput = styled.input`
    opacity: 0;
    
`;



export const CustomDatePicker = styled(DatePicker)`
    background-color:transparent;

    padding-top: 0px;
    display:flex;
    align-items:center;
    justify-content: center;
    text-align:right;
    padding-right: 50px;
    ::placeholder{
        opacity: 0;
    }
`;

export const DescriptionField = styled.textarea`
    display: block;
    width:100%;
    height:100%;
    border:none;
    background-color:transparent;
    box-sizing: border-box;
    min-height:150px;
    resize: vertical;
    line-height: 22px;
    font-size: 16px;
    letter-spacing: -0.02em;
    padding: 20px 18px;
    :active{
        outline: none;
        border:none;
    }
`;

// Active Label / Placeholder 

export const Label = styled.label`
    width:80%;
    position: absolute;
    justify-content: center;
    word-wrap: break-word;
    pointer-events: none;
    transition: 0.1s ease all;
    opacity: 0.5;
    color: ${props => props.theme.colors.gray};
    mix-blend-mode: normal;
    left: 18px;
    letter-spacing: -0.02em;
    top: 19px;
    font-size: 16px;
    ${Input}:focus ~ &,
    ${Input}:not(:placeholder-shown) ~ &,
    ${SelInput}:valid ~ &,
    ${DescriptionField}:valid ~ &
    {
        position: absolute;
        top: 8px;
        font-size: 11px;
    }
`;


