import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { useAppDispatch } from '../../../../../app/hooks';
import { addShelter } from '../../../../../features/shelters/shelterSlice';
import { Button } from '../../components/Button';
import TextInput from '../../components/TextInput';
import { GridContainer, GridItem, Title } from '../../Pets/AddPet/AddPet.styled';

function AddShelter(): JSX.Element {
    const dispatch = useAppDispatch()

    return (
        <>
            <Formik
                initialValues={{
                    Name: '',
                    Email: '',
                    phoneNumber: '',
                    address: {
                        street: '',
                        zipCode: '',
                        city: ''
                    },
                    geoLocation: {
                        latitude: '',
                        longitude: ''
                    }
                }}
                validationSchema={Yup.object({
                    //Name: Yup.string().required(''),
                })}
                onSubmit={async values => {
                    // alert(JSON.stringify(values, null, 2));
                    // console.log(values)
                    try {
                        const res = await dispatch(addShelter({ ...values, name: values.Name, email: values.Email }))
                        console.log(res);

                    }
                    catch (e) {
                        console.log(e);

                    }
                    // .then(res => {
                    //     console.log("success");
                    //     console.log(res);
                    // }, err => {
                    //     console.log("err");
                    //     console.log(err);

                    // })
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
