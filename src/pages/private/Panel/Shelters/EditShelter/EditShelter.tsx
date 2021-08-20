import { Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { useAppSelector, useAppDispatch } from '../../../../../app/hooks';
import { fetchShelter, getShelter, updateShelter } from '../../../../../features/shelters/shelterSlice';
import { Button } from '../../components/Button';
import TextInput from '../../components/TextInput';
import { GridContainer, GridItem, Title } from '../../Pets/AddPet/AddPet.styled';

interface RouteParams {
    id: string
}

function EditShelter(): JSX.Element {
    const shelter = useAppSelector(getShelter)
    const dispatch = useAppDispatch()
    const history = useHistory()

    const { id } = useParams<RouteParams>();

    useEffect(() => {
        dispatch(fetchShelter(id))
    }, [id]);

    if (!shelter) {
        return <div>loading</div>
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
                validationSchema={Yup.object({
                    //Name: Yup.string().required(''),
                })}
                onSubmit={async values => {

                    try {
                        const res = await dispatch(updateShelter({ ...values, id: shelter?.id }))

                        // console.dir(res.payload);
                        if (`${res.payload}`.match(/^2..$/)) {
                            history.push("/shelters")

                        }

                    }
                    catch (e) {
                        console.log(e);

                    }
                    // // alert(JSON.stringify(values, null, 2));
                    // // console.dir(values)
                    // dispatch(updateShelter({ ...values, id: shelter?.id })).then(res => {
                    //     console.log(res);

                    // })
                }}
            >
                <Form>
                    {/* <pre>
                        {JSON.stringify(shelter, null, 2)}
                    </pre> */}
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
