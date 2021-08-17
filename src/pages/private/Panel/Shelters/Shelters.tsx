import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { fetchShelters, getShelters, setShelter } from '../../../../features/shelters/shelterSlice'
import { PetTable } from '../Dashboard/components/PetList.styled'
import { Bar, ItemWrapper, Title } from '../Dashboard/Dashboard.styled'

import { ReactComponent as SVG_Edit } from '../../../../assets/svg/edit.svg';
import { ReactComponent as SVG_Delete } from '../../../../assets/svg/delete.svg';
import { Shelter } from '../../../../model/Shelter'
import { useHistory } from 'react-router'
import { Icon } from './Shelters.styled'

function Shelters(): JSX.Element {
    const shelters = useAppSelector(getShelters)
    const dispatch = useAppDispatch()
    const history = useHistory()

    useEffect(() => {
        if (shelters.length == 0)
            dispatch(fetchShelters())
    }, [])

    function edit(shelter: Shelter) {
        dispatch(setShelter(shelter))
        history.push(`/shelters/edit/${shelter.id}`)
    }

    return (
        <Bar variant="third-row">
            <ItemWrapper variant="third-row">
                <Title>Schroniska</Title>
                <PetTable>
                    <thead>
                        <tr>
                            <th>Nazwa</th>
                            <th>email</th>
                            <th>Ulica</th>
                            <th>Miasto</th>
                            <th>Numer</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            shelters.map(x => {
                                return (
                                    <tr key={x.id}>
                                        <td>{x.name}</td>
                                        <td>{x.email}</td>
                                        <td>{x.address.street}</td>
                                        <td>{x.address.city}</td>
                                        <td>{x.phoneNumber}</td>
                                        <td>
                                            <Icon onClick={() => edit(x)} color="green">
                                                <SVG_Edit />
                                            </Icon>
                                            <Icon color="red">
                                                <SVG_Delete />
                                            </Icon>
                                            {/* <Link to={'/shelters/edit/' + x.id}> */}
                                            {/* </Link> */}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </PetTable>
            </ItemWrapper>
        </Bar>
    )
}

export default Shelters
