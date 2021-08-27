import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Pet } from '../../model/Shelter';
import { endpoints, AxiosUnauthorized } from '../../app/axiosConfig'
import { RootState } from '../../app/store';


interface InitialState {
    pets: Array<Pet>,
    petsStatus: 'idle' | 'loading' | 'failed',
    petsUpdateTime: number
}

const initialState: InitialState = {
    pets: [],
    petsStatus: "idle",
    petsUpdateTime: 0,
}

// async operations

export const fetchPets = createAsyncThunk(
    'pets/fetchPets',
    async () => {
        const response = await AxiosUnauthorized.get<Pet[]>(endpoints.pets)
        return response.data;
    }
)

export const addPet = createAsyncThunk(
    'pets/addPet',
    async (pet: any) => {
        const formData = new FormData();

        formData.append("Name", pet.Name)
        formData.append("Sex", pet.Sex)
        formData.append("Race", pet.Race)
        formData.append("Species", pet.Species)
        formData.append("File", pet.File)
        formData.append("BirthDay", pet.BirthDay)
        formData.append("Color", pet.Color)
        formData.append("Sterilization", pet.Sterilization)
        formData.append("ShelterAddress.Name", pet.Name)
        formData.append("ShelterAddress.City", pet.Name)
        formData.append("ShelterAddress.Street", pet.Name)

        const response = await AxiosUnauthorized.post(
            endpoints.pets,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
        return response
    }
)

// slice

export const petsSlice = createSlice({
    name: 'pets',
    initialState,

    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPets.pending, (state) => {
                state.petsStatus = "loading"
            })
            .addCase(fetchPets.fulfilled, (state, action) => {
                state.pets = action.payload
                state.petsStatus = "idle"
                state.petsUpdateTime = Date.now()
            })
            .addCase(fetchPets.rejected, (state) => {
                state.petsStatus = "failed"
            })
    }
})

export const getPets = (state: RootState): Pet[] => {
    return state.pets.pets
}

// export const getPets = (state: RootState): Shelter | null => {
//     return state.shelters.shelter
// }


export default petsSlice.reducer
