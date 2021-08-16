import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { fetchShelters, getShelters } from '../../../../features/shelters/shelterSlice'
import { Bar, ItemWrapper } from '../Dashboard/Dashboard.styled'

function Shelters(): JSX.Element {
    const shelters = useAppSelector(getShelters)
    const dispatch = useAppDispatch()

    return (
        <Bar variant="third-row">
            <ItemWrapper variant="third-row">
                <button onClick={() => dispatch(fetchShelters())}>
                    Get Posts
                </button>
                {/* shelters list */}
            </ItemWrapper>
        </Bar>
    )
}

export default Shelters
