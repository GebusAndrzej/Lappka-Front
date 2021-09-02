import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import { useField, FieldHookConfig } from 'formik';

const InputDiv = styled.div`
    padding:0px;
    margin: auto;
    margin-top: 19px;
    margin-bottom: 0px;
    position: relative;
    background-color:white;
    border-radius: 10px;
    box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.05);
    width: 350px;
    height: 56px;
    border: 2px solid #BBBBBB;
    border-radius: 10px;
    :hover{
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
    }
    :active,:focus-within{
        border: 2px solid ${props => props.theme.colors.gray};
    }
    &.error{
        background: #F9E3E3;

    }
`;

const Input = styled.input`
    padding:0px;
    width:100%;
    color: ${props => props.theme.colors.black};
    background-color:transparent;
    display: block;
    position: relative;
    box-sizing: border-box;
    line-height: 54px;
    font-size: 18px;
    letter-spacing: 0.02em;
    text-indent: 50px;
    outline: none;    
    border: none;
    ::placeholder{
        color: lightgray;
    }

    
`;

const Label = styled.label`
    
`;

const SVG = styled.svg`
    width:25px;
    height:25px;
    position: absolute;
    left: 16px;
    top: 15px;
`;

const InvalidInput = styled.p`
  position: absolute;
    //top:42px;
    bottom: -32px;
    transition: 0.1s ease all;
    opacity: 1;
    color: red;
    mix-blend-mode: normal;
    left: 14px;
    letter-spacing: -0.02em;
    font-size: 13px;
`;

const Text = styled.label`

`;
const ShowPasswordButton = styled.button`
    position: absolute;
    top:0px;
    right: 8px;
    border: none;
    background: none;
    font-size: 28px;
    line-height: 52px;
`;

interface TSProps {
    label?: string,
    svg?: FunctionComponent,
}

const TextInput = (props: TSProps & FieldHookConfig<string | number | FunctionComponent>): JSX.Element => {
    const [field, meta] = useField(props);
    const [show, setShow] = React.useState(false)

    return (
        <InputDiv className={meta.touched && meta.error ? "error" : "valid"}>

            {props.svg ? <SVG><props.svg /></SVG> : null}

            <Text htmlFor={props.id || props.name}></Text>

            <Input placeholder="placeholder" {...field} {...props} type={props.type == "password" ? (show ? 'text' : 'password') : 'text'} />

            <Label>{props.label}</Label>
            {meta.touched && meta.error ? (<InvalidInput>{meta.error}</InvalidInput>) : null}

            {props.type == "password" ? <ShowPasswordButton tabIndex={-1} type="button" onClick={() => setShow(!show)}>{show ? '🐵' : '🙈'}</ShowPasswordButton> : null}
        </InputDiv>
    );
};

export default TextInput;