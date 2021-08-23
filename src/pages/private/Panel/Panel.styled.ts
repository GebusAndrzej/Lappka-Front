import styled from "styled-components";

export const PanelWrapper = styled.section`
    background-color: ${props => props.theme.colors.bg1};
    min-height:100vh;
    display:grid;
    grid-template-columns: 290px 1fr;
    grid-template-rows: 70px 1fr;
    grid-template-areas: 
    "sidebar title"
    "sidebar child";

    @media (max-width: ${props => props.theme.break.tablet}) {
        grid-template-columns: 1fr;
        grid-template-rows: 57px 1fr;
        grid-template-areas: 
        "title"
        "child";
    }
`;

export const Container = styled.div`
    overflow-x: auto;
    padding: 20px 30px;
    grid-area: child;

    @media (max-width: ${props => props.theme.break.tablet}) {
        padding: 20px;
        padding-top:20px;
    }

    @media (max-width: ${props => props.theme.break.mobile}) {
        padding: 15px;
        padding-top:15px;
    }
`;