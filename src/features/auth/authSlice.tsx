import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Pet } from '../../model/Shelter';
import { endpoints, AxiosUnauthorized, AxiosAuthorized } from '../../app/axiosConfig'
import { RootState } from '../../app/store';


interface InitialState {
    token: string
    refreshToken: string


}

const initialState: InitialState = {
    token: "",
    refreshToken: ""
}

// async operations


// slice

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
    },
    extraReducers: (builder) => {
        builder
    }
})

// export const getPets = (state: RootState): Pet[] => {
//     return state.pets.pets
// }


export default authSlice.reducer
