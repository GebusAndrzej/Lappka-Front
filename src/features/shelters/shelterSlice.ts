import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Shelter } from '../../model/Shelter';
import axiosConfig, { endpoints } from '../../app/axiosConfig'

interface InitialState {
    shelters: Array<Shelter>,
    sheltersStatus: 'idle' | 'loading' | 'failed',
    shelter: Shelter | null,
    shelterStatus: 'idle' | 'loading' | 'failed',

}

const initialState: InitialState = {
    shelters: [],
    sheltersStatus: "idle",
    shelter: null,
    shelterStatus: 'idle',
}

export const fetchShelters = createAsyncThunk(
    'posts/fetchShelters',
    async () => {
        const response = await axiosConfig.get<Shelter[]>(endpoints.shelters)
        return response.data;
    }
);

export const shelterSlice = createSlice({
    name: 'shelters',
    initialState,

    reducers: {
        setShelter: (state, action: PayloadAction<Shelter>) => {
            state.shelter = action.payload;
            state.shelterStatus = 'idle'
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchShelters.fulfilled, (state, action) => {
                state.shelters = action.payload
                state.sheltersStatus = "idle"
                // console.log(action.payload); // !
            })
    }
})

export const { setShelter } = shelterSlice.actions;



export const getShelters = (state: RootState): Shelter[] => {
    return state.shelters.shelters
}




export default shelterSlice.reducer
