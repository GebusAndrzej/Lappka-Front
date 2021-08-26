import React, { FunctionComponent }  from 'react'
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Title from './Title';
import TextInput from './TextInput';
import { Logo } from '../LoginPage.styled';
import { ReactComponent as SVG_LOGINICON} from '../../../../assets/svg/loginIcon.svg';
import { ReactComponent as SVG_PASSICON} from '../../../../assets/svg/passwordIcon.svg';
import AdditionalOptions from './AdditionalOptions';
import { SubmitButton } from './SubmitButton';
import SocialInput from './SocialInput';


const Form = styled.form`
    position: absolute;
    box-sizing: border-box;
    width: 60%;
    transition: 0.5s;
    transition-delay: 0.2s;
    display: flex;
    flex-direction: column;
    padding: 90px 0px ;
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

interface TSProps{
    status?: boolean,
}

const LoginPanel = (props: TSProps): JSX.Element =>{
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
            <Form className={props.status ? "login" : "register"}>
                <Logo src="/assets/Homepage/logo.webp" alt="Logo" aria-label="Logo"/>
                <Title value="Zaloguj się do aplikacji"/>
                <TextInput name="Login" placeholder="Login lub e-mail" svg={SVG_LOGINICON}></TextInput>
                <TextInput name="Password" placeholder="Hasło" isPassword="is" svg={SVG_PASSICON}></TextInput>
                <AdditionalOptions name="RememberMe" ></AdditionalOptions>
                <SubmitButton type="submit">Zaloguj się</SubmitButton>
                <SocialInput value="zaloguj"></SocialInput>
                <Footer><a href="">Regulamin</a> &ensp;&ensp; <a href="">Polityka Prywatności</a></Footer>
            </Form>
        </Formik>
    ); 
};

export default LoginPanel;