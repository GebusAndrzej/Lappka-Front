import styled from 'styled-components';

export const SubmitButton = styled.button`
    margin:19px auto;
    width: 350px;
    height: 56px;
    border: none;
    border-radius: 10px;
    box-shadow:-4px 4px 10px rgba(0, 0, 0, 0.15);
    background: ${props => props.theme.colors.green};
    font-family: Ubuntu;
    color: white;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 56px;
    text-align: center;
    letter-spacing: 0.5px;
    text-transform: uppercase;
`;