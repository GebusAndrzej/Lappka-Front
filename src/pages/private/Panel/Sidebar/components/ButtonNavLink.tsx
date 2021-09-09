import React, { FunctionComponent } from 'react'
import { useAppSelector } from '../../../../../app/hooks'
import { getUserInfo } from '../../../../../features/auth/authSlice'
import { Roles } from '../../../../../model/Const'
import { Button } from '../Sidebar.styled'

interface Props {
    name: string;
    to: string;
    svg?: FunctionComponent;
    exact?: boolean;
    role?: string;
}

export default function ButtonNavLink(props: Props): JSX.Element {
    const user = useAppSelector(getUserInfo)

    if ((user?.role == props.role) || (user?.role == Roles.admin))
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
    return <></>
}
