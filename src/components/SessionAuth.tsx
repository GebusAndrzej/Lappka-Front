/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getUserInfo, refreshAuth } from '../features/auth/authSlice'
import { readToken } from '../features/localStorageService'


const SessionAuth: React.FC = (props) => {
    const user = useAppSelector(getUserInfo)
    const dispatch = useAppDispatch()

    const res = useEffect(() => {
        const token = readToken()
        if (token) {
            dispatch(refreshAuth(token)).then(x => {
                return <>{props.children}</>
            })
        }
    }, [])

    return <>{props.children}</>

}
export default SessionAuth
