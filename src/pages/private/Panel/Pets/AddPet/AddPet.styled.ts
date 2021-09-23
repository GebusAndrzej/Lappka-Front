import styled, { css } from "styled-components";

export const Title = styled.h2`
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.571428px;
    color: ${props => props.theme.colors.black};
`;

export const GridContainer = styled.div`
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    @media(max-width: ${props => props.theme.break.tablet} ){ 
        grid-template-columns: 1fr;
    }
`;

export const GridItem = styled.div<{ background?: string, colspan?: string, variant?: "flex-row" }>`
    /* background: ${props => props.background || "white"}; */
    width: 100%;
    /* height: 56px; */
    border: 0px;
    border-radius: 20px;
    padding: 0px;
    color: ${props => props.theme.colors.black};

    ${props => props.colspan && css`
        width:100%;
        grid-column: span ${props.colspan};

        @media(max-width: ${props => props.theme.break.tablet}){
            grid-column: span 1;
        }
    `}

    ${props => props.variant == "flex-row" && css`
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
        gap: 10px
    `}
`;

