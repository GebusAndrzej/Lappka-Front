import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { deleteShelter, fetchShelters, getAllShelters, getAllSheltersStatus } from '../../../../features/shelters/shelterSlice'
import { Bar, Title } from '../Dashboard/Dashboard.styled'
import { Shelter } from '../../../../model/Model'
import { useHistory } from 'react-router'
import { Button, ClearLink } from '../components/Button'

import LoadingComponent from '../components/LoadingComponent'
import { useSnackbar, OptionsObject } from 'notistack';
import ShelterTable from './components/ShelterTable'

function Shelters(): JSX.Element {
    const shelters = useAppSelector(getAllShelters)
    const sheltersStatus = useAppSelector(getAllSheltersStatus)

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
            <div style={{ marginBottom: "10px" }}>
                <Title>Schroniska</Title>

                {sheltersStatus == "idle" ?
                    <ShelterTable shelters={shelters} edit={edit} delete={handleDeleteShelter} ></ShelterTable>
                    :
                    <LoadingComponent></LoadingComponent>
                }

                <Bar variant="date">
                    <ClearLink to="/shelters/add" >
                        <Button>Dodaj schronisko</Button>
                    </ClearLink>
                </Bar>

            </div>
        </>
    )
}

export default Shelters
