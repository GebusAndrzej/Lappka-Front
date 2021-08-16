import React from 'react'
import { Avatar, Company, IconBox, Name, Title, Titlebar, UserBox } from './TitleBar.styled'

interface Props {
    title: string;
}

export default function TitleBar(props: Props): JSX.Element {
    return (
        <Titlebar>
            <Title>{props.title}</Title>

            <IconBox>
                <figure>
                    <img src="/assets/Dashboard/notification.svg" />
                </figure>
            </IconBox>

            <UserBox>
                <Avatar>
                    <img src="/assets/Homepage/avatars/avatar1.webp" />
                </Avatar>

                <div>
                    <Name>Robert G.</Name>
                    <Company>nazwa firmy</Company>
                </div>
            </UserBox>
        </Titlebar>
    )
}
