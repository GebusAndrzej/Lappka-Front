import React from 'react'
import { GridContainer, GridItem, Title, } from './AddPet.styled'
import SelectInput from '../../components/SelectInput';
import TextInput from '../../components/TextInput';
import FileInput from '../../components/FileInput'
import { Form, Formik, } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../components/Button';
function AddPet(): JSX.Element {
    return (
        <>
            <Formik
                    initialValues={{
                        Spacies: '',
                        Race: '',
                        Name: '',
                        Sex:'',
                        Weight:'',
                        Sterilization: null,
                        Images: [''],
                    }}
                    validationSchema={Yup.object({
                        Name: Yup.string()
                    })}
                    onSubmit={values => {
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    <Form>
                        <Title>Ważne informacje</Title>
                        <GridContainer>
                            <GridItem>
                                <SelectInput name="Species" label="Wybierz gatunek zwierzaka"
                                optionsArray={["Tu będą opcje czytane z bazy","i inne" ]}>
                                </SelectInput>
                            </GridItem>
                            <GridItem>
                                <SelectInput name="Race" label="Wybierz rasę"
                                optionsArray={["Tu będą opcje czytane z bazy","i inne" ]}>
                                </SelectInput>
                            </GridItem>
                            <GridItem>
                                <TextInput name="Name" type="text" label="Wpisz imię zwierzaka" />
                            </GridItem>
                            <GridItem>
                                <SelectInput name="Sex" label="Wybierz płeć"
                                optionsArray={["Tu będą opcje czytane z bazy","i inne" ]}>
                                </SelectInput>
                            </GridItem>

                            <GridItem>
                                <FileInput name="Images" label="Dodaj zdjęcie / galerię" type="file" multiple accept="image/*" />
                            </GridItem>
                            <GridItem background="transparent"></GridItem>
                        </GridContainer>
                    <Title>Podstawowe informacje</Title>
                        <GridContainer>
                            <GridItem></GridItem>
                            <GridItem>
                                <SelectInput name="Color" label="Wybierz umaszczenie"
                                optionsArray={["Tu będą opcje czytane z bazy","i inne" ]}>
                                </SelectInput>
                            </GridItem>
                            <GridItem>
                                <TextInput name="Weight" type="text" label="Waga (w kg)" />
                            </GridItem>
                            <GridItem>
                                <SelectInput name="Sterilizaation" label="Czy zwierzak jest wysterylizowany?"
                                optionsArray={["Tu będą opcje czytane z bazy","i inne" ]}>
                                </SelectInput>
                            </GridItem>
                        </GridContainer>
                        <Button type="submit">Dodaj Zwierzaka</Button>
                    </Form>
            </Formik>
        </>
    )
}

export default AddPet