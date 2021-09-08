import React, { FunctionComponent } from 'react'
import { Button } from '../Sidebar.styled'

interface Props {
    name: string;
    to: string;
    svg?: FunctionComponent;
    exact?: boolean;
}

export default function ButtonNavLink(props: Props): JSX.Element {
    return (
        <Button
            to={props.to}
            exact={props.exact ?? true}
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
