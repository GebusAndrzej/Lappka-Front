import { Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../../../app/hooks';
import { fetchShelter, getShelter, updateShelter } from '../../../../../features/shelters/shelterSlice';
import { Button } from '../../components/Button';
import TextInput from '../../components/TextInput';
import { GridContainer, GridItem, Title } from '../../Pets/AddPet/AddPet.styled';
import { useSnackbar, OptionsObject } from 'notistack';
import LoadingComponent from '../../components/LoadingComponent';
import { ShelterValidation } from '../SheltersValidation';

interface RouteParams {
    id: string
}

function EditShelter(): JSX.Element {
    const shelter = useAppSelector(getShelter)
    const dispatch = useAppDispatch()
    const history = useHistory()
    const { enqueueSnackbar } = useSnackbar();


    //get shelter from path id
    const { id } = useParams<RouteParams>();
    useEffect(() => {
        dispatch(fetchShelter(id))
    }, [id]);

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
        enqueueSnackbar('Pomyślnie zedytowano informacje', x);
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
        enqueueSnackbar('Wystąpił błąd', x);
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
                    Name: shelter?.name,
                    Email: shelter?.email,
                    phoneNumber: shelter?.phoneNumber,
                    address: {
                        street: shelter?.address.street,
                        zipCode: shelter?.address.zipCode,
                        city: shelter?.address.city
                    },
                    geoLocation: {
                        latitude: shelter?.geoLocation.latitude,
                        longitude: shelter?.geoLocation.longitude
                    }
                }}
                validationSchema={ShelterValidation}
                onSubmit={async values => {

                    try {
                        const res = await dispatch(updateShelter({ ...values, id: shelter?.id }))

                        // console.dir(res.payload);
                        if (`${res.payload}`.match(/^2..$/)) {
                            successSnackbar()
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
                            <TextInput name="Name" label="Nazwa"></TextInput>
                        </GridItem>

                        <GridItem>
                            <TextInput name="Email" type="text" label="Email" />
                        </GridItem>

                        <GridItem>
                            <TextInput name="phoneNumber" label="Telefon" />
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
