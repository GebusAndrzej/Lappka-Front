import React, { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks'
import { refreshAuth } from './auth/authSlice'

export function saveToken(token: string): void {
    localStorage.setItem("refreshToken", token)
}

export function readToken(): string | null {
    const token = localStorage.getItem("refreshToken")
    return token ?? null
}

function LocalStorageService(): JSX.Element {
    const dispatch = useAppDispatch()



    useEffect(() => {
        const token = readToken()
        if (token) {
            const res = dispatch(refreshAuth(token))
        }
    }, [])


    return (
        <></>
    )
}

export default LocalStorageService