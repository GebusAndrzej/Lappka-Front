import React, { FunctionComponent }  from 'react'
import styled from 'styled-components';
import { ReactComponent as SVG_ARROWLEFT } from '../../../../assets/svg/arrowLeft.svg';
import { ReactComponent as SVG_KITTY} from '../../../../assets/svg/kitty.svg';

import { ClearLink } from '../../../private/Panel/components/Button';
import SocialInput from './SocialInput';
import Title from './Title';


export const Panel = styled.div`
  	background: linear-gradient(180deg, #43BE8D 8.98%, #0fe971 90.85%);
    position: absolute;
    height: 620px;
    width: 40%;
    transition: 0.75s;
    box-shadow: inset 0px 0px 40px rgba(0, 0, 0, 0.45);
    padding: 90px 0px;
    display: flex;
    flex-direction: column;
    &.register{
        border-radius: 0px 20px 20px 0px;
        right:0%;
    }
    &.login{
        right:100%;
        transform: translateX(100%) ;
        border-radius: 20px 0px 0px 20px;

    }


`;

const SVG = styled.div`
    margin: 30px auto;
    svg{
        height:120px;
        width:120px;
        opacity: 0.7;
    }
`;

const P = styled.p`
    width: 300px;
    margin: 0 auto;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: white;
    text-align: center;
`;

const SignButton = styled.button`
    width:210px;
    height: 52px;
    margin: 20px auto;
    box-shadow: -5px 4px 10px rgba(0, 0, 0, 0.15);
    background: transparent;
    border: 2px solid white;
    border-radius: 10px;
    text-transform: uppercase;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: white;

`;

const ReturnButton = styled.button`
    width: 100%;
    height: 56px;
    position: absolute;
    bottom: 0;
    left:0;
    border: 0px;
    background: ${props=>props.theme.colors.black};
    color: white;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 56px;
    padding: 0px;
    display: block;
    margin: 0 auto;
    svg{
        position: relative;
        top: 7px;
        right: 20px;
    }
    &.register{
        border-radius: 0px 0px 20px 0px;
    }
    &.login{
        border-radius: 0px 0px 0px 20px;
    }
`;

interface TSProps{
    toggle: () => void,
    status?: boolean,
}

const Overlay = (props: TSProps): JSX.Element =>{
    return(
        <Panel className={props.status ? "login" : "register"}>
            <Title value="Podaj łappkę!" variant="white"/>
            <SVG><SVG_KITTY/></SVG>
            <P>{props.status ? "Zaloguj się i sprawdź pocieszne zwierzątka w twojej okolicy" : "Zarejestruj się i dołącz do  społeczności łappkowiczów"}</P>
            <SignButton onClick={() => props.toggle()}>{props.status ? "Logowanie" : "Rejestracja"}</SignButton>
            <ClearLink to="/"><ReturnButton className={props.status ? "login" : "register"}><SVG_ARROWLEFT/>Link do strony głównej</ReturnButton></ClearLink>
            <SocialInput value="zaloguj" variant="white"></SocialInput>
        </Panel>
    );
    
};

export default Overlay;