import styled, { css } from "styled-components";

export const Bar = styled.div<{ variant: "date" | "first-row" | "second-row" | "third-row" }>`
    display:flex;
    flex-direction: row;

    ${(props) => props.variant == "date" && css`
        align-items: center;
        justify-content: flex-end;
    `}

    ${(props) => props.variant == "first-row" && css`
        align-items: center;
        justify-content: space-around;
    `}

    ${(props) => props.variant == "second-row" && css`
        display:grid;
        grid-template-columns: 2fr 1fr;
    `}

    ${(props) => props.variant == "third-row" && css`
        align-items: center;
    `}
    
`;

export const ItemWrapper = styled.div<{ variant?: "first-row" | "second-row" | "third-row" }>`
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 12px;
    min-width:10px;
    min-height: 10px;
    padding:10px;
    margin:5px;
    margin-bottom:15px;

    ${(props) => props.variant == "first-row" && css`
        border-radius: 20px;
        width:21.5%;
        height:97px;
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    `}

    ${(props) => props.variant == "second-row" && css`
        border-radius: 20px;
        height:345px;
        width: 95%;
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `}

    ${(props) => props.variant == "third-row" && css`
        border-radius: 20px;
        height:345px;
        width: 100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `}
`;

// first row
export const IconFigure = styled.figure`
    border-radius: 50%;
    background-color: ${props => props.theme.colors.bg1};
    width:56px;
    height: 56px;
    margin:16px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        height:30px;
        width:30px;
        path {
            fill: ${props => props.theme.colors.lightgreen}
        }
        ellipse {
            stroke: ${props => props.theme.colors.lightgreen}
            
        }
    }
`;

export const Title = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: ${props => props.theme.colors.gray};
    margin:2px;
`;

export const Value = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color:black;
    margin:0;
`;



