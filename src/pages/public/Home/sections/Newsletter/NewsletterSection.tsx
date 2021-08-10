import React from 'react'
import MyInput from '../../components/MyInput';
import { Box, FontBold, FormBox, TextBox, Text, Button, TotalInput, BG } from './NewsletterSection.styled';
import { Formik } from 'formik';

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
                    onSubmit={values => {
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    <form>
                        <Text>Zapraszamy do zapisania się do naszego newslettera!</Text>
                        <TotalInput>
                            <MyInput label="" name="email" type="email" placeholder="Enter your e-mail" />
                            <Button type="submit">Subscribe Now</Button>
                        </TotalInput>
                    </form>
                </Formik>
            </FormBox>
        </Box>
    )
}

export default Newsletter;
