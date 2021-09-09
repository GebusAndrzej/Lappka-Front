import { resolve } from 'path'
import React, { Component } from 'react'
import { Redirect, Route, RouteProps, useHistory } from 'react-router'
import { ThunkDispatch } from 'redux-thunk'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getUserInfo, refreshAuth, User } from '../features/auth/authSlice'
import { readToken } from '../features/localStorageService'
import { Roles } from '../model/Const'
import LoadingComponent from '../pages/private/Panel/components/LoadingComponent'

export type ProtectedRouteProps = {
    role: string
} & RouteProps;

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("end")
        resolve("asd");
    }, 2000);
});

export default class PrivateRouteClass extends Component<ProtectedRouteProps> {
    ret: JSX.Element | null = null
    user: User | null = null
    dispatch: any
    // history: History | undefined;

    componentDidMount() {
        this.user = useAppSelector(getUserInfo)
        this.dispatch = useAppDispatch()

        // this.history = useHistory()


        if (this.user) {
            //logged user

            if (this.user?.role == this.props.role) {
                //roles match
                this.ret = <Route {...this.props} />
            }
            else if (this.user?.role == Roles.admin) {
                //admin user
                this.ret = <Route {...this.props} />
            }
            else {
                //user enter on restricted route
                this.ret = <Route {...this.props}><Redirect to="/" /></Route>
            }
        }
        else {
            //user not logged in
            // ret = <Redirect to={{ pathname: "/" }} />;

            new Promise((res, rej) => {
                const token = readToken()
                if (token) {
                    this.dispatch(refreshAuth(token))
                }

                resolve("asdas")
            }).then(x => {
                console.log(x);
            })

            myPromise.then(x => {
                // if (this.user)
                // history.push("/")

                // ret = <Redirect to={{ pathname: "/" }} />
            }
            )
        }
    }

    render() {
        return (
            this.ret ? this.ret : <LoadingComponent></LoadingComponent>
        )
    }
}
