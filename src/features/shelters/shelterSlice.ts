import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Shelter, ShelterApplication } from '../../model/Model';
import { endpoints, AxiosAuthorized, AxiosUnauthorized } from '../../app/axiosConfig'
import { POST_Shelter } from '../../model/post/POST_Models';
import { PATCH_Shelter } from '../../model/patch/PATCH_Models';

interface InitialState {
    shelters: Array<Shelter> | null,
    sheltersStatus: 'idle' | 'loading' | 'failed',
    sheltersUpdateTime: number,

    shelter: Shelter | null,
    shelterStatus: 'idle' | 'loading' | 'failed',

    allApplications: ShelterApplication[] | null
    shelterPhotoChangeState: 'idle' | 'loading' | 'failed',

    shelterUpdateState: 'idle' | 'loading' | 'failed',

}

const initialState: InitialState = {
    shelters: null,
    sheltersStatus: "idle",
    sheltersUpdateTime: 0,
    shelter: null,
    shelterStatus: 'idle',
    allApplications: null,
    shelterPhotoChangeState: "idle",
    shelterUpdateState: "idle"
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
    async (shelter: PATCH_Shelter) => {

        try {
            const response = await AxiosAuthorized.patch(
                endpoints.shelters + `/${shelter.id}`,
                shelter
            )
            return response.status
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (e: any) {
            return e.response.data
        }

    }
)

export const addShelter = createAsyncThunk(
    'shelters/addShelter',
    async (shelter: POST_Shelter) => {

        try {
            const formData = new FormData()
            formData.append("Name", shelter.Name)

            formData.append("Address.Street", shelter.address.street)
            formData.append("Address.ZipCode", shelter.address.zipCode)
            formData.append("Address.City", shelter.address.city)

            formData.append("GeoLocation.Latitude", shelter.geoLocation.latitude)
            formData.append("GeoLocation.Longitude", shelter.geoLocation.longitude)

            formData.append("Email", shelter.Email)
            formData.append("phoneNumber", shelter.phoneNumber)
            formData.append("Photo", shelter.Photo)
            formData.append("BankNumber", shelter.BankNumber)

            const response = await AxiosAuthorized.post(
                endpoints.shelters,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )
            return response.status
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (e: any) {
            return e.response.data
        }
    }
)

export const deleteShelter = createAsyncThunk(
    'shelters/deleteShelter',
    async (id: string) => {
        const response = await AxiosAuthorized.delete(endpoints.shelters + `/${id}`)
        return response.status
    }
)

export const updateShelterPhoto = createAsyncThunk(
    'shelters/deleteShelter',
    async (shelter: { id: string, photo: string }) => {
        const formData = new FormData()
        formData.append("Photo", shelter.photo)
        const response = await AxiosAuthorized.patch(endpoints.shelters + `/${shelter.id}/photo`, formData, { headers: { 'Content-Type': ",multipart/form-data" } })
        return response.status
    }
)

export const applyToShelter = createAsyncThunk(
    'shelters/applyToShelter',
    async (id: string) => {
        try {
            const body = { "ShelterId": id }

            const response = await AxiosAuthorized.post(endpoints.applications, body)
            return response.status
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (err: any) {
            console.error("Error response:");
            return err.response.data
            // console.error(err.response.status);  // ***
            // console.error(err.response.headers); // ***
        }
    }
)

export const fetchAllShelterApplications = createAsyncThunk(
    'shelters/fetchAllApplications',
    async () => {
        try {
            const response = await AxiosAuthorized.get<ShelterApplication[]>(endpoints.applications)
            return response.data;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (err: any) {
            return err.response.data
        }
    }
)

export const acceptShelterApplication = createAsyncThunk(
    'shelters/acceptShelterApplication',
    async (id: string) => {
        try {
            const response = await AxiosAuthorized.patch(`${endpoints.applications}/${id}/Accept`, { id: id })
            return response.status;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (err: any) {
            return err.response.data
        }
    }
)

export const declineShelterApplication = createAsyncThunk(
    'shelters/declineShelterApplication',
    async (id: string) => {
        try {
            const response = await AxiosAuthorized.patch(`${endpoints.applications}/${id}/Decline`, { id: id })
            return response.status;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (err: any) {
            return err.response.data
        }
    }
)

// ---------------------------------------------------------------------------------

export const shelterSlice = createSlice({
    name: 'shelters',
    initialState,

    reducers: {
        setShelter: (state, action: PayloadAction<Shelter>) => {
            state.shelter = action.payload
            state.shelterStatus = 'idle'
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

            })
            .addCase(fetchShelter.rejected, (state) => {
                state.shelterStatus = "failed"
            })

            // shelter applications
            .addCase(fetchAllShelterApplications.pending, () => {
                // state.shelterStatus = "loading"
            })
            .addCase(fetchAllShelterApplications.fulfilled, (state, action) => {
                state.allApplications = action.payload ?? null
            })
            .addCase(fetchAllShelterApplications.rejected, () => {
                // state.shelterStatus = "failed"
            })

            //photo change
            .addCase(updateShelterPhoto.pending, (state) => {
                state.shelterPhotoChangeState = "loading"
            })
            .addCase(updateShelterPhoto.fulfilled, (state) => {
                state.shelterPhotoChangeState = "idle"
            })
            .addCase(updateShelterPhoto.rejected, (state) => {
                state.shelterPhotoChangeState = "failed"
            })

            //update shelter info
            .addCase(updateShelter.pending, (state) => {
                state.shelterUpdateState = "loading"
            })
            .addCase(updateShelter.fulfilled, (state) => {
                state.shelterUpdateState = "idle"
            })
            .addCase(updateShelter.rejected, (state) => {
                state.shelterUpdateState = "failed"
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
export const getAllShelterApplications = (state: RootState): ShelterApplication[] | null => {
    return state.shelters.allApplications
}

export const getShelter = (state: RootState): Shelter | null => {
    return state.shelters.shelter
}
export const getShelterStatus = (state: RootState): string => {
    return state.shelters.shelterStatus
}

export const getShelterPhotoChangeStatus = (state: RootState): string => {
    return state.shelters.shelterPhotoChangeState
}

export const getUpdateShelterStatus = (state: RootState): string => {
    return state.shelters.shelterUpdateState
}



export default shelterSlice.reducer
