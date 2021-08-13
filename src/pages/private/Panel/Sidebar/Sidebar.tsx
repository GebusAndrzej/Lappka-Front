import React from 'react'
import { Button, ButtonBox, Logo, Nav } from './Sidebar.styled'
//navlink
import { NavLink } from 'react-router-dom'
import ButtonNavLink from './components/ButtonNavLink'

import { ReactComponent as Aaaa } from '../../../../assets/svg/dashboard.svg';

const activeStyle: React.CSSProperties = {
    fontWeight: "bold",
    color: "White",
    backgroundColor: "#4EBC84",
}

function Sidebar(): JSX.Element {
    return (
        <Nav>
            <figure>
                <Logo src="/assets/Homepage/logo.webp" />
            </figure>

            <ButtonBox>

                <ButtonNavLink img="/assets/Dashboard/dashboard.svg" to="/dashboard" name="Dashboard"></ButtonNavLink>
                <ButtonNavLink img="/assets/Dashboard/message.svg" to="/messages" name="Wiadomości"></ButtonNavLink>
                <ButtonNavLink img="/assets/Dashboard/pets_symbol.svg" to="/" name="Karty zwiarząt"></ButtonNavLink>
                <ButtonNavLink img="/assets/Dashboard/volounteering.svg" to="/" name="Wolontariat"></ButtonNavLink>

                <ButtonNavLink img="/assets/Dashboard/logout.svg" to="/" name="Wyloguj Się"></ButtonNavLink>

            </ButtonBox>

        </Nav>
    )
}

export default Sidebar
