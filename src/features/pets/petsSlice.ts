import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Pet } from '../../model/Shelter';
import { endpoints, AxiosUnauthorized } from '../../app/axiosConfig'


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
    }
})

// export const getPet = (state: RootState): Shelter[] => {
//     return state.shelters.shelters
// }

// export const getPets = (state: RootState): Shelter | null => {
//     return state.shelters.shelter
// }


export default petsSlice.reducer
