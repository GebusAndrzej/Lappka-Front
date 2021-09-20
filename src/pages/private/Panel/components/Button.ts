import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const ClearLink = styled(Link)`
    text-decoration:none;
    color: gray;
    cursor: pointer;
`;

export const Button = styled.button`
    margin: 50px 0px;
    display: block;
    height: 60px;
    width: 335px;
    border: 0px;
    margin-left: auto;
    border-radius: 16px;
    background: ${props => props.theme.colors.green};
    padding: 0;
    
    color: white;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    cursor: pointer;
    word-wrap: break-word;
    cursor: pointer;

    @media(max-width: ${props => props.theme.break.mobile}){
            width: 100%;
            margin: 0 auto;
            margin-top: 30px;
    };
`;