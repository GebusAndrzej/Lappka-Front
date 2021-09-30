import styled, { css } from "styled-components";

export const Titlebar = styled.div`
    width:100%;
    height:100%;
    background-color:white;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);
    z-index:5;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-area: title;
`;

export const Title = styled.h2`
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.571428px;
    padding-left:20px;
    display: inline;
    @media (max-width: ${props => props.theme.break.mobile}){
        font-size: 70%;
    }
`;
export const SubTitle = styled.h2`
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.571428px;
    padding-left:5px;

    @media (max-width: ${props => props.theme.break.mobile}){
        font-size: 70%;
    }
`;

export const Titlebox = styled.div`
    margin-right: auto;
    display: flex;
`;

export const IconBox = styled.div`

`;

export const UserBox = styled.div<{ location?: "sidebar" }>`
    min-width:130px;
    min-height: 35px;
    margin-right: 120px;
    display: flex;
    justify-content: center;
    align-items: center;

    //show sidebar user when mobile
    @media (max-width: ${props => props.theme.break.tablet}){
        display:none;
        ${(props) => props.location == "sidebar" && css`
            display:flex;
            margin-bottom: 20px;
            width:100%;
            align-items: center;
            justify-content: flex-start;
        `}
    }
    //hide sidebar user when fullscreen
    @media (min-width: ${props => props.theme.break.tablet}){
        ${(props) => props.location == "sidebar" && css`
            display:none;
        `}
    }

    
`;

export const Avatar = styled.figure`
    max-height: 100%;
    position: relative;
    margin: 11px;

    & img {
        position: relative;
        max-height: 40px;
    }

    @media (max-width: ${props => props.theme.break.tablet}) {
        margin-right:10px;
        /* max-width:70px; */
    }
`;

export const Name = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    margin:0;
    letter-spacing: 0.7p;

    @media (max-width: ${props => props.theme.break.tablet}) {
        color:white;
    }
`;

export const Company = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.6px; 
    color: ${props => props.theme.colors.gray};
    cursor: pointer;

    @media (max-width: ${props => props.theme.break.tablet}) {
        color:white;
    }

    :hover{
        color:lightgray;
    }
`;

export const Burger = styled.button`
    margin-right: 15px;
    height:100%;
    border: none;
    background-color: inherit;

    @media (min-width: ${props => props.theme.break.tablet}) {
        display:none;
    }
`;

