import { Form, Formik } from 'formik'
import { OptionsObject, useSnackbar } from 'notistack';
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../../../../app/hooks';
import { addShelter } from '../../../../../features/shelters/shelterSlice';
import { POST_Shelter } from '../../../../../model/post/POST_Models';
import { Button } from '../../components/Button';
import FileInput from '../../components/FileInput';
import TextInput from '../../components/TextInput';
import { GridContainer, GridItem, Title } from '../../Pets/AddPet/AddPet.styled';
import { ShelterValidation } from '../SheltersValidation';

function AddShelter(): JSX.Element {
    const dispatch = useAppDispatch()
    const history = useHistory()
    const { enqueueSnackbar } = useSnackbar();


    const successSnackbar = () => {
        const x: OptionsObject = {
            variant: 'success',
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center'
            },
            action: (x) => (useEffect(() => (history.push("/shelters")), [x]))
        }
        enqueueSnackbar('Pomyślnie dodano schronisko', x);
    }

    //snackbar on success
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

    return (
        <>
            <Formik
                initialValues={{
                    Name: '',
                    address: {
                        street: '',
                        zipCode: '',
                        city: ''
                    },
                    geoLocation: {
                        latitude: '',
                        longitude: ''
                    },
                    Email: '',
                    phoneNumber: '',
                    Photo: '',
                    BankNumber: ''
                }}
                validationSchema={ShelterValidation}
                onSubmit={async values => {
                    const Shelter: POST_Shelter = values

                    try {
                        const res = await dispatch(addShelter(Shelter))
                        // console.log(res);
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
                    <Title>Ważne informacje</Title>

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

                        <GridItem>
                            <TextInput name="BankNumber" label="numer konta bankowego"></TextInput>
                        </GridItem>

                        <GridItem>
                            <FileInput name="Photo" label="Dodaj zdjęcie / galerię" type="file" accept="image/*" />
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

                    <Button type="submit">Dodaj Schronisko</Button>
                </Form>

            </Formik>
        </>
    )
}

export default AddShelter
