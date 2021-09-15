
//refresh token
export function saveToken(token: string): void {
    localStorage.setItem("refreshToken", token)
}

export function readToken(): string | null {
    const token = localStorage.getItem("refreshToken")
    return token ?? null
}

export function deleteToken(): void {
    localStorage.removeItem("refreshToken")
}

//access token
export function saveAccessToken(token: string): void {
    localStorage.setItem('accessToken', token)
}

export function readAccessToken(): string | null {
    const token = localStorage.getItem("accessToken")
    return token ?? null
}

export function deleteAccessToken(): void {
    localStorage.removeItem("accessToken")
}