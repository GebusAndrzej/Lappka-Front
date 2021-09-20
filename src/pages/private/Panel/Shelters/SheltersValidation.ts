import * as Yup from 'yup';
const phoneValid = /^(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)$/;
const zipCodeValid = /^[0-9]{2}-?[0-9]{3}$/;


export const ShelterValidation = Yup.object({
    Name: Yup.string().required('Wymagane'),
    Email: Yup.string().email('Nieprawidłowy adres e-mail').required('Wymagane'),
    phoneNumber: Yup.string().required('Wymagane').matches(phoneValid, 'Niepoprawny numer'),
    address: Yup.object({
        street: Yup.string().required('wymagane'),
        zipCode: Yup.string().required('Wymagane').matches(zipCodeValid, 'Niepoprawny numer'),
        city: Yup.string().required('Wymagane'),
    }),
    geoLocation: Yup.object({
        latitude: Yup
            .number().required('Wymagane')
            .min(-90, "Minimalna wartość to -90")
            .max(90, "Makzymalna wartośćto  90")
            .typeError('Niepoprawny typ danych, proszę wprowadzić liczbę'),
        longitude: Yup
            .number()
            .required('Wymagane')
            .min(-180, "Minimalna wartość to -180")
            .max(180, "Maksymalna wartość to 180")
            .typeError('Niepoprawny typ danych, proszę wprowadzić liczbę')
    })
});

export const PATCH_ShelterValidation = Yup.object({
    name: Yup.string().required('Wymagane'),
    email: Yup.string().email('Nieprawidłowy adres e-mail').required('Wymagane'),
    phoneNumber: Yup.string().required('Wymagane').matches(phoneValid, 'Niepoprawny numer'),
    address: Yup.object({
        street: Yup.string().required('wymagane'),
        zipCode: Yup.string().required('Wymagane').matches(zipCodeValid, 'Niepoprawny numer'),
        city: Yup.string().required('Wymagane'),
    }),
    geoLocation: Yup.object({
        latitude: Yup
            .number().required('Wymagane')
            .min(-90, "Minimalna wartość to -90")
            .max(90, "Makzymalna wartośćto  90")
            .typeError('Niepoprawny typ danych, proszę wprowadzić liczbę'),
        longitude: Yup
            .number()
            .required('Wymagane')
            .min(-180, "Minimalna wartość to -180")
            .max(180, "Maksymalna wartość to 180")
            .typeError('Niepoprawny typ danych, proszę wprowadzić liczbę')
    })
});