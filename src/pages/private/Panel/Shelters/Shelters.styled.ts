import styled, { css } from "styled-components";

export const Icon = styled.button<{ color?: "green" | "red" }>`

    background-color: inherit;
    border:none;
    height:40px;
    width:40px;
    cursor: pointer;

    svg {
        width:80%;
        height:80%;
    }
    :hover {
        ${(props) => props.color == "red" && css`
            svg path {
                fill:red;
            }
        `}
        ${(props) => props.color == "green" && css`
            svg path {
                fill:${props => props.theme.colors.green};
            }
        `}
    }


`;

export const TD = styled.td`
    color:red;
    /* display:none; */

    @media (max-width: 840px) {
        display:none;
    }
`;
