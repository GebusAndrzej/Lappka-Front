import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Shelter } from '../../model/Model';
import { endpoints, AxiosAuthorized, AxiosUnauthorized } from '../../app/axiosConfig'
import { POST_Shelter } from '../../model/post/POST_Models';

interface InitialState {
    shelters: Array<Shelter> | null,
    sheltersStatus: 'idle' | 'loading' | 'failed',
    sheltersUpdateTime: number,
    shelter: Shelter | null,
    shelterStatus: 'idle' | 'loading' | 'failed',
    shelterUpdateTime: number
}

const initialState: InitialState = {
    shelters: null,
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
        try {
            const response = await AxiosUnauthorized.get<Shelter[]>(endpoints.shelters)
            return response.data;
        }
        catch (e) {
            // console.log(e);
            return null
        }
    }
);

export const fetchShelter = createAsyncThunk(
    'shelter/fetchShelter',
    async (id: string) => {
        const response = await AxiosAuthorized.get<Shelter>(endpoints.shelters + `/${id}`)
        return response.data;
    }
);

export const updateShelter = createAsyncThunk(
    'shelters/updateShelter',
    async (shelter: any) => {
        const response = await AxiosAuthorized.put(
            endpoints.shelters + `/${shelter.id}`,
            shelter
        )
        return response.status
    }
)

export const addShelter = createAsyncThunk(
    'shelters/addShelter',
    async (shelter: POST_Shelter) => {
        const response = await AxiosAuthorized.post(
            endpoints.shelters,
            shelter
        )
        return response.status
    }
)

export const deleteShelter = createAsyncThunk(
    'shelters/deleteShelter',
    async (id: string) => {
        const response = await AxiosAuthorized.delete(endpoints.shelters + `/${id}`)
        return response.status
    }
)

export const applyToShelter = createAsyncThunk(
    'shelters/applyToShelter',
    async (id: string) => {
        try {
            const formData = new FormData();
            formData.append("ShelterId", id)
            const body = { "ShelterId": id }

            const response = await AxiosAuthorized.post(endpoints.applications, formData, { headers: { 'Content+Type': 'multipart/form-data', 'Content-Type': 'multipart/form-data' } })
            return response.status
        }
        catch (err: any) {
            console.error("Error response:");
            // console.error(err.response.data);
            // console.log(err.response.data)
            return err.response.data
            // console.error(err.response.status);  // ***
            // console.error(err.response.headers); // ***
        }
    }
)

export const shelterSlice = createSlice({
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
            //shelters
            .addCase(fetchShelters.pending, (state) => {
                state.sheltersStatus = "loading"
            })
            .addCase(fetchShelters.fulfilled, (state, action) => {
                state.shelters = action.payload
                state.sheltersStatus = "idle"
                state.sheltersUpdateTime = Date.now()
                // console.log(action.payload); // !
            })
            .addCase(fetchShelters.rejected, (state) => {
                state.sheltersStatus = "failed"
            })

            //one shelter
            .addCase(fetchShelter.pending, (state) => {
                state.shelterStatus = "loading"
            })
            .addCase(fetchShelter.fulfilled, (state, action) => {
                state.shelter = action.payload
                state.shelterStatus = "idle"
                state.shelterUpdateTime = Date.now()

            })
            .addCase(fetchShelter.rejected, (state) => {
                state.shelterStatus = "failed"
            })
    }
})

export const { setShelter } = shelterSlice.actions;


export const getAllShelters = (state: RootState): Shelter[] | null => {
    return state.shelters.shelters
}
export const getAllSheltersStatus = (state: RootState): string => {
    return state.shelters.sheltersStatus
}

export const getShelter = (state: RootState): Shelter | null => {
    return state.shelters.shelter
}
export const getShelterStatus = (state: RootState): string => {
    return state.shelters.shelterStatus
}


export default shelterSlice.reducer
