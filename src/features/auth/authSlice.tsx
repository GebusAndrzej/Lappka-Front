import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { endpoints, AxiosUnauthorized } from '../../app/axiosConfig'
import { useAppDispatch } from '../../app/hooks';
import { RootState } from '../../app/store';
import { POST_login, POST_registerUser } from '../../model/post/POST_Models';

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
    auth: auth | null
    tokenInfo: Token | null
    user: User | null
}

const initialState: InitialState = {
    registerState: "idle",
    loginState: "idle",
    auth: null,
    tokenInfo: null,
    user: null
}

// async operations

export const register = createAsyncThunk(
    'auth/register',
    async (user: POST_registerUser, thunkAPI) => {
        try {
            const response = await AxiosUnauthorized.post(endpoints.auth + "/signup", user)
            return response.status;
        }
        catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue({ error: e });
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (user: POST_login, thunkAPI) => {
        try {
            const response = await AxiosUnauthorized.post(endpoints.auth + "/signin", user)

            const token = JSON.parse(atob(response.data.accessToken.split('.')[1]));    //parse info inside token
            // const id = token.id
            console.log(token);

            const id = "9b8d13da-158f-4689-9fba-68f6e724db68"

            thunkAPI.dispatch(fetchUserInfo(id))
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

        console.log(id);

        try {
            const response = await AxiosUnauthorized.get<User>(endpoints.users + `/${id}`)
            return response.data;
        }
        catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue({ error: e });
        }
    }
)

// slice

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        logout(state) {
            state.user = initialState.user
        }
    },
    extraReducers: (builder) => {
        builder
            //register
            .addCase(register.pending, (state) => {
                state.registerState = "loading"
            })
            .addCase(register.fulfilled, (state) => {
                state.registerState = "idle"
            })
            .addCase(register.rejected, (state) => {
                state.registerState = "failed"
            })
            //login
            .addCase(login.pending, (state) => {
                state.loginState = "loading"
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loginState = "idle"
                state.auth = action.payload //get whole payload
                const token = action.payload.accessToken
                state.tokenInfo = JSON.parse(atob(token.split('.')[1]));    //parse info inside token

                // const dispatch = useAppDispatch()
                // dispatch(fetchUserInfo("9b8d13da-158f-4689-9fba-68f6e724db68"))
            })
            .addCase(login.rejected, (state) => {
                state.loginState = "failed"
            })
            //user
            .addCase(fetchUserInfo.pending, (state) => {
                //
            })
            .addCase(fetchUserInfo.fulfilled, (state, action) => {
                state.user = action.payload
            })
            .addCase(fetchUserInfo.rejected, (state) => {
                //state.registerState = "failed"
            })
    }
})

export const { logout } = authSlice.actions;


export const getRegisterState = (state: RootState): string => {
    return state.auth.registerState
}
export const getLoginState = (state: RootState): string => {
    return state.auth.loginState
}

export const getTokenInfo = (state: RootState): Token | null => {
    return state.auth.tokenInfo
}
export const getUserInfo = (state: RootState): User | null => {
    return state.auth.user
}


export default authSlice.reducer
