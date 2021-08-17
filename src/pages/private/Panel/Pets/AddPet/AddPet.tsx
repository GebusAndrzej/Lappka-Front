import React from 'react'
import { GridContainer, GridItem, Title, } from './AddPet.styled'
import SelectInput from '../../components/SelectInput';
import TextInput from '../../components/TextInput';
import FileInput from '../../components/FileInput'
import {Option} from '../../components/Inputs.styled'
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
                        Images: [''],
                    }}
                    validationSchema={Yup.object({
                        Name: Yup.string().required(''),
                    })}
                    onSubmit={values => {
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    <Form>
                        <Title>Ważne informacje</Title>
                        <GridContainer>
                            <GridItem>
                                <SelectInput name="Species" type="select" >
                                    <Option value="0" disabled selected hidden>Tu Będą</Option>
                                    <Option value="1">Opcje czytane z bazy</Option>
                                    <Option value="2">i inne</Option>
                                </SelectInput>
                            </GridItem>
                            <GridItem>
                                <SelectInput name="Race" type="select"  >
                                    <Option value="0" disabled selected hidden>Tu Będą</Option>
                                    <Option value="1">Opcje czytane z bazy</Option>
                                    <Option value="2">i inne</Option>
                                </SelectInput>
                            </GridItem>
                            <GridItem>
                                <TextInput name="Name" type="text" placeholder="Wpisz imię zwierzaka" />
                            </GridItem>
                            <GridItem>
                                <SelectInput name="Sex" type="select" >
                                    <Option value="0" disabled selected hidden>Wybierz plec</Option>
                                    <Option value="1">Samiec</Option>
                                    <Option value="2">Samica</Option>
                                </SelectInput>
                            </GridItem>

                            <GridItem>
                                <FileInput name="Images" type="file"  multiple accept="image/*" />
                            </GridItem>
                            <GridItem background="transparent"></GridItem>
                        </GridContainer>
                        <Title>Podstawowe informacje</Title>
                        <GridContainer>
                            <GridItem></GridItem>
                            <GridItem>
                                <SelectInput name="Color" type="select">
                                    <Option value="0" disabled selected hidden>Namaszczenie</Option>
                                    <Option value="1">Samiec</Option>
                                    <Option value="2">Samica</Option>
                                </SelectInput>
                            </GridItem>
                            <GridItem></GridItem>
                            <GridItem>
                                <SelectInput name="Sterilizaation" type="select">
                                    <Option value="0" disabled selected hidden>Sterylizacja</Option>
                                    <Option value="1">Samiec</Option>
                                    <Option value="2">Samica</Option>
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