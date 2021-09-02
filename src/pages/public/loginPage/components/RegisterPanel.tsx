import React from 'react'
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Title from './Title';
import { Logo } from '../LoginPage.styled';
import TextInput from './TextInput';
import { ReactComponent as SVG_LOGINICON } from '../../../../assets/svg/loginIcon.svg';
import { ReactComponent as SVG_PASSICON } from '../../../../assets/svg/passwordIcon.svg';
import { SubmitButton } from './SubmitButton';
// import SocialInput from './SocialInput';


const Form1 = styled(Form)`
    top:0;
    position: absolute;
    box-sizing: border-box;
    width: 60%;
    transition: 0.5s;
    transition-delay: 0.2s;
    right:0;
    display: flex;
    flex-direction: column;
    padding:60px 0px;
    
    &.register{
        opacity: 1;
        visibility: visible;
    }
    &.login{
        opacity: 0;
        visibility: hidden;
        transition-delay: 0s;
    }
    @media (max-width: ${props => props.theme.break.tablet}) {
        display:relative;
        width:100%;
    }
`;

const Footer = styled.div`
    margin: 0 auto;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    a{
        text-decoration:none;
        color: gray;
    }
`;

interface TSProps {
    status?: boolean,
}

const RegisterPanel = (props: TSProps): JSX.Element => {
    return (
        <Formik
            initialValues={{
                login: '',
                email: '',
                password: '',
                repeatPassword: ''
            }}
            validationSchema={Yup.object({
            })}
            onSubmit={values => {
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form1 className={props.status ? "register" : "login"}>
                <Logo src="/assets/Homepage/logo.webp" alt="Logo" aria-label="Logo" />
                <Title value="Zarejestruj się " />

                <TextInput name="login" placeholder="Podaj Login" svg={SVG_LOGINICON}></TextInput>
                <TextInput name="email" placeholder="Podaj e-mail" svg={SVG_LOGINICON}></TextInput>
                <TextInput name="password" placeholder="Hasło" type="password" svg={SVG_PASSICON}></TextInput>
                <TextInput name="repeatPassword" placeholder="Powtórz Hasło" type="password" svg={SVG_PASSICON}></TextInput>

                <SubmitButton type="submit">Zarejestruj się</SubmitButton>

                {/* <SocialInput value="zarejestruj"></SocialInput> */}
                <Footer><a href="">Regulamin</a> &ensp;&ensp; <a href="">Polityka Prywatności</a></Footer>
            </Form1>
        </Formik>
    );
};

export default RegisterPanel;