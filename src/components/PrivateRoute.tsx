import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router';

export type ProtectedRouteProps = {
    isAuthenticated: boolean;
} & RouteProps;

export default function ProtectedRoute({ isAuthenticated, ...props }: ProtectedRouteProps): JSX.Element {
    if (isAuthenticated) {
        return <Route {...props} />;
    } else {
        return <Redirect to={{ pathname: "/" }} />;
    }
}