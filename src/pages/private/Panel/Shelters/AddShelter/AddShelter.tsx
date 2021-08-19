import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { Button } from '../../components/Button';
import TextInput from '../../components/TextInput';
import { GridContainer, GridItem, Title } from '../../Pets/AddPet/AddPet.styled';

function AddShelter(): JSX.Element {
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
                onSubmit={values => {
                    // alert(JSON.stringify(values, null, 2));
                    console.log(values)
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
                            <TextInput name="atreet" label="Ulica" />
                        </GridItem>

                        <GridItem>
                            <TextInput name="city" label="Miasto" />
                        </GridItem>

                        <GridItem>
                            <TextInput name="zipCode" label="Kod Pocztowy" />
                        </GridItem>

                    </GridContainer>

                    <Title>Geolokalizacja</Title>

                    <GridContainer>

                        <GridItem>
                            <TextInput name="latitude" label="Szer. Geograficzna" />
                        </GridItem>

                        <GridItem>
                            <TextInput name="longitude" label="Wys. Geograficzna" />
                        </GridItem>

                    </GridContainer>

                    <Button type="submit">Dodaj Schronisko</Button>
                </Form>

            </Formik>
        </>
        // <Bar variant="full-width">
        //     <ItemWrapper variant="full-width">
        //         <Title>Doodaj schronisko</Title>

        //         <pre>
        //             {JSON.parse("\"{\\n  \\\"name\\\": \\\"string\\\",\\n  \\\"address\\\": {\\n    \\\"street\\\": \\\"string\\\",\\n    \\\"zipCode\\\": \\\"string\\\",\\n    \\\"city\\\": \\\"string\\\"\\n  },\\n  \\\"geoLocation\\\": {\\n    \\\"latitude\\\": \\\"string\\\",\\n    \\\"longitude\\\": \\\"string\\\"\\n  },\\n  \\\"email\\\": \\\"string\\\",\\n  \\\"phoneNumber\\\": \\\"string\\\"\\n}\"")}
        //         </pre>

        //     </ItemWrapper>
        // </Bar>
    )
}

export default AddShelter
