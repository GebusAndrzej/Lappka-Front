import React from 'react'
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../../app/hooks';
import { getUserActiveShelter } from '../../../../features/auth/authSlice';
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

    // function updateUser(x: string) {
    //     // setActiveUser(x)
    // }

    // const p = [
    //     { name: "Jan" }
    // ]
    console.log(userShelter);

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
