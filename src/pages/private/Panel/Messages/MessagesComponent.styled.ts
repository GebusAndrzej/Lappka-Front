import styled from "styled-components";

export const MessagesWrapper = styled.div`
    display:grid;
    grid-template-columns: 350px 1fr;
    height:100%;
    transition-duration: .7s;

    &.wide {
        grid-template-columns: 500px 1fr;
        transition-duration: .7s;

        @media (max-width: ${props => props.theme.break.tablet}) {
        grid-template-columns: 1fr;
    }
    }
    @media (max-width: ${props => props.theme.break.tablet}) {
        grid-template-columns: 1fr;
    }

`;