import { Form, Formik } from 'formik';
import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks'
import { getUserActiveShelter } from '../../../../../features/auth/authSlice';
import { addMultiplePhotos, deletePetPhoto, fetchPet, getMainPhotoStatus, getPet, getPetStatus, getUpdatePhotosStatus, updatePet, updatePetMainPhoto } from '../../../../../features/pets/petsSlice';
import { petSexes, petSpecies, petSterilization } from '../../../../../model/SelectOptions';
import { ReactComponent as SVG_Weight } from '../../../../../assets/svg/weight.svg';

import { Button } from '../../components/Button';
import { DateInput } from '../../components/DateInput';
import FileInput from '../../components/FileInput';
import SelectInput from '../../components/SelectInput';
import TextArea from '../../components/TextArea';
import TextInput from '../../components/TextInput';
import { GridContainer, GridItem, Title } from '../AddPet/AddPet.styled';
import { PetsValidation_PATCH } from '../PetsValidation';
import LoadingComponent from '../../components/LoadingComponent';
import { CircularProgress } from '@material-ui/core';
import { showSnackbar } from '../../../../components/Snackbar';
import { Thumbnail } from './EditPet.styled';
import * as Yup from 'yup'
import { useSnackbar } from 'notistack';
import { ConfirmDialog } from '../../components/ConfirmDialog';
import { PATCH_Pet } from '../../../../../model/patch/PATCH_Models';

interface RouteParams {
    id: string
}

function EditPet(): JSX.Element {
    const { id } = useParams<RouteParams>();
    const pet = useAppSelector(getPet)
    const userShelter = useAppSelector(getUserActiveShelter)
    const dispatch = useAppDispatch();
    const { enqueueSnackbar } = useSnackbar()

    const petStatus = useAppSelector(getPetStatus)
    const mainPhotoStatus = useAppSelector(getMainPhotoStatus)
    const multiplePhotosStatus = useAppSelector(getUpdatePhotosStatus)

    async function handlePhotoDelete(petId: string, photoId: string) {
        try {
            const res = await dispatch(deletePetPhoto({ petId: petId, photoId: photoId }))
            if (`${res.payload}`.match(/^2..$/)) {
                dispatch(fetchPet(id))

                showSnackbar(enqueueSnackbar, null, "Usunięto zdjęcie", "success")
            }
            else {
                showSnackbar(enqueueSnackbar, null, "Wystąpił błąd", "error")
            }
        }
        catch (e) {
            console.error(e)
        }
    }


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
            <Formik
                enableReinitialize={true}
                initialValues={{
                    id: pet.id,
                    photo: "",
                }}
                validationSchema={Yup.object({
                    id: Yup.string().required("Wymagane"),
                    photo: Yup.string().required("Wymagane")
                })}
                onSubmit={async (values) => {
                    //update main photo
                    try {
                        const res = await dispatch(updatePetMainPhoto(values))

                        if (`${res.payload}`.match(/^2..$/)) {
                            dispatch(fetchPet(id))

                            showSnackbar(enqueueSnackbar, null, "Zmieniono zdjęcie", "success")
                        }
                        else {
                            showSnackbar(enqueueSnackbar, null, "Wystąpił błąd", "error")

                        }
                    }
                    catch (e) {
                        console.error(e)
                    }
                }}
            >
                {id ?
                    mainPhotoStatus == "idle" ?
                        <Form>
                            <Title>
                                Zmień zdjęcie główne
                            </Title>
                            <GridContainer>
                                <GridItem variant="flex-row">
                                    <Thumbnail>
                                        {pet?.mainPhotoId ?
                                            <>
                                                <img src={"http://10.10.10.38:5003/api/files/" + pet?.mainPhotoId + "?bucketName=0"} />
                                            </>
                                            :
                                            false
                                        }
                                    </Thumbnail>
                                </GridItem>
                                <GridItem>
                                    <FileInput name="photo" label="Wybierz nowe zdjęcie" type="file" accept="image/*"></FileInput>
                                    <Button type="submit" >Zapisz</Button>
                                </GridItem>
                            </GridContainer>
                        </Form>
                        :
                        <CircularProgress></CircularProgress>
                    :
                    <CircularProgress></CircularProgress>

                }
            </Formik>

            <hr />

            {/* more photos */}
            <Formik
                enableReinitialize={true}
                initialValues={{
                    id: pet.id,
                    photo: '',
                }}
                validationSchema={Yup.object({
                    id: Yup.string().required("Wymagane"),
                    photo: Yup.string().required("Wymagane")
                })}
                onSubmit={async (values) => {
                    //send photos
                    try {
                        const res = await dispatch(addMultiplePhotos(values))

                        if (`${res.payload}`.match(/^2..$/)) {
                            dispatch(fetchPet(id))

                            showSnackbar(enqueueSnackbar, null, "Dodano zdjęcia", "success")
                        }
                        else {
                            showSnackbar(enqueueSnackbar, null, "Wystąpił błąd", "error")

                        }
                    }
                    catch (e) {
                        console.error(e)
                    }
                }}
            >
                {!id ?
                    <CircularProgress></CircularProgress>
                    :
                    multiplePhotosStatus == "idle" ?
                        <Form>
                            <Title>
                                Reszta zdjęć
                            </Title>
                            <GridContainer>
                                <GridItem variant="flex-row">
                                    {pet?.photoIds.length || 0 > 0 ?
                                        pet.photoIds.map(id =>
                                            <Thumbnail key={id}>
                                                <img src={"http://10.10.10.38:5003/api/files/" + id + "?bucketName=0"} />
                                                <ConfirmDialog
                                                    confirmationText="Usuąć zdjęcie?"
                                                    onAccept={() => handlePhotoDelete(pet.id, id)}
                                                    component={({ handleShowModal }: any) =>
                                                        <figcaption onClick={handleShowModal}>X</figcaption>
                                                    }
                                                />
                                            </Thumbnail>
                                        )
                                        :
                                        <div>Brak zdjęć</div>
                                    }
                                </GridItem>
                                <GridItem>
                                    <FileInput name="photo" label="Wybierz zdjęcia" type="file" multiple accept="image/*"></FileInput>
                                    <Button type="submit" >Dodaj zdjęcia</Button>
                                </GridItem>

                            </GridContainer>
                        </Form>
                        :
                        <CircularProgress></CircularProgress>
                }
            </Formik>

            <hr />

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
                </Form>
            </Formik>
        </>
    )
}

export default EditPet