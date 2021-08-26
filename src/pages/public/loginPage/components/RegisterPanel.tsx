import React, { FunctionComponent }  from 'react'
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Title from './Title';
import { Logo } from '../LoginPage.styled';
import TextInput from './TextInput';
import { ReactComponent as SVG_LOGINICON} from '../../../../assets/svg/loginIcon.svg';
import { ReactComponent as SVG_PASSICON} from '../../../../assets/svg/passwordIcon.svg';
import { SubmitButton } from './SubmitButton';
import SocialInput from './SocialInput';


const Form = styled.form`
    position: absolute;
    box-sizing: border-box;
    width: 60%;
    transition: 0.5s;
    transition-delay: 0.2s;
    right:0;
    display: flex;
    flex-direction: column;
    padding:60px 0px ;
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

interface TSProps{
    status?: boolean,
}

const RegisterPanel = (props: TSProps): JSX.Element =>{
    return (
        <Formik
        initialValues={{
            email: '',
        }}
        validationSchema={Yup.object({
            email: Yup.string().email('Niepoprawny adres email').required(''),
        })}
        onSubmit={values => {
            alert(JSON.stringify(values, null, 2));
        }}
        >
            <Form className={props.status ? "register" : "login"}>
            <Logo src="/assets/Homepage/logo.webp" alt="Logo" aria-label="Logo"/>
                <Title value="Zarejestruj się "/>
                <TextInput name="Login" placeholder="Podaj Login" svg={SVG_LOGINICON}></TextInput>
                <TextInput name="email" placeholder="Podaj e-mail" svg={SVG_LOGINICON}></TextInput>
                <TextInput name="Password" placeholder="Hasło" isPassword="is" svg={SVG_PASSICON}></TextInput>
                <TextInput name="RepeatPassword" placeholder="Powtórz Hasło" isPassword="is" svg={SVG_PASSICON}></TextInput>
                <SubmitButton type="submit">Zarejestruj się</SubmitButton>
                <SocialInput value="zaloguj"></SocialInput>
                <Footer><a href="">Regulamin</a> &ensp;&ensp; <a href="">Polityka Prywatności</a></Footer>
            </Form>
        </Formik>
    ); 
};

export default RegisterPanel;