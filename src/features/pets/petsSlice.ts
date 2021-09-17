import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Pet } from '../../model/Model';
import { endpoints, AxiosAuthorized, baseurl } from '../../app/axiosConfig'
import { RootState } from '../../app/store';
import { POST_Pet } from '../../model/post/POST_Models';


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

export const fetchAllPets = createAsyncThunk(
    'pets/fetchAllPets',
    async () => {
        const response = await AxiosAuthorized.get<Pet[]>(endpoints.pets)
        return response.data;
    }
)

export const fetchShelterPets = createAsyncThunk(
    'pets/fetchShelterPets',
    async (id: string) => {
        const response = await AxiosAuthorized.get<Pet[]>(baseurl + `:5002/api/shelter/${id}/pet`)
        return response.data;
    }
)

export const addPet = createAsyncThunk(
    'pets/addPet',
    async (pet: POST_Pet) => {
        const formData = new FormData();
        const temp_bday = pet.BirthDay || new Date()

        formData.append("Name", pet.Name)
        formData.append("Sex", pet.Sex)
        formData.append("Race", pet.Race)
        formData.append("Species", pet.Species)
        formData.append("MainPhoto", pet.MainPhoto)

        const bday = ((temp_bday.getMonth() > 8) ? (temp_bday.getMonth() + 1) : ('0' + (temp_bday.getMonth() + 1))) + '-' + ((temp_bday.getDate() > 9) ? temp_bday.getDate() : ('0' + temp_bday.getDate())) + '-' + temp_bday.getFullYear()
        formData.append("BirthDay", bday)
        formData.append("Color", pet.Color)
        formData.append("Weight", pet.Weight)
        formData.append("Sterilization", pet.Sterilization)
        formData.append("ShelterId", pet.ShelterId)

        formData.append("ShelterAddress.Name", pet.address.name)
        formData.append("ShelterAddress.City", pet.address.city)
        formData.append("ShelterAddress.Street", pet.address.street)

        formData.append("ShelterAddress.GeoLocation.Latitude", pet.geoLocation.latitude)
        formData.append("ShelterAddress.GeoLocation.Longitude", pet.geoLocation.longitude)

        formData.append("Description", pet.Description)

        const response = await AxiosAuthorized.post(
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
            //fetch All pets
            .addCase(fetchAllPets.pending, (state) => {
                state.petsStatus = "loading"
            })
            .addCase(fetchAllPets.fulfilled, (state, action) => {
                state.pets = action.payload
                state.petsStatus = "idle"
                state.petsUpdateTime = Date.now()
            })
            .addCase(fetchAllPets.rejected, (state) => {
                state.petsStatus = "failed"
            })

            //fetch shelter pets
            .addCase(fetchShelterPets.pending, (state) => {
                state.petsStatus = "loading"
            })
            .addCase(fetchShelterPets.fulfilled, (state, action) => {
                state.pets = action.payload
                state.petsStatus = "idle"
                state.petsUpdateTime = Date.now()
            })
            .addCase(fetchShelterPets.rejected, (state) => {
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
