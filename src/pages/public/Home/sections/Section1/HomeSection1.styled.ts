import styled, { css } from "styled-components";

export const ThemeTest = styled.div`
    ${props => {
        return `
          color: ${props.theme.colors.green};
        `;
    }}
`;

export const MainLogo = styled.img`
    max-width: 321px;

    @media (max-width: ${props => props.theme.break.mobile}) {
        max-width: 90%;
    }
`;

//grid to divide page
export const Grid = styled.div`
    box-sizing: border-box;
    max-width: 100%;
    /* height: 90vh; */
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin-top:inherit;
    transition-duration: inherit.5s;
    margin-bottom: 50px;
    min-height: 670px;
    max-width: 1440px;

    @media (max-width: ${props => props.theme.break.tablet}) {
        grid-template-columns: 1fr;
        margin-top: -20px;
        margin-bottom:500px;
    }
    
    @media (max-width: ${props => props.theme.break.mobile}) {
        margin-top: 50px;
        margin-bottom: 150px;
    }
`;

// wrapper for left side
export const Wrapper = styled.div<{ direction?: string }>`
    position: relative;
    display:flex;
    box-sizing:border-box;
    flex-direction: column;
    ${(props) => props.direction == "row" && css`
        flex-direction: row;
    `}
`;

// left side container inside wrapper
export const Container = styled.div`
    box-sizing: border-box;
    padding-left: 20%;
    padding-top: 10%;

    @media (max-width: ${props => props.theme.break.tablet}) {
        padding-left:0;
        padding-top:0;
        padding:10%;
    }
`;

//container for logo + name
export const Center = styled.div`
    align-items: center;
    font-size: 38px;
    vertical-align: baseline;
`;

//text under title
export const Sub = styled.p`
    margin-top: 20px;
    color: ${props => props.theme.colors.gray};
`;

//header
export const H2 = styled.span<{
    color?: string,
    fontWeight?: string,
    fontSize?: string,
    marginTop?: string
}>`
    font-family: "Ubuntu";
    font-weight: 500;
    margin: 0;
    display: inline-block;
    color: ${props => props.theme.colors.black};
    letter-spacing: 1.425px;
    word-wrap: break-word;
    font-size: 2.5rem;

    ${(props) => props.color == "green" && css`
        color: ${props => props.theme.colors.green};
    `}
    ${(props) => props.fontWeight && css`
        font-weight: ${props.fontWeight};
        & * {
            font-weight: ${props.fontWeight};
        }
    `}
    /* ${(props) => props.fontSize && css`
        font-size: ${props.fontSize};
        & * {
            font-size: ${props.fontSize};
        }
    `} */
    ${(props) => props.marginTop && css`
        margin-top: ${props.marginTop};
    `}
`;

//left image
export const Img1 = styled.img`
    position: absolute;
    max-width: 272px;

    @media (max-width:${props => props.theme.break.tablet}) {
        left:25%;
        transform: translateX(-50%);
    }
    
`;

//right top image
export const Img2 = styled.img`
    left:50%;
    position: absolute;
    max-width: 272px;

    @media (max-width:${props => props.theme.break.tablet}) {
        display:none;
    }

    @media (min-width: 1440px) {
        left: 400px;
    }
`;

//right bottom image
export const Img3 = styled.img`
    left:50%;
    top:170px;
    position:absolute;
    max-width: 272px;

    @media (max-width:${props => props.theme.break.tablet}) {
        top:0;
        left:75%;
        transform: translateX(-50%);
    }

    @media (min-width: 1440px) {
        left: 400px;
    }
`;

//green box on the right side
export const BGBox = styled.div`
    width:calc(100% - 70px);
    height:80%;
    position: absolute;
    right: 0;
    top:0;
    background: linear-gradient(135deg, #57D382 0.51%, #44A386 100%);
    border-radius: 0px 0px 0px 40px;
    min-height:400px;
    max-height: 650px;

    @media (max-width: ${props => props.theme.break.tablet}) {
        display: none;
    }
`;

//container for whole right side 
export const RightSide = styled.div`
    position:absolute;
    width:50%;
    height:100%;

    top:0;
    left:50%;
    transition-duration: .4s;

    @media (max-width: ${props => props.theme.break.tablet}) {
        top:470px;
        left:0%;
        width:100%;
    }
    @media (max-width: ${props => props.theme.break.mobile}) {
        display:none;
    }
`;

//button style
export const Button = styled.a`
    cursor: pointer;
    text-decoration: none;
    min-width:170px;
    background-color:${props => props.theme.colors.green};
    border:none;
    border-radius: 27px;
    height:54px;
    display:flex;
    color:white;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    margin-top: 20px;
`;

//logo in button
export const Logo = styled.img`
    line-height: 54px;
    margin-right:10px;
    margin-left:10px;
`;

//container for buttons
export const ButtonContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    width:70%;
    margin-top:30px;

    @media (max-width: ${props => props.theme.break.tablet}) {
        width:100%;
        margin-top: 30px;
    }

    @media (max-width: ${props => props.theme.break.mobile}) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
`;

//text in buttons
export const P = styled.p<{ weight?: string }>`
    color:white;
    margin:2px;
    font-size: 12px;
    font-family: "Nunito";
    margin-right: 10px;

    ${(props) => props.weight == "bold" && css`
        font-weight: bold;
        font-size: 16px;
    `}
`;

