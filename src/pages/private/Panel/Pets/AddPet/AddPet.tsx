import React, { useEffect } from 'react'
import { GridContainer, GridItem, Title, } from './AddPet.styled'
import SelectInput from '../../components/SelectInput';
import TextInput from '../../components/TextInput';
import FileInput from '../../components/FileInput'
import { Form, Formik, } from 'formik';
// import * as Yup from 'yup';
import { Button } from '../../components/Button';
import { petSexes, petSpecies, petSterilization } from '../../../../../model/SelectOptions';
import { DateInput } from '../../components/DateInput';
import TextArea from '../../components/TextArea';

import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import { addPet, getAddingPetStatus } from '../../../../../features/pets/petsSlice';
import { ReactComponent as SVG_Weight } from '../../../../../assets/svg/weight.svg';
import { PetsValidation } from '../PetsValidation';
import LoadingComponent from '../../components/LoadingComponent';
import { OptionsObject, useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import { getUserActiveShelter } from '../../../../../features/auth/authSlice';
import { POST_Pet } from '../../../../../model/post/POST_Models';

function AddPet(): JSX.Element {
    const dispatch = useAppDispatch();
    const addingPetStatus = useAppSelector(getAddingPetStatus)
    const userShelter = useAppSelector(getUserActiveShelter)
    const { enqueueSnackbar } = useSnackbar()
    const history = useHistory()

    //snackbar on success editing
    const successSnackbar = () => {
        const x: OptionsObject = {
            variant: 'success',
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center'
            },
            action: (x) => (useEffect(() => (history.push("/pets")), [x]))
        }
        enqueueSnackbar('Dodano zwierzaka', x);
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

    if (addingPetStatus == "loading") {
        return <LoadingComponent></LoadingComponent>
    }
    return (
        <Formik
            initialValues={{
                Name: '',
                Sex: '',
                Race: '',
                Species: '',
                MainPhoto: '',
                BirthDay: null,
                Color: '',
                Weight: '',
                Sterilization: '',
                Description: '',
                ShelterId: userShelter?.id ?? "",
                address: Object.assign({ name: userShelter?.name ?? "" }, userShelter?.address) ?? { name: "", street: "", zipCode: "", city: "" },
                geoLocation: userShelter?.geoLocation ?? { longitude: "0", latitude: "1" }
            }}
            validationSchema={PetsValidation}
            onSubmit={async values => {
                const pet: POST_Pet = values

                try {
                    const res = await dispatch(addPet(pet))

                    if (`${res.payload}`.match(/^2..$/)) {
                        console.log("Sukces");

                        successSnackbar()
                    }
                    else {
                        console.log("Error");

                        errorSnackbar()
                    }
                }
                catch (e) {
                    console.log(e);
                }
            }}
        >
            <Form>
                <Title>Wa??ne informacje</Title>

                <GridContainer>

                    <GridItem>
                        <SelectInput name="Species" label="Wybierz gatunek zwierzaka" map={petSpecies}></SelectInput>
                    </GridItem>

                    <GridItem>
                        <TextInput name="Race" label="Rasa"></TextInput>
                    </GridItem>

                    <GridItem>
                        <TextInput name="Name" type="text" label="Imi?? zwierzaka" />
                    </GridItem>

                    <GridItem>
                        <SelectInput name="Sex" label="Wybierz p??e??" map={petSexes}></SelectInput>
                    </GridItem>

                    <GridItem>
                        <FileInput name="MainPhoto" label="Dodaj zdj??cie / galeri??" type="file" accept="image/*" />
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