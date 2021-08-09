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
export const GridContainer = styled.div`
    display: grid;
    margin: 0 auto;
    margin-bottom: 100px;
    width: 1149px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    @media(max-width:1280px){
        grid-template-columns: 1fr 1fr;
        width: 90%;
    }
    @media(max-width:922px){
        grid-template-columns: 1fr;
        width: 80%;
    }
`;

export const GridItem = styled.div<{ itemHeight?: string }>`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    height: ${props => props.itemHeight || "160px;"};
    width: 558px;
    text-align: left;
    background-color: white;
    box-shadow:0px 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    img{
        width:20px;
        height: 20px;
        line-height: 20px;
        margin: 30px 0px 0px 20px;
    }
    @media(max-width:1280px){
        width: 100%;
        height: auto;
        padding: 0px 15px 30px 0px;
    }
    @media(max-width:922px){
        width: 558px;
        height: auto;
        margin: 0 auto;
        padding: 0px 15px 30px 0px;   
    }
    @media(max-width:683px){
        width: 100%;
        height: auto;
        padding: 0px 15px 30px 0px;
    }
`;

export const GridItemTitle = styled.h2`
    margin: 30px 0px 0px 19px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.675px;
    text-transform: uppercase;
    color: ${CSS.black};
`;

export const GridItemParagraph = styled.p`
    width: 90%;
    margin: 16px 0px 0px 19px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.6px;
    color: ${CSS.gray};
`;