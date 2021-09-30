import React from 'react'
import { useHistory } from 'react-router';
import { microServices } from '../../../../app/axiosConfig';
import { useAppSelector } from '../../../../app/hooks';

// import { Avatar, Company, IconBox, Name, SubTitle, Title, Titlebar, UserBox, Titlebox } from './TitleBar.styled'
import { ReactComponent as SVG_Burger } from '../../../../assets/svg/burger.svg';
import { ReactComponent as SVG_Notification } from '../../../../assets/svg/notification.svg';
import { getUserActiveShelter, getUserInfo } from '../../../../features/auth/authSlice';
import { Avatar, Burger, Company, IconBox, Name, Title, Titlebar, UserBox, SubTitle, Titlebox } from './TitleBar.styled'

interface Props {
    title: string;
    toggle: () => void;
    subTitle?: string;
}

export default function TitleBar(props: Props): JSX.Element {
    const userInfo = useAppSelector(getUserInfo)
    const userShelter = useAppSelector(getUserActiveShelter)
    const history = useHistory()

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
                    <img src={(userInfo?.photoId != "00000000-0000-0000-0000-000000000000") && (userInfo?.photoId) ?
                        microServices.files + "/" + userInfo?.photoId + "?bucketName=0"
                        :
                        "/assets/mock/avatar-generic.jpg"} />
                </Avatar>

                <div>
                    <Name>{userInfo?.firstName} {userInfo?.lastName.substr(0, 1)}.</Name>
                    {/* <Company>{JSON.stringify(userShelter)}</Company> */}
                    <Company onClick={() => userShelter ? history.push("/shelter/edit") : null}>{userShelter?.name ?? "Brak schroniska"}</Company>
                </div>
            </UserBox>

            <Burger onClick={MenuToggle}>
                <SVG_Burger />
            </Burger>
        </Titlebar>
    )
}
