import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Pet } from '../../model/Model';
import { endpoints, AxiosUnauthorized, AxiosAuthorized } from '../../app/axiosConfig'
import { RootState } from '../../app/store';


interface InitialState {
    pets: Array<Pet>,
    petsStatus: 'idle' | 'loading' | 'failed',
    petsUpdateTime: number
    addingPetState: 'idle' | 'loading' | 'failed'

}

const initialState: InitialState = {
    pets: [],
    petsStatus: "idle",
    petsUpdateTime: 0,
    addingPetState: "idle"
}

// async operations

export const fetchPets = createAsyncThunk(
    'pets/fetchPets',
    async () => {
        const response = await AxiosAuthorized.get<Pet[]>(endpoints.pets)
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
        formData.append("MainPhoto", pet.MainPhoto)
        const bday = ((pet.BirthDay.getMonth() > 8) ? (pet.BirthDay.getMonth() + 1) : ('0' + (pet.BirthDay.getMonth() + 1))) + '-' + ((pet.BirthDay.getDate() > 9) ? pet.BirthDay.getDate() : ('0' + pet.BirthDay.getDate())) + '-' + pet.BirthDay.getFullYear()
        formData.append("BirthDay", bday)
        formData.append("Color", pet.Color)
        formData.append("Weight", pet.Weight)
        formData.append("Description", pet.Description)
        formData.append("Sterilization", pet.Sterilization)


        formData.append("ShelterAddress.Name", pet.Name)
        formData.append("ShelterAddress.City", pet.Name)
        formData.append("ShelterAddress.Street", pet.Name)

        formData.append("ShelterAddress.GeoLocation.Latitude", "12")
        formData.append("ShelterAddress.GeoLocation.Longitude", "14")


        const response = await AxiosUnauthorized.post(
            endpoints.pets,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
        return response.status
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
            //adding pet
            .addCase(addPet.pending, (state) => {
                state.addingPetState = "loading"
            })
            .addCase(addPet.fulfilled, (state) => {
                state.addingPetState = "idle"
            })
            .addCase(addPet.rejected, (state) => {
                state.addingPetState = "failed"
            })
    }
})

export const getPets = (state: RootState): Pet[] => {
    return state.pets.pets
}

export const getAddingPetStatus = (state: RootState): string => {
    return state.pets.addingPetState
}

// export const getPets = (state: RootState): Shelter | null => {
//     return state.shelters.shelter
// }


export default petsSlice.reducer
