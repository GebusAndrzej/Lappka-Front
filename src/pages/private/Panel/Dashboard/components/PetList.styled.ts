import styled from "styled-components";

export const PetListContainer = styled.div`
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    min-width:600px;
`;

export const PetTable = styled.table`
    width:100%;
    margin-top:5px;
    text-align:left;
    border-collapse: collapse;

    thead tr {
        height:53px;
        border-bottom: 2px solid ${props => props.theme.colors.bg1};
    }
    
    tbody tr{
        height:53px;
        border-bottom: 2px solid ${props => props.theme.colors.bg1};

        td:last-child{
            text-align:center;
        }
    }
`;