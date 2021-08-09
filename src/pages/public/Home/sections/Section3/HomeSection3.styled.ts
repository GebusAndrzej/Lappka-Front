import { CSS } from '../../../../../static/cssStatic';
import styled from 'styled-components';

export const SectionTitle = styled.h1`
    padding:60px;
    margin-top: 40px;
    margin-bottom: 0px;
    font-family: 'Ubuntu';
    font-size: 38px;
    line-height: 48px;
    text-align: center;
    letter-spacing: 1.425px;
    color: ${CSS.black};
`;
export const ColorChange = styled.span`
    color: ${CSS.green};
`;

export const GridContainer = styled.div`
    display: grid;
    margin: 0 auto;
    width: 1149px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    padding-bottom: 5%;
    @media(max-width:1280px){
        grid-template-columns: 1fr 1fr;
        width: 90%;
        padding-bottom: 5%;
        margin: 0 auto;
        
    }
    @media(max-width:922px){
        grid-template-columns: 1fr;
        width: 80%;
        padding-bottom: 10%;
    }
`;

export const GridItem = styled.div<{ itemHeight?: string }>`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    height: ${props => props.itemHeight || "100px;"};
    width: 558px;
    background-color: ${CSS.bg2};
    text-align: left;
    img{
        width:36px;
        height: 36px;
        line-height: 20px;
        margin: 0px 19px 0px 0px;
    }
    @media(max-width:1280px){
        width: 100%;
        height: auto;
    }
    @media(max-width:922px){
        width: 558px;
        height: auto;
        margin: 0 auto; 
    }
    @media(max-width:683px){
        width: 100%;
        height: auto;
    }
`;


export const GridItemParagraph = styled.p`
    width: 100%;
    margin: 0px 0px 0px 0px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 27px;
    letter-spacing: 0.6px;
    color: ${CSS.gray};
`;