import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosAuthorized, microServices } from "../../app/axiosConfig";

export const deletePet = createAsyncThunk(
    "pets/deletePet",
    async (id: string) => {
        try {
            const response = await AxiosAuthorized.delete(microServices.pets + `/shelter/pet/${id}`)
            return response.status
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (e: any) {
            return e.response.data
        }
    }
)