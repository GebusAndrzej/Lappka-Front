import React, { useEffect } from 'react'
import { ButtonBox, Fixed, Hr, Logo, Nav, Close, LogoutButton } from './Sidebar.styled'
import ButtonNavLink from './components/ButtonNavLink'

import { ReactComponent as SVG_Dashboard } from '../../../../assets/svg/dashboard.svg';
import { ReactComponent as SVG_Messages } from '../../../../assets/svg/message.svg';
import { ReactComponent as SVG_Pets } from '../../../../assets/svg/pets_symbol.svg';
import { ReactComponent as SVG_Volounteering } from '../../../../assets/svg/volounteering.svg';
import { ReactComponent as SVG_Logout } from '../../../../assets/svg/logout.svg';
import { ReactComponent as SVG_Close } from '../../../../assets/svg/close.svg';
import { Avatar, Company, Name, UserBox } from '../TitleBar/TitleBar.styled';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getUserActiveShelter, getUserInfo, logout } from '../../../../features/auth/authSlice';
import { useHistory } from 'react-router';
import { Roles } from '../../../../model/Const';
import { fetchShelterUnreadMessageCount } from '../../../../features/messages/messageAsync';
import { getShelterUnreadMessageCount } from '../../../../features/messages/messageSlice';

interface Props {
    state: string;
    toggle: () => void;
    subTitle?: string;
}

function Sidebar(props: Props): JSX.Element {
    const userInfo = useAppSelector(getUserInfo)
    const userShelter = useAppSelector(getUserActiveShelter)
    const unreadMessages = useAppSelector(getShelterUnreadMessageCount)

    const dispatch = useAppDispatch()
    const history = useHistory()

    useEffect(() => {
        if (userShelter) {
            dispatch(fetchShelterUnreadMessageCount(userShelter?.id + ""))
        }
    }, [userShelter])

    function handleLogout() {
        console.log("logout")
        dispatch(logout())
        history.push("/login")
    }

    return (
        <Fixed className={props.state}>
            <Nav className={props.state}>
                <Close>
                    <SVG_Close onClick={props.toggle} />
                </Close>


                <figure>
                    <Logo src="/assets/Homepage/logo.webp" />
                </figure>
                <Hr />
                <ButtonBox>
                    <UserBox location="sidebar">
                        <Avatar>
                            <img src="/assets/Homepage/avatars/avatar1.webp" />
                        </Avatar>

                        <div>
                            <Name>{userInfo?.firstName} {userInfo?.lastName}.</Name>
                            <Company></Company>
                        </div>
                    </UserBox>
                    <ButtonNavLink svg={SVG_Dashboard} to="/dashboard" name="Dashboard" role={Roles.user}></ButtonNavLink>
                    <ButtonNavLink svg={SVG_Messages} to="/messages" exact={false} name="Wiadomości" role={Roles.user} badge={unreadMessages + ""}></ButtonNavLink>
                    <ButtonNavLink svg={SVG_Pets} to="/pets" exact={false} name="Karty zwiarząt" role={Roles.user}></ButtonNavLink>
                    <ButtonNavLink svg={SVG_Volounteering} to="/volounteering" name="Wolontariat" role={Roles.user}></ButtonNavLink>

                    <ButtonNavLink svg={SVG_Pets} to="/shelters" exact={false} name="Schroniska" role={Roles.admin}></ButtonNavLink>


                    <LogoutButton onClick={() => handleLogout()}>
                        <figure>
                            <SVG_Logout />
                        </figure>
                        Wyloguj Się
                    </LogoutButton>
                </ButtonBox>

            </Nav>
        </Fixed>
    )
}

export default Sidebar
