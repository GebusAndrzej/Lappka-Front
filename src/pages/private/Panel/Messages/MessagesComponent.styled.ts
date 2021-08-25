import styled from "styled-components";

export const MessagesWrapper = styled.div`
    display:grid;
    grid-template-columns: 350px 1fr;
    height:100%;

    @media (max-width: ${props => props.theme.break.tablet}) {
        grid-template-columns: 1fr;
    }
`;