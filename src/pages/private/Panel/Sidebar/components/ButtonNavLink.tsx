import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../Sidebar.styled'

interface Props {
    img?: string;
    name: string;
    to: string;
}

const activeStyle: React.CSSProperties = {
    fontWeight: "bold",
    color: "White",
    backgroundColor: "#4EBC84",
}

export default function ButtonNavLink(props: Props): JSX.Element {
    return (
        <Button
            to={props.to}
            exact
            activeStyle={activeStyle}
        >
            <figure>
                <img src={props.img} alt="" />
            </figure>
            {props.name}
        </Button>
    )
}
