import styled, { css } from "styled-components";
// import { CSS } from '../../../../../static/cssStatic'
import { CSS } from '../../../../../static/cssStatic'

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

export const Container = styled.div`
    padding-left: 20%;
    padding-top: 10%;
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
    margin-top: 20px;
    color: ${CSS.gray};
`;

export const H2 = styled.span<{ color?: string, fontWeight?: string, fontSize?: string }>`
    font-family: "Ubuntu";
    font-weight: 500;
    margin: 0;
    display: inline-block;
    color: ${CSS.black};
    /* word-break: break-all; */
    word-wrap: break-word;
    ${(props) => props.color == "green" && css`
        color: ${CSS.green};
    `}
    ${(props) => props.fontWeight && css`
        font-weight: ${props.fontWeight};
        & * {
            font-weight: ${props.fontWeight};

        }
    `}
    ${(props) => props.fontSize && css`
        font-size: ${props.fontSize};
        & * {
            font-size: ${props.fontSize};

        }
    `}
`;


export const Img1 = styled.img`
    position: absolute;
    max-width: 272px;
    /* width:50%; */
`;
export const Img2 = styled.img`
    left:300px;
    position: absolute;
    max-width: 272px;
    /* width: 50%; */
`;
export const Img3 = styled.img`
    left:300px;
    top:170px;
    position:absolute;
    max-width: 272px;
    /* width:50%; */
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

