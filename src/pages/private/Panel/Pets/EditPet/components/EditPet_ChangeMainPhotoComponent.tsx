import { Form, Formik } from 'formik';
import { useSnackbar } from 'notistack';
import React from 'react'
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../../app/hooks';
import { fetchPet, getMainPhotoStatus, getPet, updatePetMainPhoto } from '../../../../../../features/pets/petsSlice';
import { showSnackbar } from '../../../../../components/Snackbar';
import * as Yup from 'yup'
import { GridContainer, GridItem, Title } from '../../AddPet/AddPet.styled';
import { Thumbnail } from '../EditPet.styled';
import { microServices } from '../../../../../../app/axiosConfig';
import FileInput from '../../../components/FileInput';
import { Button } from '../../../components/Button';
import { CircularProgress } from '@material-ui/core';

interface RouteParams {
    id: string
}

function EditPet_ChangeMainPhotoComponent(): JSX.Element {
    const { id } = useParams<RouteParams>();
    const dispatch = useAppDispatch();
    const { enqueueSnackbar } = useSnackbar()

    const pet = useAppSelector(getPet)
    const mainPhotoStatus = useAppSelector(getMainPhotoStatus)

    if (!pet) {
        return <CircularProgress></CircularProgress>
    }

    return (
        <div>
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
                                        {pet?.mainPhotoPath ?
                                            <>
                                                <img src={microServices.files + "/" + pet?.mainPhotoPath + "?bucketName=0"} />
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

        </div>
    )
}

export default EditPet_ChangeMainPhotoComponent
