import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks'
import { fetchPets, getPets } from '../../../../../features/pets/petsSlice'
import { Button, ClearLink } from '../../components/Button'
import { Bar, ItemWrapper } from '../../Dashboard/Dashboard.styled'

function AllPets(): JSX.Element {
    const pets = useAppSelector(getPets)
    const dispatch = useAppDispatch()
    const history = useHistory()

    dispatch(fetchPets())

    return (
        <>
            <Bar variant="full-width">
                <ItemWrapper variant="full-width">
                    <ClearLink to="/pets/add-pet">
                        <Button>Dodaj Zwierzaka</Button>

                        {pets ? JSON.stringify(pets, null, 2) : "asdasd"}

                    </ClearLink>
                </ItemWrapper>
            </Bar>

        </>
    )
}

export default AllPets