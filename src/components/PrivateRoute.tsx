import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router';
import { useAppSelector } from '../app/hooks';
import { getUserInfo } from '../features/auth/authSlice';

export type ProtectedRouteProps = {
    role: string
} & RouteProps;

export default function ProtectedRoute({ ...props }: ProtectedRouteProps): JSX.Element {
    const user = useAppSelector(getUserInfo)

    if (user) {
        console.log("zalogowany");

    }
    else {
        console.log("niezalogowany");

    }
    if (user?.role == props.role) {
        return <Route {...props} />;
    } else {
        return <Redirect to={{ pathname: "/" }} />;
    }
}