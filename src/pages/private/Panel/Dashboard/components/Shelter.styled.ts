import styled from "styled-components";

export const ShelterWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 250px;
    min-height:400px;

    figure{
        display:flex;
        justify-content: center;
        align-items: center;
        margin: 16px;
        img {
            max-width:100%;
            border-radius: 5px;
        }
    }

`;

export const ShelterTitle = styled.h2`
    margin-top: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    text-align: center;
`;

export const Location = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

export const LocationText = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 120%;
    color: ${props => props.theme.colors.gray};
`;

export const ShelterSummaryBox = styled.div`
    margin-top:15px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    width:100%;
    margin-bottom: 10px;
    
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
