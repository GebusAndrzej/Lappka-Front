import styled, { css } from "styled-components";
import { CSS } from '../../../../static/cssStatic'

export const Grid = styled.div`
    box-sizing: border-box;
    max-width: 100%;
    height: 90vh;
    display:grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const Wrapper = styled.div<{ direction?: string }>`
    position: relative;
    display:flex;
    flex-direction: column;
    ${(props) => props.direction == "row" && css`
        flex-direction: row;
    `}
`;

export const Center = styled.div`
    align-items: center;
    font-size: 38px;
    vertical-align: baseline;
`;

export const P = styled.p`
    color: ${CSS.gray};
`;

export const H2 = styled.span<{ color?: string }>`
    font-family: Ubuntu;
    margin: 0;
    display: inline-block;
    color: ${CSS.black};
    word-break: break-all;
    word-wrap: break-word;
    ${(props) => props.color == "green" && css`
        color: ${CSS.green};
    `}
`;


export const Img1 = styled.img`
    position: absolute;
    max-width: 272px;
`;
export const Img2 = styled.img`
    left:275px;
    position: absolute;
    max-width: 272px;
`;
export const Img3 = styled.img`
    left:275px;
    top:170px;
    position:absolute;
    max-width: 272px;
`;

export const BGBox = styled.div`
    width:90%;
    height:90%;
    position: absolute;
    right: 0;
    top:0;
    background: linear-gradient(135deg, #57D382 0.51%, #44A386 100%);
    border-radius: 0px 0px 0px 40px;
    z-index: -9;
`;

