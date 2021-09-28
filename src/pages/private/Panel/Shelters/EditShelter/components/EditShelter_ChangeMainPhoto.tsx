import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { Form, Formik } from 'formik'
import { useSnackbar } from 'notistack'
import { useParams } from 'react-router-dom'
import * as Yup from 'yup'
import { microServices } from '../../../../../../app/axiosConfig'
import { useAppDispatch, useAppSelector } from '../../../../../../app/hooks'
import { fetchUserShelters } from '../../../../../../features/auth/authSlice'
import { fetchShelter, getShelter, getShelterPhotoChangeStatus, updateShelterPhoto } from '../../../../../../features/shelters/shelterSlice'
import { showSnackbar } from '../../../../../components/Snackbar'
import { Button } from '../../../components/Button'
import FileInput from '../../../components/FileInput'
import { Title } from '../../../Dashboard/Dashboard.styled'
import { GridContainer, GridItem } from '../../../Pets/AddPet/AddPet.styled'
import { Thumbnail } from '../../../Pets/EditPet/EditPet.styled'

interface RouteParams {
    id: string
}

function EditShelter_ChangeMainPhoto(): JSX.Element {
    const shelter = useAppSelector(getShelter)

    const changePhotoStatus = useAppSelector(getShelterPhotoChangeStatus)
    const dispatch = useAppDispatch()
    const { enqueueSnackbar } = useSnackbar();
    const { id } = useParams<RouteParams>();


    if (!shelter) {
        return <CircularProgress></CircularProgress>
    }

    return (
        <Formik
            enableReinitialize={true}
            initialValues={{
                id: shelter.id,
                photo: "",
            }}
            validationSchema={Yup.object({
                id: Yup.string().required("Wymagane"),
                photo: Yup.string().required("Wymagane")
            })}
            onSubmit={async (values) => {
                //
                try {
                    const res = await dispatch(updateShelterPhoto(values))

                    // console.dir(res.payload);
                    if (`${res.payload}`.match(/^2..$/)) {
                        dispatch(fetchUserShelters())
                        dispatch(fetchShelter(id))

                        showSnackbar(enqueueSnackbar, null, "Zmieniono zdjęcie", "success")
                    }
                    else {
                        showSnackbar(enqueueSnackbar, null, "Wystąpił błąd", "error")

                    }
                }
                catch (e) {
                    console.log(e);
                }
            }}
        >
            {changePhotoStatus == "loading" ?
                <CircularProgress></CircularProgress>
                :
                <Form>
                    <Title>
                        Zmień zdjęcie
                    </Title>
                    <GridContainer>
                        <GridItem>
                            <Thumbnail>
                                <img src={microServices.files + "/" + shelter.photoPath + "?bucketName=2"} />
                            </Thumbnail>
                        </GridItem>
                        <GridItem>
                            <FileInput name="photo" label="Wybierz nowe zdjęcie" type="file" accept="image/*"></FileInput>
                            <Button type="submit" >Zapisz</Button>
                        </GridItem>
                    </GridContainer>


                </Form>
            }


        </Formik>
    )
}

export default EditShelter_ChangeMainPhoto
