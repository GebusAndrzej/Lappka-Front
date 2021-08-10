import styled from 'styled-components';

export const SectionTitle = styled.h1`
    padding:60px;
    padding-top: 100px;
    margin: 0px;
    font-family: 'Ubuntu';
    font-size: 38px;
    line-height: 48px;
    text-align: center;
    letter-spacing: 1.425px;
    color: ${props => props.theme.colors.black};
`;
export const GridContainer = styled.div`
    display: grid;
    margin: 0 auto;
    margin-bottom: 100px;
    width: 1149px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    @media(max-width: ${props => props.theme.break.tablet} ){    //1280
        grid-template-columns: 1fr 1fr;
        width: 95%;
    }
    @media(max-width: ${props => props.theme.break.between} ){    //922
        grid-template-columns: 1fr;
        width: 90%;
    }
`;

export const GridItem = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    text-align: left;
    background-color: white;
    box-shadow:0px 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 0px 15px 30px 0px;
    img{
        width:20px;
        height: 20px;
        line-height: 20px;
        margin: 30px 0px 0px 20px;
    }
`;

export const GridItemTitle = styled.h2`
    margin: 30px 0px 0px 19px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.675px;
    text-transform: uppercase;
    color: ${props => props.theme.colors.black};
`;

export const GridItemParagraph = styled.p`
    width: 90%;
    margin: 16px 0px 0px 19px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.6px;
    color: ${props => props.theme.colors.gray};
`;