import styled from "styled-components";

export const Section = styled.section<{ itemBackground?: string }>`
    width: 100%;
    margin:0px;
    min-height:180px;
    box-sizing: border-box;
    background: ${props => props.itemBackground || props.theme.colors.bg1};
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;