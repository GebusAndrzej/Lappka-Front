import { CSS } from '../../../../../static/cssStatic';
import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid;
    margin: 0 auto;
    height: 177px;
    width: 1149px;
    grid-template-columns: 1fr 1fr 1fr;
    @media(max-width:1280px){
        grid-template-columns: 1fr 2fr;
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
    justify-content: space-between;
    /*
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
    }*/
`;


export const Center = styled.div`
    align-items: center;
    font-size: 38px;
    vertical-align: baseline;
`;
export const Logo = styled.img`
    line-height: 54px;
    margin-right:10px;
    margin-left:10px;
`;


export const H2 = styled.span<{
    color?: string,
    fontWeight?: string,
    fontSize?: string,
    marginTop?: string
}>`
    font-family: "Ubuntu";
    font-weight: 500;
    margin: 0;
    display: inline-block;
    color: ${CSS.black};
    letter-spacing: 1.425px;
    word-wrap: break-word;
    font-size: 2.5rem;
`