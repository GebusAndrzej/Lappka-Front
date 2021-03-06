import React from 'react'
import EmailInput from '../../components/EmailInput';
import { Box, FontBold, FormBox, TextBox, Text, Button, TotalInput, BG} from './NewsletterSection.styled';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

function Newsletter(): JSX.Element {
    return (
        <Box>
            <BG></BG>
            <TextBox><Text>Chciałbyś włączyć się w naszą społeczność „<FontBold>Łapkowców</FontBold>” i być na bieżąco z najnowszymi informacjami? </Text></TextBox>
            <FormBox>
                <Formik
                    initialValues={{
                        email: '',
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string().email('Niewłaściwy adres email').required(''),
                    })}
                    onSubmit={values => {
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    <Form>
                        <Text>Zapraszamy do zapisania się do naszego newslettera!</Text>
                        <TotalInput>
                            <EmailInput label="" name="email" type="email" placeholder="Wprowadź e-mail" />
                            <Button type="submit">Zapisuję się!</Button>
                        </TotalInput>
                    </Form>
                </Formik>
            </FormBox>
        </Box>
    )
}

export default Newsletter;
