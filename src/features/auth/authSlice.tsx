import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { endpoints, AxiosUnauthorized } from '../../app/axiosConfig'
import { RootState } from '../../app/store';
import { POST_login, POST_registerUser } from '../../model/post/POST_Models';

interface auth {
    accessToken: string,
    refreshToken: string,
    role: string,
    expires: number
}

interface InitialState {
    registerState: "idle" | "loading" | "failed"
    auth: auth | null
    loginState: "idle" | "loading" | "failed"

}

const initialState: InitialState = {
    registerState: "idle",
    auth: null,
    loginState: "idle"
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
                state.auth = action.payload
                console.log(action.payload)
            })
            .addCase(login.rejected, (state) => {
                state.loginState = "failed"
            })
    }
})

export const getRegisterState = (state: RootState): string => {
    return state.auth.registerState
}
export const getLoginState = (state: RootState): string => {
    return state.auth.loginState
}


export default authSlice.reducer
