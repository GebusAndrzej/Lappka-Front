import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid;
    margin: 0 auto;
    width: 1149px;
    line-height: 200px;
    grid-template-columns: 1fr 1fr 1fr;
    @media(max-width:1280px){
        grid-template-columns: 1fr 1fr 1fr;
        width: 90%;
    }
    @media(max-width:1160px){
        width: 700px;
        height: auto;
        flex-direction: column;
    }
    @media(max-width:683px){
        grid-template-columns: 1fr;
        width: 90%;
        line-height: 50px;
    }
`;
export const GridItem = styled.div<{ marginSet?: string; }>`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: ${props => props.marginSet || "0 auto"};
    @media(max-width:683px){
        margin: 0 auto;
    }
`;


export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 38px;
    vertical-align: text-bottom;
`;
export const Logo = styled.img`
    width: 71px;
    height: 71px;
    float: left;
`;

export const LogoText = styled.h2`
    font-family: 'Ubuntu';
    font-weight: 500;
    font-size: 24px;
    line-height: 48px;
    margin-top: 24px;
    letter-spacing: 1.425px;
    color: ${props => props.theme.black};
    float: left;

`;

export const FooterText = styled.span`
    font-family: Ubuntu;
    font-weight: normal;
    font-size: 14px;
    color: ${props => props.theme.gray};
`;
export const Spacer = styled.span`
    padding: 0px 15px;
`;

export const Link = styled.a`
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: ${props => props.theme.gray};
`;

export const ColorChange = styled.span<{ colorValue?: string; }>`
    color: ${props => props.colorValue || "${props => props.theme.green}"};
`;