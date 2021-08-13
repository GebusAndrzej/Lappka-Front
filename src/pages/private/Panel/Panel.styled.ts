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
`;

export const Container = styled.div`
    margin:69px 32px 50px 31px;
`;