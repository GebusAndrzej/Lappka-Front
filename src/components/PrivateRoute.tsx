import React, { useEffect, useState } from 'react'
import { Route, RouteProps, useHistory } from 'react-router';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchUserInfo, getUserInfo, refreshAuth, User } from '../features/auth/authSlice';
import { readToken } from '../features/localStorageService';
import { Roles } from '../model/Const';

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

            if (!token) {
                history.push("/")
                return;
            }

            if (!user) {
                //login
                dispatch(refreshAuth(token)).then((x) => {

                    const temp = (JSON.parse(atob(x.payload.accessToken.split('.')[1])));

                    dispatch(fetchUserInfo(temp.sub)).then(() => {
                        // console.log(y.payload)
                        checkRole(x.payload)
                    })

                })
            }


        }
        function checkRole(user: User | null) {
            // console.log("Checking role");
            // console.log(user);


            if (!user) {
                history.push("/")
                return;
            }

            if (user?.role == props.role) {
                //roles match
                // console.log("roles match");
            }
            else if (user?.role == Roles.admin) {
                // console.log("admin user");

                //admin user
            }
            else {
                console.log("no permission")
                location.replace("/dashboard")
                return

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