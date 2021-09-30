import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { endpoints, AxiosUnauthorized, AxiosAuthorized } from '../../app/axiosConfig'
import { RootState } from '../../app/store';
import { Shelter } from '../../model/Model';
import { POST_login, POST_registerUser } from '../../model/post/POST_Models';
import { saveToken, deleteToken, deleteAccessToken, saveAccessToken } from '../localStorageService';
import { fetchShelter } from '../shelters/shelterSlice';

interface auth {
    accessToken: string,
    refreshToken: string,
    role: string,
    expires: number
}

interface Token {
    sub: string;
    unique_name: string;
    jti: string;
    iat: string;
    "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string;
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress": string;
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname": string;
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname": string;
    nbf: number;
    exp: number;
    iss: string;
}

export interface User {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: null;
    photoId: string;
    createdAt: Date;
    role: string;
}

interface InitialState {
    registerState: "idle" | "loading" | "failed"
    loginState: "idle" | "loading" | "failed"
    userActiveShelterState: "idle" | "loading" | "failed"
    tokenInfo: Token | null
    auth: auth | null
    user: User | null
    userActiveShelter: Shelter | null
    userActiveShelters: Shelter[] | null
}

const initialState: InitialState = {
    registerState: "idle",
    loginState: "idle",
    userActiveShelterState: "idle",
    tokenInfo: null,
    auth: null,
    user: null,
    userActiveShelter: null,
    userActiveShelters: null
}

// async operations

export const register = createAsyncThunk(
    'auth/register',
    async (user: POST_registerUser) => {
        try {
            const response = await AxiosUnauthorized.post(endpoints.auth + "/signup", user)
            return response.status;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (e: any) {
            return e.response.data
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (user: POST_login, thunkAPI) => {
        try {
            const response = await AxiosUnauthorized.post(endpoints.auth + "/signin", user)

            const token = JSON.parse(atob(response.data.accessToken.split('.')[1]));    //parse info inside token
            const id = token.sub

            saveToken(response.data.refreshToken)
            saveAccessToken(response.data.accessToken)

            //fetch user info and shelters
            thunkAPI.dispatch(fetchUserInfo(id))
            thunkAPI.dispatch(fetchUserShelters())

            return response.status;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (e: any) {
            return e.response.data
        }
    }
)

export const refreshAuth = createAsyncThunk(
    'auth/refreshAuth',
    async (refreshToken: string, thunkAPI) => {
        try {
            const response = await AxiosUnauthorized.post(endpoints.auth + "/use", { token: refreshToken })

            const token = JSON.parse(atob(response.data.accessToken.split('.')[1]));    //parse info inside token
            const id = token.sub

            saveToken(response.data.refreshToken)
            saveAccessToken(response.data.accessToken)

            //fetch user info and shelters
            thunkAPI.dispatch(fetchUserInfo(id))
            thunkAPI.dispatch(fetchUserShelters())

            return response.data;
        }
        catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue({ error: e });
        }
    }
)

export const fetchUserInfo = createAsyncThunk(
    'auth/fetchUserInfo',
    async (id: string, thunkAPI) => {
        try {
            const response = await AxiosAuthorized.get<User>(endpoints.users + `/${id}`)
            return response.data;
        }
        catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue({ error: e });
        }
    }
)

export const fetchUserShelters = createAsyncThunk(
    'auth/fetchUserShelters',
    async (_, thunkAPI) => {
        try {
            const response = await AxiosAuthorized.get<Shelter[]>(endpoints.shelters + `/user`)

            //Fetch active shelter info
            thunkAPI.dispatch(fetchShelter(response.data[0].id)).then(x => {
                thunkAPI.dispatch(setActiveShelter(x.payload))
            })

            return response.data;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (e: any) {
            return thunkAPI.rejectWithValue({ error: e.error });
        }
    }
)


// SLICE

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        logout(state) {
            state.auth = null
            state.tokenInfo = null
            state.user = null
            state.userActiveShelter = null
            state.userActiveShelters = null
            deleteToken()
            deleteAccessToken()
        },
        setActiveShelter(state, action) {
            state.userActiveShelter = action.payload
            state.userActiveShelterState = "idle"
        },
    },
    extraReducers: (builder) => {
        builder
            // ==================== REGISTER ==================== 
            .addCase(register.pending, (state) => {
                state.registerState = "loading"
            })
            .addCase(register.fulfilled, (state) => {
                state.registerState = "idle"
            })
            .addCase(register.rejected, (state) => {
                state.registerState = "failed"
            })

            // ==================== LOGIN ==================== 
            .addCase(login.pending, (state) => {
                state.loginState = "loading"
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loginState = "idle"
                state.auth = action.payload //get whole payload
                const token = action.payload.accessToken ?? null
                if (token)
                    state.tokenInfo = (JSON.parse(atob(token.split('.')[1]))) || null;    //parse info inside token
            })

            // ==================== REFRESH ==================== 
            .addCase(refreshAuth.rejected, (state) => {
                state.loginState = "failed"
            })
            .addCase(refreshAuth.pending, (state) => {
                state.loginState = "loading"
            })
            .addCase(refreshAuth.fulfilled, (state, action) => {
                state.loginState = "idle"
                state.auth = action.payload //get whole payload
                const token = action.payload.accessToken
                state.tokenInfo = JSON.parse(atob(token.split('.')[1]));    //parse info inside token
            })
            .addCase(login.rejected, (state) => {
                state.loginState = "failed"
            })

            // ==================== USER INFO ==================== 
            // .addCase(fetchUserInfo.pending, (state) => {
            //     //
            // })
            .addCase(fetchUserInfo.fulfilled, (state, action) => {
                state.user = action.payload
            })
            .addCase(fetchUserInfo.rejected, (state) => {
                state.user = null
            })

            // ==================== USER SHELTERS ==================== 
            .addCase(fetchUserShelters.pending, (state) => {
                state.userActiveShelterState = "loading"
            })
            .addCase(fetchUserShelters.fulfilled, (state, action) => {
                state.userActiveShelters = action.payload ?? null
                state.userActiveShelter = action.payload[0] ?? null
                state.userActiveShelterState = "idle"
            })
            .addCase(fetchUserShelters.rejected, (state) => {
                state.userActiveShelterState = "failed"
            })
    }
})

// actions
export const { logout, setActiveShelter } = authSlice.actions;


export const getRegisterState = (state: RootState): string => {
    return state.auth.registerState
}
export const getLoginState = (state: RootState): string => {
    return state.auth.loginState
}
export const getUserActiveShelterState = (state: RootState): string | null => {
    return state.auth.userActiveShelterState
}


export const getTokenInfo = (state: RootState): Token | null => {
    return state.auth.tokenInfo
}
export const getUserInfo = (state: RootState): User | null => {
    return state.auth.user
}
export const getUserActiveShelter = (state: RootState): Shelter | null => {
    return state.auth.userActiveShelter
}




export default authSlice.reducer
