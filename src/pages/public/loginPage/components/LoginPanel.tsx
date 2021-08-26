import React from 'react'
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Title from './Title';
import TextInput from './TextInput';
import { Logo } from '../LoginPage.styled';
import { ReactComponent as SVG_LOGINICON } from '../../../../assets/svg/loginIcon.svg';
import { ReactComponent as SVG_PASSICON } from '../../../../assets/svg/passwordIcon.svg';
import AdditionalOptions from './AdditionalOptions';
import { SubmitButton } from './SubmitButton';
import SocialInput from './SocialInput';


const Form1 = styled(Form)`
    position: relative;
    box-sizing: border-box;
    width: 60%;
    transition: 0.5s;
    transition-delay: 0.2s;
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    &.register{
        opacity: 1;
        visibility: visible;

    }
    &.login{
        opacity: 0;
        visibility: hidden;

        transition-delay: 0s;

    }
`;

const Footer = styled.div`
    width: 350px;
    font-size: 12px;
    margin: 40px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    a{
        text-decoration:none;
        color: gray;
    }
`;

interface TSProps {
    status?: boolean,
}

const LoginPanel = (props: TSProps): JSX.Element => {
    return (

        <Formik
            initialValues={{
                login: '',
                password: '',
            }}
            validationSchema={Yup.object({
            })}
            onSubmit={values => {
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form1 className={props.status ? "login" : "register"}>
                <Logo src="/assets/Homepage/logo.webp" alt="Logo" aria-label="Logo" />
                <Title value="Zaloguj się do aplikacji" />

                <TextInput name="login" placeholder="Login lub e-mail" svg={SVG_LOGINICON}></TextInput>
                <TextInput name="password" placeholder="Hasło" type="password" svg={SVG_PASSICON}></TextInput>

                <AdditionalOptions name="RememberMe" ></AdditionalOptions>
                <SubmitButton type="submit">Zaloguj się</SubmitButton>

                <SocialInput value="zaloguj"></SocialInput>
                <Footer><a href="">Regulamin</a> &ensp;&ensp; <a href="">Polityka Prywatności</a></Footer>
            </Form1>
        </Formik>
    );
};

export default LoginPanel;