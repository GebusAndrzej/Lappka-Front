import styled from 'styled-components';

export const Background = styled.div`
    background-color: ${props => props.theme.colors.lightgray};
    width: 100vw;
    height: 100vh;
    padding-top: 10vh;
    * {
	box-sizing: border-box;
    }
`;

export const MainContainer = styled.div`
    max-width: 1100px;
    min-height: 620px;
    margin: auto;
    background: white;
    position: relative;
    box-shadow: 0px 0px 29px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    @media (max-width:${props => props.theme.break.tablet}) {
        margin:2%;
        margin-top:0px;
    }
    @media (max-width:${props => props.theme.break.between}) {
        /* tutaj na mobilkę  albo between*/
    }
`;

export const Logo = styled.img`
    position: absolute;
    top: 15px;
    left:15px;
    width: 150px;
`;

