import React from 'react'
import styled from 'styled-components';
import { ReactComponent as SVG_FACEBOOK } from '../../../../assets/svg/facebookIcon.svg';
import { ReactComponent as SVG_GOOGLE } from '../../../../assets/svg/googleIcon.svg';


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const Text = styled.h2 <{ variant?: string }>`
    color: ${props => props.variant || props.theme.colors.gray};
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    padding-bottom: 10px;
    letter-spacing: 0.571428px;
    margin: 0px 10px;
`;
const SVG = styled.div <{ variant?: string }>`
    a{
        path{
            fill: ${props => props.variant || props.theme.colors.green};
        }
    }
`;

interface TSProps {
    value?: string,
    variant?: string,
}

const SocialInput = (props: TSProps): JSX.Element => {
    return (
        <Wrapper>
            <Text variant={props.variant}>Lub {props.value} się przez </Text>
            <SVG variant={props.variant}><a href=""><SVG_FACEBOOK /></a><a href=""><SVG_GOOGLE /></a></SVG>
        </Wrapper>
    );

};

export default SocialInput;