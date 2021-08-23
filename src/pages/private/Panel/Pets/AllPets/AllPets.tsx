import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, ClearLink } from '../../components/Button'
import { Bar, ItemWrapper } from '../../Dashboard/Dashboard.styled'

function AllPets(): JSX.Element {
    return (
        <>
            <Bar variant="full-width">
                <ItemWrapper variant="full-width">
                    <ClearLink to="/pets/add-pet">
                        <Button>Dodaj Zwierzaka</Button>

                    </ClearLink>
                </ItemWrapper>
            </Bar>

        </>
    )
}

export default AllPets