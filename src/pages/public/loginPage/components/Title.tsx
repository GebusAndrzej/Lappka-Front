 import React, { FunctionComponent }  from 'react'
import styled from 'styled-components';
import { ReactComponent as SVG_TitleBar} from '../../../../assets/svg/titleUnderBar.svg';

const TitleText = styled.h1 <{variant?:string}>`
    color: ${props => props.variant || props.theme.colors.green };
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 0.571428px;
    margin: 0px;
`;
const SVG = styled.div <{variant?:string}>`
    margin: 10px auto;
    margin-bottom: 0px;

        rect{
            fill: ${props => props.variant ||  props.theme.colors.green };
        }
`;

interface TSProps{
    value?: string,
    variant?: string,
}

const Title = (props: TSProps): JSX.Element =>{
    return(
        <>
        <TitleText variant={props.variant}>{props.value}</TitleText>
        <SVG variant={props.variant}><SVG_TitleBar/></SVG>
        </>
    );
    
};

export default Title;