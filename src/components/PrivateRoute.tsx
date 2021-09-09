import React from 'react'
import { Route, RouteProps } from 'react-router';
import { Redirect } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { getUserInfo } from '../features/auth/authSlice';
import { Roles } from '../model/Const';

export type ProtectedRouteProps = {
    role: string
} & RouteProps;

export default function ProtectedRoute({ ...props }: ProtectedRouteProps): JSX.Element {
    const user = useAppSelector(getUserInfo)

    if (user) {
        //logged user

        if (user?.role == props.role) {
            //roles match
            return <Route {...props} />
        }
        else if (user?.role == Roles.admin) {
            //admin user
            return <Route {...props} />
        }
        else {
            //user enter on protected route
            return <Route {...props}><Redirect to="/" /></Route>
        }


    }
    else {
        return <Redirect to={{ pathname: "/" }} />;
    }
}