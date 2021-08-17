import React from 'react'

// import { Avatar, Company, IconBox, Name, SubTitle, Title, Titlebar, UserBox, Titlebox } from './TitleBar.styled'
import { ReactComponent as SVG_Burger } from '../../../../assets/svg/burger.svg';
import { ReactComponent as SVG_Notification } from '../../../../assets/svg/notification.svg';
import { Avatar, Burger, Company, IconBox, Name, Title, Titlebar, UserBox, SubTitle, Titlebox } from './TitleBar.styled'

interface Props {
    title: string;
    toggle: () => void;
    subTitle?: string;
}

export default function TitleBar(props: Props): JSX.Element {

    function MenuToggle() {
        props.toggle()
    }

    return (
        <Titlebar>
            <Titlebox>
                <Title>{props.title}</Title>
                {props.subTitle ? <SubTitle>/ {props.subTitle}</SubTitle> : null}
            </Titlebox>



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
