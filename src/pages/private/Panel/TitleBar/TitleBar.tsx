import React from 'react'
import { Avatar, Company, IconBox, Name, SubTitle, Title, Titlebar, UserBox, Titlebox} from './TitleBar.styled'

interface Props {
    title: string;
    subTitle?: string;
}

export default function TitleBar(props: Props): JSX.Element {
    return (
        <Titlebar>
            <Titlebox>
                <Title>{props.title}</Title>
                {props.subTitle? <SubTitle>/ {props.subTitle}</SubTitle> : null}
            </Titlebox>
            
            

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
