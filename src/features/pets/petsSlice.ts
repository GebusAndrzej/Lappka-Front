import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Shelter } from '../../model/Shelter';
import { endpoints, AxiosUnauthorized } from '../../app/axiosConfig'

interface InitialState {
    shelters: Array<Shelter>,
    sheltersStatus: 'idle' | 'loading' | 'failed',
    sheltersUpdateTime: number,
    shelter: Shelter | null,
    shelterStatus: 'idle' | 'loading' | 'failed',
    shelterUpdateTime: number
}

const initialState: InitialState = {
    shelters: [],
    sheltersStatus: "idle",
    sheltersUpdateTime: 0,
    shelter: null,
    shelterStatus: 'idle',
    shelterUpdateTime: 0
}

// async operations

export const fetchShelters = createAsyncThunk(
    'shelter/fetchShelters',
    async () => {
        const response = await AxiosUnauthorized.get<Shelter[]>(endpoints.shelters)
        return response.data;
    }
);

export const fetchShelter = createAsyncThunk(
    'shelter/fetchShelter',
    async (id: string) => {
        const response = await AxiosUnauthorized.get<Shelter>(endpoints.shelters + `/${id}`)
        return response.data;
    }
);

export const updateShelter = createAsyncThunk(
    'shelters/updateShelter',
    async (shelter: any) => {
        const response = await AxiosUnauthorized.put(
            endpoints.shelters + `/${shelter.id}`,
            shelter
        )
        return response.status
    }
)

export const addShelter = createAsyncThunk(
    'shelters/addShelter',
    async (shelter: Shelter) => {
        const response = await AxiosUnauthorized.post(
            endpoints.shelters,
            shelter
        )
        return response.data
    }
)

// slice

export const petsSlice = createSlice({
    name: 'shelters',
    initialState,

    reducers: {
        setShelter: (state, action: PayloadAction<Shelter>) => {
            state.shelter = action.payload
            state.shelterStatus = 'idle'
            state.shelterUpdateTime = Date.now()
        },
    },
    extraReducers: (builder) => {
        builder

    }
})

export const getPet = (state: RootState): Shelter[] => {
    return state.shelters.shelters
}

export const getPets = (state: RootState): Shelter | null => {
    return state.shelters.shelter
}


export default petsSlice.reducer
