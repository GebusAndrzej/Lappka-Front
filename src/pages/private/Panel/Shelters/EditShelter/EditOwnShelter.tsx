import { Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../../../app/hooks';
import { fetchShelter, getShelter, getShelterPhotoChangeStatus, updateShelter, updateShelterPhoto } from '../../../../../features/shelters/shelterSlice';
import { Button } from '../../components/Button';
import TextInput from '../../components/TextInput';
import { GridContainer, GridItem, Title } from '../../Pets/AddPet/AddPet.styled';
import { useSnackbar, OptionsObject } from 'notistack';
import LoadingComponent from '../../components/LoadingComponent';
import { PATCH_ShelterValidation } from '../SheltersValidation';
import { PATCH_Shelter } from '../../../../../model/patch/PATCH_Models';
import { fetchUserShelters, getUserActiveShelter } from '../../../../../features/auth/authSlice';
import FileInput from '../../components/FileInput';
import { Thumbnail } from '../../Pets/EditPet/EditPet.styled';
import * as Yup from 'yup';
import { CircularProgress } from '@material-ui/core';
import { showSnackbar } from '../../../../components/Snackbar';
import { baseurl } from '../../../../../app/axiosConfig';

function EditShelter(): JSX.Element {
    const shelter = useAppSelector(getShelter)
    const history = useHistory()
    const userShelter = useAppSelector(getUserActiveShelter)

    const changePhotoStatus = useAppSelector(getShelterPhotoChangeStatus)
    const dispatch = useAppDispatch()
    const { enqueueSnackbar } = useSnackbar();


    //get shelter from path id
    useEffect(() => {
        if (userShelter) {
            dispatch(fetchShelter(userShelter.id))

        }
    }, [userShelter]);

    //snackbar on success editing
    const successSnackbar = () => {
        const x: OptionsObject = {
            variant: 'success',
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center'
            },
            action: (x) => (useEffect(() => (history.push("/shelters")), [x]))
        }
        enqueueSnackbar('Pomy??lnie zedytowano informacje', x);
    }

    //snackbar on failed editing
    const errorSnackbar = () => {
        const x: OptionsObject = {
            variant: 'error',
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center'
            },
        }
        enqueueSnackbar('Wyst??pi?? b????d', x);
    };

    if (!shelter) {
        return (
            <LoadingComponent></LoadingComponent>
        )
    }

    return (
        <>
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
                            dispatch(fetchShelter(userShelter?.id || ""))

                            showSnackbar(enqueueSnackbar, null, "Zmieniono zdj??cie", "success")
                        }
                        else {
                            errorSnackbar()
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
                            Zmie?? zdj??cie
                        </Title>
                        <GridContainer>
                            <GridItem>
                                <Thumbnail>

                                </Thumbnail>
                            </GridItem>
                            <GridItem>
                                <FileInput name="photo" label="Wybierz nowe zdj??cie" type="file" accept="image/*"></FileInput>
                                <Button type="submit" >Zapisz</Button>
                            </GridItem>
                        </GridContainer>


                    </Form>
                }


            </Formik>

            <hr />

            <Formik
                enableReinitialize={true}
                initialValues={{
                    name: shelter?.name,
                    address: {
                        street: shelter?.address.street,
                        zipCode: shelter?.address.zipCode,
                        city: shelter?.address.city
                    },
                    geoLocation: {
                        latitude: `${shelter?.geoLocation.latitude}`,
                        longitude: `${shelter?.geoLocation.longitude}`
                    },
                    email: shelter?.email,
                    phoneNumber: shelter?.phoneNumber,
                    bankNumber: shelter.bankNumber || ''
                }}
                validationSchema={PATCH_ShelterValidation}
                onSubmit={async values => {

                    const tempshelter: PATCH_Shelter = values
                    tempshelter.id = shelter.id
                    // console.log(tempshelter);

                    try {
                        const res = await dispatch(updateShelter(tempshelter))

                        // console.dir(res.payload);
                        if (`${res.payload}`.match(/^2..$/)) {
                            successSnackbar()
                            dispatch(fetchUserShelters())
                        }
                        else {
                            errorSnackbar()
                        }
                    }
                    catch (e) {
                        console.log(e);
                    }
                }}
            >
                <Form>
                    <Title>Informacje</Title>

                    <GridContainer>

                        <GridItem>
                            <TextInput name="name" label="Nazwa"></TextInput>
                        </GridItem>

                        <GridItem>
                            <TextInput name="email" type="text" label="Email" />
                        </GridItem>

                        <GridItem>
                            <TextInput name="phoneNumber" label="Telefon" />
                        </GridItem>

                        <GridItem>
                            <TextInput name="bankNumber" label="numer konta bankowego"></TextInput>
                        </GridItem>

                    </GridContainer>

                    <Title>Adres</Title>

                    <GridContainer>

                        <GridItem>
                            <TextInput name="address.street" label="Ulica" />
                        </GridItem>

                        <GridItem>
                            <TextInput name="address.city" label="Miasto" />
                        </GridItem>

                        <GridItem>
                            <TextInput name="address.zipCode" label="Kod Pocztowy" />
                        </GridItem>

                    </GridContainer>

                    <Title>Geolokalizacja</Title>

                    <GridContainer>

                        <GridItem>
                            <TextInput name="geoLocation.latitude" label="Szer. Geograficzna" />
                        </GridItem>

                        <GridItem>
                            <TextInput name="geoLocation.longitude" label="Wys. Geograficzna" />
                        </GridItem>

                    </GridContainer>

                    <Button type="submit">Zapisz</Button>
                </Form>

            </Formik>
        </>
    )
}

export default EditShelter
