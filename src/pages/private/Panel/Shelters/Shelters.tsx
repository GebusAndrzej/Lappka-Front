import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { deleteShelter, fetchShelters, getShelters, getSheltersStatus } from '../../../../features/shelters/shelterSlice'
// import { PetTable } from '../Dashboard/components/PetList.styled'
import { Bar, ItemWrapper, Title } from '../Dashboard/Dashboard.styled'

// import { ReactComponent as SVG_Edit } from '../../../../assets/svg/edit.svg';
// import { ReactComponent as SVG_Delete } from '../../../../assets/svg/delete.svg';
import { Shelter } from '../../../../model/Shelter'
import { useHistory } from 'react-router'
// import { Icon } from './Shelters.styled'
import { Button, ClearLink } from '../components/Button'

import LoadingComponent from '../components/LoadingComponent'
// import { ConfirmDialog } from '../components/ConfirmDialog'
import { useSnackbar, OptionsObject } from 'notistack';
import ShelterTable from './components/ShelterTable'

function Shelters(): JSX.Element {
    const shelters = useAppSelector(getShelters)
    const sheltersStatus = useAppSelector(getSheltersStatus)

    const dispatch = useAppDispatch()
    const history = useHistory()
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        dispatch(fetchShelters()).then(e => {
            if (!e.payload) {
                errorSnackbar("Brak połączenia z serwerem")

            }
        })
    }, [])

    //snackbar on success editing
    const successSnackbar = () => {
        const x: OptionsObject = {
            variant: 'success',
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center'
            },
        }
        enqueueSnackbar('Usunięto ', x);
    }

    //snackbar on success editing
    const errorSnackbar = (m?: string) => {
        const x: OptionsObject = {
            variant: 'error',
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center'
            },
        }
        enqueueSnackbar(`Wystąpił błąd ${m ? `: ${m}` : ""}`, x);
    };


    function edit(shelter: Shelter) {
        // dispatch(setShelter(shelter))
        history.push(`/shelters/edit/${shelter.id}`)
    }

    async function handleDeleteShelter(shelter: Shelter) {
        console.log(shelter);
        try {
            const res = await dispatch(deleteShelter(shelter.id || ""))
            console.log(res)
            if (`${res.payload}`.match(/^2..$/)) {
                successSnackbar()
                dispatch(fetchShelters())
            }
            else {
                errorSnackbar()
            }
        }
        catch (e) {
            console.log(e);

        }
    }

    if (shelters == null) {
        return (
            <>
                <LoadingComponent state={sheltersStatus}></LoadingComponent>
            </>
        )
    }

    return (
        <>
            {/* {JSON.stringify(shelters, null, 2)} */}
            {/* <Bar variant="full-width"> */}
            <ItemWrapper variant="full-width">
                <Title>Schroniska</Title>

                <ShelterTable shelters={shelters} edit={edit} delete={handleDeleteShelter} ></ShelterTable>

                <Bar variant="date">
                    <ClearLink to="/shelters/add" >
                        <Button>Dodaj schronisko</Button>
                    </ClearLink>
                </Bar>

                {/* <PetTable>
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

                                            <ConfirmDialog confirmationText={"Usunąć " + x.name + "?"} onAccept={() => (handleDeleteShelter(x))} component={({ handleShowModal }: any) =>
                                                <Icon color="red" onClick={handleShowModal}>
                                                    <SVG_Delete />
                                                </Icon>}
                                            />

                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </PetTable> */}




            </ItemWrapper>
        </>
    )
}

export default Shelters
