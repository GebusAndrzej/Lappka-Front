import styled, { css } from "styled-components";

export const Grid = styled.div`
    display:grid;

    grid-template-areas: 
    "date date date date date date"
    "item item item item item item"
    "chart chart chart chart shelter shelter"
    "list list list list list list";
    gap: 20px;

    @media (max-width: ${props => props.theme.break.tablet}){
        margin-top:20px;
        grid-template-areas: 
        "shelter"
        "date"
        "item"
        "chart"
        "list";
        overflow-x: hidden;
    }
`;

export const Item = styled.div<{ variant: "chart" | "shelter" }>`
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 12px;
    min-width:10px;
    min-height: 10px;
    padding:10px;
    /* margin:5px;
    margin-bottom:15px; */
    box-sizing: border-box;

    ${(props) => props.variant == "chart" && css`
        grid-area: chart;
        padding: 0px;
        /* margin-left:20px;             */

        @media (max-width: ${props => props.theme.break.tablet}) {
            margin-right: 20px;
            margin-left: 20px;
        }

    `}
    ${(props) => props.variant == "shelter" && css`
        grid-area: shelter;
        /* margin-right: 20px; */
        @media (max-width: ${props => props.theme.break.tablet}) {
            width:49%;
            margin:auto;
        }
        @media (max-width: ${props => props.theme.break.mobile}) {
            width:90%;
            margin:auto;
        }
    `}
`;

export const Bar = styled.div<{ variant: "date" | "first-row" | "second-row" | "full-width" }>`
    display:flex;
    flex-direction: row;
    box-sizing: border-box;

    ${(props) => props.variant == "date" && css`
    align-items: center;
    justify-content: flex-end;
    grid-area: date;

    a button {
        margin:15px;
        margin-bottom: 0;
    }
    
    @media (max-width: ${props => props.theme.break.tablet}) {
            margin-top:40px;
            justify-content: center;
        }
    `}

    ${(props) => props.variant == "first-row" && css`
        align-items: center;
        justify-content: space-between;
        grid-area: item;
        flex-wrap: wrap;

        @media (max-width: ${props => props.theme.break.mobile}) {
            flex-direction: column;
        }
    `}

    ${(props) => props.variant == "full-width" && css`
        align-items: center;
        grid-area: list;
        overflow-y: auto;
        /* margin-left:20px; */
        /* padding-right: 20px; */
        margin-bottom: 40px;
    `}
    
`;

export const ItemWrapper = styled.div<{ variant?: "date" | "first-row" | "full-width" }>`
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 12px;
    min-width:10px;
    min-height: 10px;
    margin-bottom:15px;
    box-sizing: border-box;

    ${(props) => props.variant == "first-row" && css`
        border-radius: 20px;
        width:22.5%;
        height:97px;
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        @media (max-width: ${props => props.theme.break.tablet}) {
            width:49%;
        }
        @media (max-width: ${props => props.theme.break.mobile}) {
            width:90%;
        }
    `}

    ${(props) => props.variant == "full-width" && css`
        display: block;
        border-radius: 20px;
        min-height:345px;
        width: 100%;
        min-width: 800px;
        padding: 25px;
        @media (max-width: ${props => props.theme.break.tablet}) {
            margin-left: 20px;
            margin-right: 20px;
        }

    `}

    ${(props) => props.variant == "date" && css`
        padding:9px;
        margin-right: 10px;
        height:38px;
        min-width: 38px;
        display:flex;
        gap:5px;
    `}

`;

export const Date = styled.input`

`;

// first row
export const IconFigure = styled.figure`
    border-radius: 50%;
    background-color: ${props => props.theme.colors.bg2};
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

export const Title = styled.p<{ variant?: "light" }>`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: ${props => props.theme.colors.gray};
    margin:2px;

    ${(props) => props.variant == "light" && css`
        font-size: 12px;
    `}
`;

export const Value = styled.p<{ variant?: "light" }>`
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color:black;
    margin:0;

    ${(props) => props.variant == "light" && css`
        font-weight: normal;
    `}
`;



