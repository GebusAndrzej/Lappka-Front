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
// import SocialInput from './SocialInput';
import { useHistory } from 'react-router-dom';
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
    const history = useHistory()
    const dispatch = useAppDispatch()
    const loginState = useAppSelector(getLoginState)
    const { enqueueSnackbar } = useSnackbar()
    const user = useAppSelector(getUserInfo)

    if (user) history.push("/dashboard")

    return (

        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={Yup.object({
                email: Yup.string().email("Podaj właściwy adres email").required("Pole wymagane"),
                password: Yup.string().required("Wymagane")
            })}
            onSubmit={async values => {
                const user: POST_login = values
                try {
                    const res = await dispatch(login(user))
                    // console.log(res);

                    if (`${res.type}` == "auth/login/fulfilled") {
                        // console.log("zalogowano");

                        showSnackbar(enqueueSnackbar, null, "Zalogowano", "success")
                        // history.push("/dashboard")
                        location.replace("/dashboard")

                    }
                    else {
                        console.log("Error");
                        showSnackbar(enqueueSnackbar, null, "Wystąpił błąd", "error")
                    }
                }
                catch (e) {
                    console.log("catch");

                    console.log(e);
                }

            }}
        >
            <Form1 className={props.status ? "login" : "register"}>
                <Logo src="/assets/Homepage/logo.webp" alt="Logo" aria-label="Logo" />
                <Title value="Zaloguj się do aplikacji" />

                {loginState == "loading" ? <LoadingComponent></LoadingComponent>
                    :
                    <>
                        <TextInput name="email" placeholder="Login lub e-mail" svg={SVG_LOGINICON}></TextInput>
                        <TextInput name="password" placeholder="Hasło" type="password" svg={SVG_PASSICON}></TextInput>
                    </>
                }


                <AdditionalOptions name="RememberMe" ></AdditionalOptions>
                <SubmitButton type="submit">Zaloguj się</SubmitButton>

                <Footer><a href="">Regulamin</a> &ensp;&ensp; <a href="">Polityka Prywatności</a></Footer>
            </Form1>
        </Formik>
    );
};

export default LoginPanel;