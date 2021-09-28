import React from 'react'
import { Icon } from '../../Shelters/Shelters.styled'
import { Title } from '../Dashboard.styled'
import { PetListContainer, PetTable } from './PetList.styled'

import { ReactComponent as SVG_Edit } from '../../../../../assets/svg/edit.svg';
import { ReactComponent as SVG_Delete } from '../../../../../assets/svg/delete.svg';
import { Pet } from '../../../../../model/Model';
import { useHistory } from 'react-router';
import { ConfirmDialog } from '../../components/ConfirmDialog';
import { showSnackbar } from '../../../../components/Snackbar';
import { useSnackbar } from 'notistack';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import { deletePet } from '../../../../../features/pets/petsAsync';
import { fetchShelterPets } from '../../../../../features/pets/petsSlice';
import { getUserActiveShelter } from '../../../../../features/auth/authSlice';

interface Props {
    pets: Pet[]
}

function PetList(props: Props): JSX.Element {
    const history = useHistory()
    const { enqueueSnackbar } = useSnackbar()
    const dispatch = useAppDispatch()
    const shelter = useAppSelector(getUserActiveShelter)

    async function handleDelete(id: string) {
        try {
            const res = await dispatch(deletePet(id))

            if (`${res.payload}`.match(/^2..$/)) {
                dispatch(fetchShelterPets(shelter?.id || ""))

                showSnackbar(enqueueSnackbar, null, "Usunięto", "success")
            }
            else {
                showSnackbar(enqueueSnackbar, null, "Wystąpił błąd", "error")
            }
        }
        catch (e) {
            showSnackbar(enqueueSnackbar, null, "Wystąpił błąd", "error")
        }
    }

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

                                        <ConfirmDialog
                                            onAccept={() => handleDelete(x.id)}
                                            confirmationText="Usunąć Zwierzaka?"
                                            validationText={x.name}
                                            component={({ handleShowModal }: any) =>
                                                <Icon color="red" onClick={handleShowModal}>
                                                    <SVG_Delete />
                                                </Icon>
                                            }
                                        />

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
