import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getUserActiveShelter } from '../../../../features/auth/authSlice';
import { fetchShelterMessages } from '../../../../features/messages/messageAsync';
import NoShelterComponent from '../components/NoShelterComponent';
import MessageBoxComponent from './components/MessageBoxComponent'
import MessageUserListComponent from './components/MessageUserListComponent'
import { MessagesWrapper } from './MessagesComponent.styled'

interface RouteParams {
    id?: string
}

function MessagesComponent(): JSX.Element {

    // const [activeUser, setActiveUser] = useState("");
    const { id } = useParams<RouteParams>();
    const userShelter = useAppSelector(getUserActiveShelter)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (userShelter) {
            dispatch(fetchShelterMessages(userShelter?.id + ""))
        }
    }, [userShelter])


    if (!userShelter) {
        return <NoShelterComponent></NoShelterComponent>
    }

    return (
        <MessagesWrapper className={!id ? "wide" : "normal"}>
            <MessageUserListComponent state={id ? "mobile-hidden" : "normal"}></MessageUserListComponent>
            <MessageBoxComponent state={!id ? "hidden" : "normal"}></MessageBoxComponent>
        </MessagesWrapper>
    )
}

export default MessagesComponent
