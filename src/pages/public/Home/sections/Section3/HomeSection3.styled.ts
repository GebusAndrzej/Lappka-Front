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
export const ColorChange = styled.span`
    color: $${props => props.theme.colors.green};
`;

export const GridContainer = styled.div`
    display: grid;
    margin: 0 auto;
    width: 1149px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    padding-bottom: 100px;
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
    background-color: ${props => props.theme.colors.bg2};
    text-align: left;
    img{
        width:36px;
        height: 36px;
        line-height: 20px;
        margin: 0px 19px 0px 0px;
    }
`;


export const GridItemParagraph = styled.p`
    width: 100%;
    margin: 0px 0px 0px 0px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 27px;
    letter-spacing: 0.6px;
    color: ${props => props.theme.colors.gray};
`;