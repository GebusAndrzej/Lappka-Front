import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { Message } from "../../model/Model"
import { fetchShelterMessage, fetchShelterMessages, fetchShelterUnreadMessageCount } from "./messageAsync"

interface InitialState {
    unreadMessageCount: number,

    messages: Message[] | null,
    message: Message | null
}

const initialState: InitialState = {
    unreadMessageCount: 0,
    messages: null,
    message: null
}

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,

    reducers: {
    },
    extraReducers: (builder) => {
        builder
            //message count
            .addCase(fetchShelterUnreadMessageCount.fulfilled, (state, action) => {
                state.unreadMessageCount = action.payload || 0;
            })

            //shelter messages
            .addCase(fetchShelterMessages.fulfilled, (state, action) => {
                state.messages = action.payload || null
            })

            //shelter messages
            .addCase(fetchShelterMessage.fulfilled, (state, action) => {
                state.message = action.payload || null
            })

    }

})

export const getShelterUnreadMessageCount = (state: RootState): number => {
    return state.messages.unreadMessageCount
}

export const getShelterMessages = (state: RootState): Message[] | null => {
    return state.messages.messages
}
export const getMessage = (state: RootState): Message | null => {
    return state.messages.message
}

export default messagesSlice.reducer
