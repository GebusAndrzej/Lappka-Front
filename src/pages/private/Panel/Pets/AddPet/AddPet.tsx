import React from 'react'
import { GridContainer, GridItem, Title, } from './AddPet.styled'
import SelectInput from '../../components/SelectInput';
import TextInput from '../../components/TextInput';
import FileInput from '../../components/FileInput'
import { Form, Formik, } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../components/Button';
import { petSexes, petSpecies, petSterilization } from '../../../../../model/SelectOptions';
import { DateInput } from '../../components/DateInput';
import TextArea from '../../components/TextArea';

import { useAppDispatch } from '../../../../../app/hooks';
import { addPet } from '../../../../../features/pets/petsSlice';
import { ReactComponent as SVG_Weight } from '../../../../../assets/svg/weight.svg';

function AddPet(): JSX.Element {
    const dispatch = useAppDispatch();
    return (
        <Formik
            initialValues={{
                Name: '',
                Sex: '',
                Race: '',
                Species: '',
                File: '',
                BirthDay: null,
                Color: '',
                Weight: '',
                Sterilization: '',
                Description: ''
            }}
            validationSchema={Yup.object({
                Name: Yup.string().required('wymagane'),
                Sex: Yup.string().required('wymagane'),
                Race: Yup.string().required('wymagane'),
                Species: Yup.string().required('wymagane'),
                File: Yup.object(),
                BirthDay: Yup.date().required('wymagane').typeError('Proszę wprowadzić datę(DD-MM-RRRR)'),
                Color: Yup.string().required('wymagane'),
                Weight: Yup.number().required('wymagane').typeError('Niepoprawny typ danych, proszę wprowadzić liczbę'),
                Sterilization: Yup.string().required('wymagane'),
                Description: Yup.string().min(50, 'Minimum 50 znaków.').max(500, 'Maksymalnie 500 znaków.')
            })}
            onSubmit={values => {
                // alert(JSON.stringify(values, null, 2));
                    dispatch(addPet(values))
                    // console.log(values)
            }}
        >
            <Form>
                <Title>Ważne informacje</Title>

                <GridContainer>

                    <GridItem>
                        <SelectInput name="Species" label="Wybierz gatunek zwierzaka" map={petSpecies}></SelectInput>
                    </GridItem>

                    <GridItem>
                        <TextInput name="Race" label="Rasa"></TextInput>
                    </GridItem>

                    <GridItem>
                        <TextInput name="Name" type="text" label="Imię zwierzaka" />
                    </GridItem>

                    <GridItem>
                        <SelectInput name="Sex" label="Wybierz płeć" map={petSexes}></SelectInput>
                    </GridItem>

                    <GridItem>
                        <FileInput name="File" label="Dodaj zdjęcie / galerię" type="file" multiple accept="image/*" />
                    </GridItem>

                </GridContainer>

                <Title>Podstawowe informacje</Title>

                <GridContainer>

                    <GridItem>
                        <DateInput name="BirthDay" label="Data Urodzenia"></DateInput>
                    </GridItem>

                    <GridItem>
                        <TextInput name="Color" label="Umaszczenie"></TextInput>
                    </GridItem>

                    <GridItem>
                        <TextInput name="Weight" type="text" label="Waga (w kg)" svg={SVG_Weight} />
                    </GridItem>

                    <GridItem>
                        <SelectInput name="Sterilization" label="Czy zwierzak jest wysterylizowany?" map={petSterilization}></SelectInput>
                    </GridItem>

                    <GridItem colspan="2">
                        <TextArea name="Description" label="Opis"></TextArea>
                    </GridItem>

                </GridContainer>
                <Button type="submit">Dodaj Zwierzaka</Button>
            </Form>
        </Formik>

    )
}

export default AddPet