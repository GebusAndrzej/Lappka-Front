import React, { useState } from 'react'
import styled, { css } from 'styled-components';
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

const FormPage = styled.div<{ active: boolean }>`


    ${(props) => !props.active && css`
        display:none;
    `}
`

interface TSProps {
    status?: boolean,
}

const RegisterPanel = (props: TSProps): JSX.Element => {
    const [formPage, setFormPage] = useState(1)

    function changePage(x: number) {
        setFormPage(x);
    }


    return (
        <Formik
            initialValues={{
                login: '',
                email: '',
                password: '',
                repeatPassword: '',
                firstName: '',
                lastName: ''
            }}
            validationSchema={Yup.object({
                login: Yup.string().required("Wymagane"),
                email: Yup.string().required("Wymagane").email("Podaj prawidłowy email"),
                password: Yup.string().required("Wymagane").min(4, "Co najmniej 4 znaki"),
                repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], "Hasła się nie zgadzają").required('Wymagane'),
                firstName: Yup.string().required("Wymagane"),
                lastName: Yup.string().required("Wymagane"),

            })}
            onSubmit={values => {
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form1 className={props.status ? "register" : "login"}>
                <Logo src="/assets/Homepage/logo.webp" alt="Logo" aria-label="Logo" />
                <Title value="Zarejestruj się " />

                <FormPage active={formPage == 1 ? true : false}>
                    <TextInput name="login" placeholder="Nazwa Uzytkownika" svg={SVG_LOGINICON}></TextInput>
                    <TextInput name="email" placeholder="E-mail" svg={SVG_LOGINICON}></TextInput>
                    <TextInput name="password" placeholder="Hasło" type="password" svg={SVG_PASSICON}></TextInput>
                    <TextInput name="repeatPassword" placeholder="Powtórz Hasło" type="password" svg={SVG_PASSICON}></TextInput>
                    <SubmitButton type="button" onClick={() => changePage(2)}>Dalej</SubmitButton>
                </FormPage>

                <FormPage active={formPage == 2 ? true : false}>
                    <TextInput name="firstName" placeholder="Nazwa Uzytkownika" svg={SVG_LOGINICON}></TextInput>
                    <TextInput name="lastName" placeholder="E-mail" svg={SVG_LOGINICON}></TextInput>
                    <SubmitButton type="submit">Zarejestruj się</SubmitButton>
                    <SubmitButton buttonType="back" type="button" onClick={() => changePage(1)}>Wstecz</SubmitButton>
                </FormPage>


                {/* <SocialInput value="zarejestruj"></SocialInput> */}
                <Footer><a href="">Regulamin</a> &ensp;&ensp; <a href="">Polityka Prywatności</a></Footer>
            </Form1>
        </Formik>
    );
};

export default RegisterPanel;