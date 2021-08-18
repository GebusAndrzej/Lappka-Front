import styled from "styled-components";

export const Text = styled.label<{ fontWeight?: string }>`
`;

export const InvalidInput = styled.p`
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
    input,select{
        background: white;
        width: 100%;
        height: 56px;
        border: 0px;
        border-radius: 20px;
        position: relative;
        box-sizing: border-box;
        line-height: 28px;
        font-size: 16px;
        letter-spacing: -0.02em;
    }    
`;

// Input styles
export const Input = styled.input`
    color: ${props => props.theme.colors.black};
    text-indent: 16px;
    ::placeholder{
        opacity: 0;
    }
    
`;

// Select styles
export const SelInput = styled.select`
    color: ${props => props.theme.colors.black};
    text-indent: 14px;
    -webkit-appearance: none;
`;

export const Option = styled.option`
`;

// File Input styles
export const FiInput = styled.input`
    opacity: 0;
    
`;

// Active Label / Placeholder 

export const Label = styled.label`
    position: absolute;
    pointer-events: none;
    transition: 0.3s ease all;
    opacity: 0.5;
    color: ${props => props.theme.colors.gray};
    mix-blend-mode: normal;
    left: 18px;
    letter-spacing: -0.02em;
    top: 19px;
    font-size: 16px;
    ${Input}:focus ~ &,
    ${Input}:not(:placeholder-shown) ~ &,
    ${SelInput}:valid ~ &
    {
        top: 8px;
        font-size: 11px;
    }
`;


