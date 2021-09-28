import { Form, Formik } from 'formik';
import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks'
import { getUserActiveShelter } from '../../../../../features/auth/authSlice';
import { fetchPet, getPet, getPetStatus, getPetUpdatestate, updatePet } from '../../../../../features/pets/petsSlice';
import { petSexes, petSpecies, petSterilization } from '../../../../../model/SelectOptions';
import { ReactComponent as SVG_Weight } from '../../../../../assets/svg/weight.svg';

import { Button } from '../../components/Button';
import { DateInput } from '../../components/DateInput';
import SelectInput from '../../components/SelectInput';
import TextArea from '../../components/TextArea';
import TextInput from '../../components/TextInput';
import { GridContainer, GridItem, Title } from '../AddPet/AddPet.styled';
import { PetsValidation_PATCH } from '../PetsValidation';
import LoadingComponent from '../../components/LoadingComponent';
import { showSnackbar } from '../../../../components/Snackbar';
import { useSnackbar } from 'notistack';
import { PATCH_Pet } from '../../../../../model/patch/PATCH_Models';
import EditPet_ChangeMainPhotoComponent from './components/EditPet_ChangeMainPhotoComponent';
import EditPet_ManageMultiplePhotosComponent from './components/EditPet_ManageMultiplePhotosComponent';
import { Hr } from '../../Sidebar/Sidebar.styled';

interface RouteParams {
    id: string
}

function EditPet(): JSX.Element {
    const { id } = useParams<RouteParams>();
    const dispatch = useAppDispatch();
    const { enqueueSnackbar } = useSnackbar()

    const userShelter = useAppSelector(getUserActiveShelter)
    const pet = useAppSelector(getPet)
    const petStatus = useAppSelector(getPetStatus)
    const petUpdateStatus = useAppSelector(getPetUpdatestate)




    useEffect(() => {
        dispatch(fetchPet(id))
    }, [])

    if (!pet && (petStatus == "loading")) {
        return <LoadingComponent></LoadingComponent>
    }
    if (!pet) {
        return <LoadingComponent></LoadingComponent>
    }

    return (
        <>
            {/* Change main photo */}
            <EditPet_ChangeMainPhotoComponent></EditPet_ChangeMainPhotoComponent>

            <Hr variant="green" />

            {/* more photos */}
            <EditPet_ManageMultiplePhotosComponent></EditPet_ManageMultiplePhotosComponent>


            <Hr variant="green" />

            {/* Pet info */}
            <Formik
                initialValues={{
                    id: pet.id,
                    Name: pet?.name,
                    Race: pet?.race,
                    Species: pet?.species,
                    Sex: pet?.sex,
                    DateOfBirth: new Date(pet?.birthDay || "0"),
                    Description: pet?.description,
                    ShelterId: userShelter?.id ?? "",
                    ShelterAddress: userShelter?.address ?? { name: "", street: "", zipCode: "", city: "" },
                    Sterilization: pet?.sterilization,
                    Weight: pet?.weight,
                    Color: pet?.color,
                }}
                validationSchema={PetsValidation_PATCH}
                onSubmit={async values => {
                    //update pet
                    const pet: PATCH_Pet = values

                    try {
                        const res = await dispatch(updatePet(pet))
                        if (`${res.payload}`.match(/^2..$/)) {
                            dispatch(fetchPet(id))

                            showSnackbar(enqueueSnackbar, null, "Zaktualizowano dane", "success")
                        }
                        else {
                            showSnackbar(enqueueSnackbar, null, "Wystąpił błąd", "error")
                        }
                    }
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    catch (e: any) {
                        console.error(e)
                    }

                }}
            >
                <Form>

                    {petUpdateStatus == "idle" ?
                        <>
                            <Title>Informacje</Title>

                            <GridContainer>

                                <GridItem>
                                    <SelectInput name="Species" label="Wybierz gatunek zwierzaka" map={petSpecies}></SelectInput>
                                </GridItem>

                                <GridItem>
                                    <TextInput name="Race" label="Rasa"></TextInput>
                                </GridItem>

                                <GridItem>
                                    <TextInput name="Name" type="text" label="Imię zwierzaka" />
                                </GridItem>

                                <GridItem>
                                    <SelectInput name="Sex" label="Wybierz płeć" map={petSexes}></SelectInput>
                                </GridItem>

                            </GridContainer>

                            <Title>Podstawowe informacje</Title>

                            <GridContainer>

                                <GridItem>
                                    <DateInput name="DateOfBirth" label="Data Urodzenia"></DateInput>
                                </GridItem>

                                <GridItem>
                                    <TextInput name="Color" label="Umaszczenie"></TextInput>
                                </GridItem>

                                <GridItem>
                                    <TextInput name="Weight" type="text" label="Waga (w kg)" svg={SVG_Weight} />
                                </GridItem>

                                <GridItem>
                                    <SelectInput name="Sterilization" label="Czy zwierzak jest wysterylizowany?" map={petSterilization}></SelectInput>
                                </GridItem>

                                <GridItem colspan="2">
                                    <TextArea name="Description" label="Opis"></TextArea>
                                </GridItem>

                            </GridContainer>
                            <Button type="submit">Zapisz zmiany</Button>
                        </>
                        :
                        <LoadingComponent></LoadingComponent>
                    }

                </Form>
            </Formik>
        </>
    )
}

export default EditPet