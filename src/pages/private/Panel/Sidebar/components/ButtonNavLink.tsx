import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
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
    badge?: string
}

const Badge = styled.div`
    position: absolute;
    top:0;
    border-radius: 50%;
    width:15px;
    height:15px;
    line-height: 15px;
    font-size: 70%;
    background-color: red;
    color:white;
`;

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
                {(props.badge && (+props.badge > 0)) ?
                    <Badge>{props.badge}</Badge>
                    :
                    false
                }

            </Button>
        )
    return <></>
}
