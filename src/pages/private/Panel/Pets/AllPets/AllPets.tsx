import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks'
import { fetchShelterPets, getPets, getPetsStatus } from '../../../../../features/pets/petsSlice'
import PetCardComponent from '../components/PetCardComponent'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { getUserActiveShelter } from '../../../../../features/auth/authSlice'
import NoShelterComponent from '../../components/NoShelterComponent'
import LoadingComponent from '../../components/LoadingComponent'

const Container = styled.div`
    display:flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    gap:20px;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 30px;
`

const AddPetButton = styled(Link)`
    position: fixed;
    bottom:20px;
    right:30px;
    text-decoration:none;
    background-color: ${props => props.theme.colors.green};
    border-radius: 5px;
    color:white;
    font-size:130%;
    padding: 15px 50px;
    box-shadow: 0px 0px 5px rgba(0,0,0,.2);
`

function AllPets(): JSX.Element {
    const pets = useAppSelector(getPets)
    const petsStatus = useAppSelector(getPetsStatus)
    const shelter = useAppSelector(getUserActiveShelter)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (shelter)
            dispatch(fetchShelterPets(shelter.id))
    }, [])

    if (!shelter) {
        return <NoShelterComponent></NoShelterComponent>
    }

    return (
        <Container>
            {petsStatus == "loading" ?
                <LoadingComponent></LoadingComponent>
                :
                pets.length > 0 ?
                    pets.map(x => {
                        return <PetCardComponent key={x.id} pet={x}></PetCardComponent>
                    })
                    :
                    <div>Brak zwierzaków</div>
            }




            <AddPetButton to="/pets/add-pet">
                Dodaj Zwierzaka
            </AddPetButton>

        </Container>
    )
}

export default AllPets