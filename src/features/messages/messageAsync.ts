import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosAuthorized, endpoints } from "../../app/axiosConfig";
import { Message } from "../../model/Model";

export const fetchShelterUnreadMessageCount = createAsyncThunk(
    'messsages/fetchShelterUnreadMessageCount',
    async (id: string) => {
        try {
            const res = await AxiosAuthorized.get<Message[]>(endpoints.messages + `/count/shelter/${id}`)
            return res.data
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (e: any) {
            return e.response.data
        }
    }
)

export const fetchShelterMessages = createAsyncThunk(
    'messsages/fetchShelterMessages',
    async (id: string) => {
        try {
            const res = await AxiosAuthorized.get<Message[]>(endpoints.messages + `/shelter/${id}`)
            return res.data
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (e: any) {
            return e.response.data
        }
    }
)

export const fetchShelterMessage = createAsyncThunk(
    'messsages/fetchShelterMessage',
    async (msgId: string) => {
        try {
            const res = await AxiosAuthorized.get<Message>(endpoints.messages + `/${msgId}`)
            return res.data
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (e: any) {
            return e.response.data
        }
    }
)