import styled from "styled-components";

export const  Input = styled.input`

`;

export const SelInput = styled.select`
`;

export const Option = styled.option`
    color: ${props => props.theme.colors.gray};
    mix-blend-mode: normal;
    opacity: .5;
`;

export const FiInput = styled.input`
    opacity: 0;
`;
export const InputDiv = styled.div`
input,select{
    background: white;
    width: 100%;
    height: 56px;
    border: 0px;
    border-radius: 20px;
    padding: 0px;
    color: ${props => props.theme.colors.black};
    text-indent: 1.5em;
    line-height: 28px;
    font-size: 16px;
    letter-spacing: -0.02em;
    ::placeholder {
        color: ${props => props.theme.colors.gray};
        mix-blend-mode: normal;
        opacity: .5;
    }
}
`;

export const Text = styled.label<{ fontWeight?: string }>`
font-family: Ubuntu;
font-style: normal;
font-weight: ${props => props.fontWeight || "300"};
`;

export const  InvalidInput= styled.p`

`;