import styled from 'styled-components';

export const Background = styled.div`
    background-color: ${props => props.theme.colors.lightgray};
    min-height: 100vh;
    align-items: center;
    text-align:center;
    display: flex;
    align-items: center;
    justify-content: center;
    * {
	box-sizing: border-box;
    }

    @media (max-width:${props => props.theme.break.tablet}) {
        overflow-x: hidden;
    }
`;

export const MainContainer = styled.div`
    width: clamp( 500px, 1100px, 1100px);
    max-width: 1100px;
    min-height: 620px;
    background: white;
    position: relative;
    box-shadow: 0px 0px 29px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    box-sizing: border-box;

    @media (max-width:${props => props.theme.break.tablet}) {
        margin:2%;
        margin-top:0px;
    }
    @media (max-width:${props => props.theme.break.between}) {
        /* tutaj na mobilkę  albo between*/
        margin:0;
        display:flex;
        flex-direction: column;
        max-width: 100%;
        /* background-color: red; */
    }
`;

export const Logo = styled.img`
    position: absolute;
    top: 15px;
    left:15px;
    width: 150px;
`;

