import React, { useEffect, useState } from 'react'
import { Route, RouteProps, useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getUserInfo, refreshAuth, User } from '../features/auth/authSlice';
import { readToken } from '../features/localStorageService';
import { Roles } from '../model/Const';
import LoadingComponent from '../pages/private/Panel/components/LoadingComponent';

export type ProtectedRouteProps = {
    role: string
} & RouteProps;

export default function ProtectedRoute({ ...props }: ProtectedRouteProps): JSX.Element {
    const user = useAppSelector(getUserInfo)
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const checkUserStatus = async () => {
            const token = readToken()
            console.log(user);

            if (!token) {
                history.push("/")
                return;
            }

            //login
            dispatch(refreshAuth(token)).then((x) => {
                console.log(x);
                checkRole(x.payload)
            })
        }
        function checkRole(user: User | null) {
            console.log("Checking role");
            console.log(user);


            if (!user) {
                history.push("/")
                return;
            }

            if (user?.role == props.role) {
                //roles match
                console.log("roles match");
            }
            else if (user?.role == Roles.admin) {
                console.log("admin user");

                //admin user
            }
            else {
                console.log("no permission")
                history.push("/dashboard")
                return;
            }

            setIsLoading(false)
        }

        checkUserStatus()
    }, [])


    if (isLoading) {
        return <></>
    }
    return <Route {...props}></Route>
}