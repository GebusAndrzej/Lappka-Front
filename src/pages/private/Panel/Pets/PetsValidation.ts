import * as Yup from 'yup';

export const PetsValidation = Yup.object({
    Name: Yup.string().required('wymagane'),
    Sex: Yup.string().required('wymagane'),
    Race: Yup.string().required('wymagane'),
    Species: Yup.string().required('wymagane'),
    BirthDay: Yup.date().required('wymagane').typeError('Proszę wprowadzić datę(DD-MM-RRRR)'),
    Color: Yup.string().required('wymagane'),
    Weight: Yup.number().required('wymagane').typeError('Niepoprawny typ danych, proszę wprowadzić liczbę'),
    Sterilization: Yup.string().required('wymagane'),
    Description: Yup.string().min(10, 'Minimum 10 znaków.').max(500, 'Maksymalnie 500 znaków.')
});

export const PetsValidation_PATCH = Yup.object({
    Name: Yup.string().required('wymagane'),
    Sex: Yup.string().required('wymagane'),
    Race: Yup.string().required('wymagane'),
    Species: Yup.string().required('wymagane'),
    DateOfBirth: Yup.date().required('wymagane').typeError('Proszę wprowadzić datę(DD-MM-RRRR)'),
    Color: Yup.string().required('wymagane'),
    Weight: Yup.number().required('wymagane').typeError('Niepoprawny typ danych, proszę wprowadzić liczbę'),
    Sterilization: Yup.string().required('wymagane'),
    Description: Yup.string().min(10, 'Minimum 10 znaków.').max(500, 'Maksymalnie 500 znaków.')
});