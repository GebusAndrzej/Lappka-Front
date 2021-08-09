import styled from "styled-components";
import { CSS } from '../../../../../static/cssStatic'
const tablet = "1200px"

export const Grid = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    font-family: "Ubuntu";
    grid-gap:30px;
    width:1149px;
    margin: auto;

    @media (max-width: ${tablet}) {
        width: 95%;
        grid-template-columns: 1fr;
    }
`;

export const Wrapper = styled.div`
    width:558px;
    display:flex;
    flex-direction: column;
    padding-top:60px;
    padding-bottom: 40px;

    @media (max-width: ${tablet}) {
        margin:auto;
        width:70%;
        justify-content: center;
        align-items: center;
    }

`;

export const H2 = styled.h2`
    color: ${CSS.black};
    font-weight: 700;
    font-weight: bold;
    font-family: "Ubuntu";
    font-size: 2.5rem;
    letter-spacing: 1.425px;    
    padding-bottom: 10px;

    @media (max-width: ${tablet}) {
        text-align: center;
    }
`;

export const Text = styled.p`
    color: ${CSS.gray};
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 27px;
    letter-spacing: 0.6px;
    word-wrap: break-word;
    width: 100%;
`;

export const BottomText = styled.p`
    color: ${CSS.gray};
    font-size: 1.3rem;
    font-weight: bold;
`;

export const IMG = styled.img`
    max-width: 558px;

    @media (max-width:700px) {
        max-width: 100%;
    }
`;