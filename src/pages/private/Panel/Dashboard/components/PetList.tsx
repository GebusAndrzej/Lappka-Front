import React from 'react'
import { Icon } from '../../Shelters/Shelters.styled'
import { Title } from '../Dashboard.styled'
import { PetListContainer, PetTable } from './PetList.styled'

import { ReactComponent as SVG_Edit } from '../../../../../assets/svg/edit.svg';
import { ReactComponent as SVG_Delete } from '../../../../../assets/svg/delete.svg';
import { Pet } from '../../../../../model/Model';
import { useHistory } from 'react-router';

interface Props {
    pets: Pet[]
}

function PetList(props: Props): JSX.Element {
    const history = useHistory()
    return (
        <PetListContainer>
            <Title>Karty Zwierząt</Title>
            <PetTable>
                <thead>
                    <tr>
                        <th>Imię zwierzaka</th>
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
                        props.pets.map(x => {
                            return (
                                <tr key={x.id}>
                                    <td>{x.name}</td>
                                    <td>{x.sex}</td>
                                    <td>{x.birthDay}</td>
                                    <td>{x.sex}</td>
                                    <td>{x.sex}</td>
                                    <td>{x.sex}</td>
                                    <td>{x.sex}</td>
                                    <td>
                                        <Icon color="green" onClick={() => history.push(`/pets/edit/${x.id}`)}>
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
