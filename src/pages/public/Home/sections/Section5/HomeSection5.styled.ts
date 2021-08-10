import styled from "styled-components";
import { CSS } from '../../../../../static/cssStatic'

// container for all cards
export const Container = styled.div`
    padding-top: 200px;
    width:100%;
    min-height:391px;
    margin:auto;
    position: relative;
    padding-bottom: 200px;
`;

// each card
export const Card = styled.div`
    width:730px;
    height:391px;
    box-shadow: 0px 18px 52.8537px rgba(215, 228, 249, 0.5);
    border-radius: 20px;
    background-color:white;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:10%;
    box-sizing:border-box;
    color: ${CSS.colors.gray};
    text-align: center;
    font-size: 17px;
    line-height: 27px;
    position: relative;

    ::before{
        content: "''";
        opacity:.1;
        font-size:240px;
        font-family: Georgia, 'Times New Roman', Times, serif;
        color:${CSS.colors.green};
        position: absolute;
        top: 130px;
    }

    @media (max-width: ${CSS.break.tablet}) {
        font-size: 14px;
        line-height: 17px;
        width:70vw;
        height: auto;
    }
    @media (max-width: ${CSS.break.mobile}) {
        width:90vw;
    }
`;

export const Person = styled.h3`
    color: ${CSS.colors.gray};
    font-family: "Ubuntu";
    font-size: 20px;
    line-height: 23px;
    margin:0;
    margin-top:20px;
`;

export const Age = styled.h5`
    color: ${CSS.colors.gray};
    font-family: "Ubuntu";
    font-size: 16px;
    line-height: 18px;
    margin:0;
    margin-top:5px;
    font-weight: 500;
`;



