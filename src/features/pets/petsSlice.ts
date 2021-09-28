import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Pet } from '../../model/Model';
import { endpoints, AxiosAuthorized, microServices } from '../../app/axiosConfig'
import { RootState } from '../../app/store';
import { POST_Pet } from '../../model/post/POST_Models';
import { PATCH_Pet } from '../../model/patch/PATCH_Models';


interface InitialState {
    pets: Array<Pet>,
    petsStatus: 'idle' | 'loading' | 'failed',

    addingPetState: 'idle' | 'loading' | 'failed'

    pet: Pet | null;
    petStatus: 'idle' | 'loading' | 'failed',

    petMainPhotoChangeState: 'idle' | 'loading' | 'failed',
    petMultiplePhotosState: 'idle' | 'loading' | 'failed',
    petUpdateState: 'idle' | 'loading' | 'failed',
}

const initialState: InitialState = {
    pets: [],
    petsStatus: "idle",
    addingPetState: "idle",

    pet: null,
    petStatus: "idle",

    petMainPhotoChangeState: "idle",
    petMultiplePhotosState: "idle",
    petUpdateState: "idle"
}

// async operations

export const fetchAllPets = createAsyncThunk(
    'pets/fetchAllPets',
    async () => {
        try {
            const response = await AxiosAuthorized.get<Pet[]>(endpoints.pets)
            return response.data;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (e: any) {
            return e.response.data
        }
    }
)

export const fetchPet = createAsyncThunk(
    'pets/fetchPet',
    async (id: string) => {
        try {
            const response = await AxiosAuthorized.get<Pet>(endpoints.pets + `/${id}`)
            return response.data;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (e: any) {
            return e.response.data;
        }
    }
)

export const fetchShelterPets = createAsyncThunk(
    'pets/fetchShelterPets',
    async (id: string) => {
        const response = await AxiosAuthorized.get<Pet[]>(microServices.pets + `/shelter/${id}/pet`)
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

export const updatePetMainPhoto = createAsyncThunk(
    'pets/updatePetMainPhoto',
    async (pet: { id: string, photo: string }) => {
        try {
            const formData = new FormData()
            formData.append("File", pet.photo)
            const response = await AxiosAuthorized.patch(endpoints.pets + `/${pet.id}/photo`, formData, { headers: { 'Content-Type': ",multipart/form-data" } })
            return response.status
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (e: any) {
            return e.response.data
        }
    }
)

export const addMultiplePhotos = createAsyncThunk(
    'pets/addMultiplePhotos',
    async (pet: { id: string, photo: string }) => {
        try {
            const formData = new FormData()
            Array.prototype.map.call(pet.photo, p => {
                formData.append("Photos", p)
            })
            const response = await AxiosAuthorized.post(endpoints.pets + `/${pet.id}/photo`, formData, { headers: { 'Content-Type': ",multipart/form-data" } })
            return response.status
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (e: any) {
            return e.response.data
        }
    }
)

export const deletePetPhoto = createAsyncThunk(
    'pets/deletePetPhoto',
    async (props: { petId: string, photoId: string }) => {
        try {
            const response = await AxiosAuthorized.delete(
                endpoints.pets + `/${props.petId}/photo`,
                { data: { path: [props.photoId] } }
            )
            return response.status
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (e: any) {
            return e.response.data
        }
    }
)

export const updatePet = createAsyncThunk(
    'pets/updatePet',
    async (pet: PATCH_Pet) => {
        try {
            const response = await AxiosAuthorized.patch(
                endpoints.pets + `/${pet.id}`,
                pet)

            return response.status;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (e: any) {
            return e.response.data;
        }
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

            //fetch one pet
            .addCase(fetchPet.pending, (state) => {
                state.petStatus = "loading"
                state.pet = null
            })
            .addCase(fetchPet.fulfilled, (state, action) => {
                state.petStatus = "idle"
                state.pet = action.payload
            })
            .addCase(fetchPet.rejected, (state) => {
                state.petStatus = "failed"
            })

            //update main photo
            .addCase(updatePetMainPhoto.pending, (state) => {
                state.petMainPhotoChangeState = "loading"
            })
            .addCase(updatePetMainPhoto.fulfilled, (state) => {
                state.petMainPhotoChangeState = "idle"
            })
            .addCase(updatePetMainPhoto.rejected, (state) => {
                state.petMainPhotoChangeState = "failed"
            })

            //multiple photos
            .addCase(addMultiplePhotos.pending, (state) => {
                state.petMultiplePhotosState = "loading"
            })
            .addCase(addMultiplePhotos.fulfilled, (state) => {
                state.petMultiplePhotosState = "idle"
            })
            .addCase(addMultiplePhotos.rejected, (state) => {
                state.petMultiplePhotosState = "failed"
            })

            //pet update info
            .addCase(updatePet.pending, (state) => {
                state.petUpdateState = "loading"
            })
            .addCase(updatePet.fulfilled, (state) => {
                state.petUpdateState = "idle"
            })
            .addCase(updatePet.rejected, (state) => {
                state.petUpdateState = "failed"
            })
    }
})

export const getPets = (state: RootState): Pet[] => {
    return state.pets.pets
}

export const getPet = (state: RootState): Pet | null => {
    return state.pets.pet
}

export const getAddingPetStatus = (state: RootState): string => {
    return state.pets.addingPetState
}

export const getPetStatus = (state: RootState): string => {
    return state.pets.petStatus
}

export const getPetsStatus = (state: RootState): string => {
    return state.pets.petsStatus
}

export const getMainPhotoStatus = (state: RootState): string => {
    return state.pets.petMainPhotoChangeState
}

export const getUpdatePhotosStatus = (state: RootState): string => {
    return state.pets.petMultiplePhotosState
}

export const getPetUpdatestate = (state: RootState): string => {
    return state.pets.petUpdateState
}


export default petsSlice.reducer
