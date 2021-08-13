import React from 'react'
import { Button } from '../Sidebar.styled'

interface Props {
    name: string;
    to: string;
    svg?: any;
}

export default function ButtonNavLink(props: Props): JSX.Element {

    return (
        <Button
            to={props.to}
            exact
        >
            <figure>
                {props.svg ?
                    <props.svg />
                    :
                    false
                }

            </figure>
            {props.name}
        </Button>
    )
}
