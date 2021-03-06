import React from 'react'
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Title from './Title';
import TextInput from './TextInput';
import { Logo } from '../LoginPage.styled';
import { ReactComponent as SVG_LOGINICON } from '../../../../assets/svg/loginIcon.svg';
import { ReactComponent as SVG_PASSICON } from '../../../../assets/svg/passwordIcon.svg';
import { SubmitButton } from './SubmitButton';
import { POST_login } from '../../../../model/post/POST_Models';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getLoginState, getUserInfo, login } from '../../../../features/auth/authSlice';
import LoadingComponent from '../../../private/Panel/components/LoadingComponent';
import { showSnackbar } from '../../../components/Snackbar';
import { useSnackbar } from 'notistack';


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

    @media (max-width: ${props => props.theme.break.tablet}) {
        display:relative;
        width:100%;
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
    const dispatch = useAppDispatch()
    const loginState = useAppSelector(getLoginState)
    const { enqueueSnackbar } = useSnackbar()
    const user = useAppSelector(getUserInfo)

    if (user) location.replace("/dashboard")

    return (

        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={Yup.object({
                email: Yup.string().email("Podaj w??a??ciwy adres email").required("Pole wymagane"),
                password: Yup.string().required("Wymagane")
            })}
            onSubmit={async values => {
                const user: POST_login = values

                try {
                    const res = await dispatch(login(user))

                    if (`${res.payload}`.match(/^2..$/)) {
                        showSnackbar(enqueueSnackbar, null, "Zalogowano", "success")
                        location.replace("/dashboard")
                    }
                    else {
                        if (res.payload.code == "invalid_credentials") {
                            showSnackbar(enqueueSnackbar, null, "Nieprawid??owe dane logowania", "error")

                        }
                        else {
                            showSnackbar(enqueueSnackbar, null, "Wyst??pi?? b????d", "error")
                            console.log(res.payload);
                        }
                    }

                }
                catch (e) {
                    console.error(e)
                    showSnackbar(enqueueSnackbar, null, "Wyst??pi?? b????d. Spr??buj ponownie p????niej", "error")
                }



            }}
        >
            <Form1 className={props.status ? "login" : "register"}>
                <Logo src="/assets/Homepage/logo.webp" alt="Logo" aria-label="Logo" />
                <Title value="Zaloguj si?? do aplikacji" />

                {loginState == "loading" ? <LoadingComponent></LoadingComponent>
                    :
                    <>
                        <TextInput name="email" placeholder="Login lub e-mail" svg={SVG_LOGINICON}></TextInput>
                        <TextInput name="password" placeholder="Has??o" type="password" svg={SVG_PASSICON}></TextInput>
                        <SubmitButton type="submit">Zaloguj si??</SubmitButton>
                    </>
                }


                <Footer><a href="">Regulamin</a> &ensp;&ensp; <a href="">Polityka Prywatno??ci</a></Footer>
            </Form1>
        </Formik>
    );
};

export default LoginPanel;