import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid;
    margin: 0 auto;
    width: 1149px;
    line-height: 200px;
    grid-template-columns: 1fr 1fr 1fr;
    @media(max-width: ${props => props.theme.break.tablet}){   //1160
        width: 95%;
        height: auto;
        flex-direction: column;
    }
    @media(max-width: ${props => props.theme.break.between}){    //683
        grid-template-columns: 1fr;
        width: 90%;
        line-height: 48px;
    }
`;
export const GridItem = styled.div<{ marginSet?: string; }>`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: ${props => props.marginSet || "0 auto"};
    @media(max-width: ${props => props.theme.break.between}){
        margin: 0 auto;
        line-height: 48px;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: text-bottom;
`;
export const Logo = styled.img`
    width: 71px;
    height: 71px;
    float: left;
`;

export const LogoText = styled.h2`
    margin-bottom: 0px;
    justify-content: bottom;
    align-items: bottom;
    font-family: 'Ubuntu';
    font-weight: 500;
    font-size: 24px;
    line-height: 48px;
    letter-spacing: 1.425px;
    color: ${props => props.theme.colors.black};
    float: left;

`;

export const FooterText = styled.span`
    font-family: Ubuntu;
    font-weight: normal;
    font-size: 14px;
    color: ${props => props.theme.colors.gray};
`;
export const Spacer = styled.span`
    padding: 0px 15px;
`;

export const Link = styled.a`
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: ${props => props.theme.colors.gray};
`;

export const ColorChange = styled.span<{ colorValue?: string; }>`
    color: ${props => props.colorValue || "${props => props.theme.colors.green}"};
`;