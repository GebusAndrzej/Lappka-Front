import { Form, Formik } from 'formik';
import React from 'react'
import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components'
import TextInput from '../../components/TextInput';
import { ReactComponent as SVG_Send } from '../../../../../assets/svg/send.svg';
import Message from './Message';


const Box = styled.div<{ variant: "normal" | "tablet-hidden" | "hidden" }>`
    border-radius: 20px;
    background-color:white;
    display: grid;
    grid-template-rows: 60px 1fr 80px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 5px;
    box-sizing: border-box;
    max-height: 85vh;

    /* position: relative; */
    @media (min-width: ${props => props.theme.break.tablet}) {
        /* position: absolute;
        bottom:0;
        right:0;
        height:85vh;
        width:50%; */
    }

    @media (max-width: ${props => props.theme.break.tablet}) {
        ${(props) => props.variant == "normal" && css`
            display:grid;
        `}
        
        ${(props) => props.variant == "tablet-hidden" && css`
            display:none;
        `}
    }

    ${(props) => props.variant == "hidden" && css`
        display:none;
    `}
`;

const Header = styled.div`
    background-color: ${props => props.theme.colors.green};
    height: 60px;
    border-radius: 20px 20px 0 0;
    padding:15px;
    box-sizing:border-box;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const MessagesBox = styled.div`
    padding:15px;
    position: relative;
    overflow-y: auto;
    /* height: 500px; */
    /* max-height: 80vh; */
`;

const Footer = styled.div`
    border-top: 1px solid ${props => props.theme.colors.bg1};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    form {
        /* background-color: red; */
        display:grid;
        box-sizing: border-box;
        margin: 0px 20px;
        gap:20px;
        grid-template-columns: 1fr 70px;
        width:100%;
    }
`;

const Avatar = styled.figure`
        margin:0;
        margin-right: 15px;
        display:flex;
        justify-content: center;
        align-items: center;
        /* aspect-ratio: 1/1; */
        img {
            max-width: 50px;
            max-height: 50px;
        }
    
`;

const UserName = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color:white;
`;

const SendButton = styled.button`
    background-color: transparent;
    border:none;
    cursor: pointer;
`

interface Props {
    state: "normal" | "hidden";
    // user?: string;
}

interface RouteParams {
    id?: string
}


function MessageBoxComponent(props: Props & RouteParams): JSX.Element {
    const { id } = useParams<RouteParams>();

    return (
        <Box variant={props.state}>
            <Header>
                <Avatar>
                    <img src="/assets/Homepage/avatars/avatar1.webp" />
                </Avatar>
                <UserName>
                    {id}
                </UserName>
            </Header>

            <MessagesBox>
                <Message type="self" message="Hej znalazłem psa"></Message>
                <Message type="other" message="Żyje?"></Message>
                <Message type="self" message="Nie"></Message>

                <Message type="self" message="Hej znalazłem psa"></Message>
                <Message type="other" message="Żyje?"></Message>
                <Message type="self" message="Nie"></Message>

                <Message type="self" message="Hej znalazłem psa"></Message>
                <Message type="other" message="Żyje?"></Message>
                <Message type="self" message="Nie"></Message>

                <Message type="self" message="Hej znalazłem psa"></Message>
                <Message type="other" message="Żyje?"></Message>
                <Message type="self" message="Nie"></Message>

            </MessagesBox>

            <Footer>
                <Formik
                    initialValues={{
                        message: ''
                    }}
                    onSubmit={(values) => {
                        console.log(values);

                    }}
                >
                    <Form>
                        <TextInput name="message" label="Wiadomość" />
                        <SendButton type="submit">
                            <SVG_Send />
                        </SendButton>
                    </Form>

                </Formik>
            </Footer>

        </Box >
    )
}

export default MessageBoxComponent
