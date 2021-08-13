import React from 'react'
import { Button, ButtonBox, Logo, Nav } from './Sidebar.styled'
//navlink
import { NavLink } from 'react-router-dom'
import ButtonNavLink from './components/ButtonNavLink'

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

                <ButtonNavLink to="/dashboard" name="Test"></ButtonNavLink>
                <Button
                    to="/dashboard"
                    activeStyle={activeStyle}
                >
                    Dashboard
                </Button>
                <Button
                    to="/messages"
                    activeStyle={activeStyle}
                >
                    Wiadomości
                </Button>

                <Button
                    to="/"
                    exact
                    activeStyle={activeStyle}
                >
                    Karty zwierząt
                </Button>

                <Button
                    to="/"
                    exact
                    activeStyle={activeStyle}
                >
                    Wolontariat
                </Button>
                <Button as="a">
                    Wyloguj się
                </Button>
            </ButtonBox>

        </Nav>
    )
}

export default Sidebar
