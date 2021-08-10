import styled from "styled-components";

export const Section = styled.section<{ itemBackground?: string }>`
    width: 100%;
    margin:0px;
    min-height:200px;
    box-sizing: border-box;
    background: ${props => props.itemBackground || "${CSS.bg1}"};
`;