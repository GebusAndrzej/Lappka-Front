import { FieldHookConfig, useField } from 'formik';
import React from 'react'
import styled from 'styled-components';
import { ClearLink } from '../../../private/Panel/components/Button';

const Wrapper = styled.div`
  width:350px;
  margin: 10px auto;
  margin-bottom: 37px;
  display: flex;
  justify-content: space-between;
`;
const RememberMe = styled.input`
        color: gray;
`;
const Span = styled.span`
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: gray;
    opacity: 0.7;
`;

interface TSProps {
    label?: string,
    value?: string,
    variant?: number,
}

const AdditionalOptions = (props: TSProps & FieldHookConfig<string | number>): JSX.Element => {
    const [field] = useField(props);
    return (
        <Wrapper>
            <label><RememberMe {...field} {...props} type="checkbox" /><Span>Zapamiętaj mnie</Span></label>
            <ClearLink to="/" ><Span>Zapomniałeś hasła?</Span></ClearLink>
        </Wrapper>
    );

};

export default AdditionalOptions;