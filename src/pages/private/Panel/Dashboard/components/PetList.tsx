import React from 'react'
import { Icon } from '../../Shelters/Shelters.styled'
import { Title } from '../Dashboard.styled'
import { PetListContainer, PetTable } from './PetList.styled'

import { ReactComponent as SVG_Edit } from '../../../../../assets/svg/edit.svg';
import { ReactComponent as SVG_Delete } from '../../../../../assets/svg/delete.svg';

function PetList(): JSX.Element {
    return (
        <PetListContainer>
            <Title>Karty Zwierząt</Title>
            <PetTable>
                <thead>
                    <tr>
                        <th>Imię zwiarzaka</th>
                        <th>Płeć</th>
                        <th>Wiek</th>
                        <th>Kolor</th>
                        <th>Waga</th>
                        <th>Sterylizacja</th>
                        <th>Komentarz</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        [1, 2, 3].map(x => {
                            return (
                                <tr key={x}>
                                    <td>a{x}</td>
                                    <td>a{x}</td>
                                    <td>a{x}</td>
                                    <td>a{x}</td>
                                    <td>a{x}</td>
                                    <td>a{x}</td>
                                    <td>a{x}</td>
                                    <td>
                                        <Icon color="green">
                                            <SVG_Edit />
                                        </Icon>
                                        <Icon color="red">
                                            <SVG_Delete />
                                        </Icon>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </PetTable>
        </PetListContainer >
    )
}

export default PetList
