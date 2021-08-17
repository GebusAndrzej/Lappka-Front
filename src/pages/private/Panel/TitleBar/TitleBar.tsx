import React from 'react'
import { ReactComponent as SVG_Burger } from '../../../../assets/svg/burger.svg';
import { ReactComponent as SVG_Notification } from '../../../../assets/svg/notification.svg';
import { Avatar, Burger, Company, IconBox, Name, Title, Titlebar, UserBox } from './TitleBar.styled'

interface Props {
    title: string;
    toggle: () => void;
}

export default function TitleBar(props: Props): JSX.Element {

    function MenuToggle() {
        props.toggle()
    }

    return (
        <Titlebar>
            <Title>{props.title}</Title>

            <IconBox>
                <figure>
                    <SVG_Notification />
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

            <Burger onClick={MenuToggle}>
                <SVG_Burger />
            </Burger>
        </Titlebar>
    )
}
