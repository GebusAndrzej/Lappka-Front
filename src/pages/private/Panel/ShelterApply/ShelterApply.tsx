import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { fetchShelters, getAllShelters, getAllSheltersStatus } from '../../../../features/shelters/shelterSlice'
import { Title } from '../Dashboard/Dashboard.styled'

import LoadingComponent from '../components/LoadingComponent'
import { useSnackbar, OptionsObject } from 'notistack';
import ShelterApplyTableComponent from './components/SheltersApplyTableComponent'

function ShelterApply(): JSX.Element {
    const shelters = useAppSelector(getAllShelters)
    const sheltersStatus = useAppSelector(getAllSheltersStatus)

    const dispatch = useAppDispatch()
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

                {/* <ShelterTable shelters={shelters} edit={edit} delete={handleDeleteShelter} ></ShelterTable> */}
                <ShelterApplyTableComponent shelters={shelters}></ShelterApplyTableComponent>


            </div>
        </>
    )

}

export default ShelterApply
