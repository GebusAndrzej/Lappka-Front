import { Form, Formik } from 'formik';
import { useSnackbar } from 'notistack';
import React from 'react'
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../../../app/hooks';
import { addMultiplePhotos, deletePetPhoto, fetchPet, getPet, getUpdatePhotosStatus } from '../../../../../../features/pets/petsSlice';
import { showSnackbar } from '../../../../../components/Snackbar';
import * as Yup from 'yup'
import { GridContainer, GridItem, Title } from '../../AddPet/AddPet.styled';
import { Thumbnail } from '../EditPet.styled';
import { microServices } from '../../../../../../app/axiosConfig';
import FileInput from '../../../components/FileInput';
import { Button } from '../../../components/Button';
import { CircularProgress } from '@material-ui/core';
import { ConfirmDialog } from '../../../components/ConfirmDialog';

interface RouteParams {
    id: string
}

function EditPet_ManageMultiplePhotosComponent(): JSX.Element {
    const { id } = useParams<RouteParams>();
    const dispatch = useAppDispatch();
    const { enqueueSnackbar } = useSnackbar()


    const pet = useAppSelector(getPet)
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

    if (!pet) {
        return <CircularProgress></CircularProgress>
    }

    return (
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
                                {pet?.photoPaths?.length || 0 > 0 ?
                                    pet.photoPaths.map(id =>
                                        <Thumbnail key={id}>
                                            <img src={microServices.files + "/" + id + "?bucketName=0"} />
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
    )
}

export default EditPet_ManageMultiplePhotosComponent
