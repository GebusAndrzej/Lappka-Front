import React from 'react'
import { ButtonBox, Fixed, Hr, Logo, Nav } from './Sidebar.styled'
import ButtonNavLink from './components/ButtonNavLink'

import { ReactComponent as SVG_Dashboard } from '../../../../assets/svg/dashboard.svg';
import { ReactComponent as SVG_Messages } from '../../../../assets/svg/message.svg';
import { ReactComponent as SVG_Pets } from '../../../../assets/svg/pets_symbol.svg';
import { ReactComponent as SVG_Volounteering } from '../../../../assets/svg/volounteering.svg';
import { ReactComponent as SVG_Logout } from '../../../../assets/svg/logout.svg';

function Sidebar(): JSX.Element {

    return (
        <Fixed>
            <Nav>
                <figure>
                    <Logo src="/assets/Homepage/logo.webp" />
                </figure>
                <Hr />
                <ButtonBox>
                    <ButtonNavLink svg={SVG_Dashboard} to="/dashboard" name="Dashboard"></ButtonNavLink>
                    <ButtonNavLink svg={SVG_Messages} to="/messages" name="Wiadomości"></ButtonNavLink>
                    <ButtonNavLink svg={SVG_Pets} to="/pets" name="Karty zwiarząt"></ButtonNavLink>
                    <ButtonNavLink svg={SVG_Volounteering} to="/volounteering" name="Wolontariat"></ButtonNavLink>

                    <ButtonNavLink svg={SVG_Logout} to="/" name="Wyloguj Się"></ButtonNavLink>

                </ButtonBox>

            </Nav>
        </Fixed>
    )
}

export default Sidebar
