import styled from 'styled-components';

export const InvalidMail = styled.p`
    position: absolute;
    @media(max-width:${props => props.theme.break.tablet}){
        position: initial;
    }
`;

export const BG = styled.div`
    position: absolute;
    left:0;
    width:100%;
    height:200px;
    background-color: ${props => props.theme.colors.bg2};
    clip-path: polygon(0 0, 100% 0, 100% 10%, 50% 100%,0% 10%);
    z-index: -9;
`;

export const Box = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    background: ${props => props.theme.colors.green};
    width: 1146px;
    min-height: 246px;
    border-radius: 10px;
    padding: 0px 68px;
    @media(max-width:${props => props.theme.break.tablet}){
        width: 95%;
        height: auto;
        flex-direction: column;
        padding: 0px 30px;
    }
`;

export const FontBold = styled.span`
    font-weight: 700;
`;

export const Text = styled.label<{ fontWeight?: string }>`
    font-family: Ubuntu;
    font-style: normal;
    font-weight: ${props => props.fontWeight || "300"};
    color: white;
`;

export const TextBox = styled.div`
    width: 392px;
    margin: 81px 0px;
    font-size: 20px;
    line-height: 140%;
    color: white;
    float: left;
    @media(max-width: ${props => props.theme.break.tablet}){
        width: 90%;
        margin: 30px 0px 0px 0px;
    }
`;

export const FormBox = styled.div`
    width: 520px;
    margin: 68px 0px;
    font-size: 17px;
    margin-left: auto;
    @media(max-width:${props => props.theme.break.tablet}){
        width: 100%;
        float: left;
        margin: 0 auto;
        margin: 30px 0px;

    }
`;

export const Input = styled.input`
    width: 100%;
    height: 72px;
    margin: 15px 0px 0px;
    background: rgba(255,255,255,0.1) ;
    border: 0px;
    border-radius: 4px;
    padding: 0px;
    color: white;
    text-indent: 1.5em;
    ::placeholder {
        color: white;
        mix-blend-mode: normal;
        opacity: .5;
    }
`;

export const Button = styled.button`
    position: absolute;
    right: 8px;
    top: 23px;
    background: white ;
    color: ${props => props.theme.colors.green};
    border-radius: 4px;
    width:186px;
    height: 56px;
    border: 0px;
    font-weight: 500;
    @media(max-width: ${props => props.theme.break.mobile}){
        width: 100px;
    }
`;

export const TotalInput = styled.div`
    display: block;
    flex-direction: row;
    position: relative;
    right: 0px;
`;