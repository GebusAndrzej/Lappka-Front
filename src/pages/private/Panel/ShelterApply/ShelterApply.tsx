import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { fetchShelters, getAllShelters, getAllSheltersStatus } from '../../../../features/shelters/shelterSlice'
import { Title } from '../Dashboard/Dashboard.styled'

import LoadingComponent from '../components/LoadingComponent'
import { useSnackbar } from 'notistack';
import ShelterApplyTableComponent from './components/SheltersApplyTableComponent'
import { showSnackbar } from '../../../components/Snackbar'

function ShelterApply(): JSX.Element {
    const shelters = useAppSelector(getAllShelters)
    const sheltersStatus = useAppSelector(getAllSheltersStatus)

    const dispatch = useAppDispatch()
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        dispatch(fetchShelters()).then(e => {
            if (!e.payload) {
                showSnackbar(enqueueSnackbar, null, "Błąd połączenia z serwerem", "error")

            }
        })
    }, [])




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
