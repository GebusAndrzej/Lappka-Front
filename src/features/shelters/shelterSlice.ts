import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
        return await fetchSheltersFromApi();
        // return response;
    }
);

export const shelterSlice = createSlice({
    name: 'shelters',
    initialState,

    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchShelters.fulfilled, (state, action) => {
                state.shelters = action.payload.data
                state.sheltersStatus = "idle"
                console.log(action.payload); // !
            })
    }
})

// export const { } = loginSlice.actions;



export const getShelters = (state: RootState): Shelter[] => {
    return state.shelters.shelters
}




export default shelterSlice.reducer




// --- Axios functions

async function fetchSheltersFromApi() {
    return await (await axiosConfig.get<Shelter[]>(endpoints.shelters))
}