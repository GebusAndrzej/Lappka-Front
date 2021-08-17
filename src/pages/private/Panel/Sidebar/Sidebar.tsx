import React from 'react'
import { ButtonBox, Fixed, Hr, Logo, Nav, Close } from './Sidebar.styled'
import ButtonNavLink from './components/ButtonNavLink'

import { ReactComponent as SVG_Dashboard } from '../../../../assets/svg/dashboard.svg';
import { ReactComponent as SVG_Messages } from '../../../../assets/svg/message.svg';
import { ReactComponent as SVG_Pets } from '../../../../assets/svg/pets_symbol.svg';
import { ReactComponent as SVG_Volounteering } from '../../../../assets/svg/volounteering.svg';
import { ReactComponent as SVG_Logout } from '../../../../assets/svg/logout.svg';
import { ReactComponent as SVG_Close } from '../../../../assets/svg/close.svg';
import { Avatar, Company, Name, UserBox } from '../TitleBar/TitleBar.styled';

interface Props {
    state: string;
    toggle: () => void;
    subTitle?: string;
}

function Sidebar(props: Props): JSX.Element {
    // const [state, setstate] = useState("hidden")


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
                            <Name>Robert G.</Name>
                            <Company>nazwa firmy</Company>
                        </div>
                    </UserBox>
                    <ButtonNavLink svg={SVG_Dashboard} to="/dashboard" name="Dashboard"></ButtonNavLink>
                    <ButtonNavLink svg={SVG_Messages} to="/messages" name="Wiadomości"></ButtonNavLink>
                    <ButtonNavLink svg={SVG_Pets} to="/pets" name="Karty zwiarząt"></ButtonNavLink>
                    <ButtonNavLink svg={SVG_Volounteering} to="/volounteering" name="Wolontariat"></ButtonNavLink>
                    <ButtonNavLink svg={SVG_Pets} to="/shelters" exact={false} name="Schroniska"></ButtonNavLink>

                    <ButtonNavLink svg={SVG_Logout} to="/" name="Wyloguj Się"></ButtonNavLink>

                </ButtonBox>

            </Nav>
        </Fixed>
    )
}

export default Sidebar
