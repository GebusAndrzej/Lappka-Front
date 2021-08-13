import styled from "styled-components";

export const Titlebar = styled.div`
    width:100%;
    height:100%;
    background-color:white;
    box-shadow: 0px 2px 48px rgba(0, 0, 0, 0.25);
    z-index:5;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const Title = styled.h2`
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;

    letter-spacing: 0.571428px;
    padding-left:20px;
    margin-right: auto;
`;

export const IconBox = styled.div`

`;

export const UserBox = styled.div`
    min-width:130px;
    min-height: 35px;
    display:flex;
    margin-right: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Avatar = styled.figure`
    max-height: 100%;
    position: relative;
    margin: 11px;

    & img {
        position: relative;
        max-height: 50px;
    }
`;

export const Name = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    margin:0;
    letter-spacing: 0.7p;
`;

export const Company = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.6px; 
    color: ${props => props.theme.colors.gray}
`;


