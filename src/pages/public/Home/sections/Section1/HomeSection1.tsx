import React from 'react'
import { useAppSelector } from '../../../../../app/hooks'
import { getUserInfo } from '../../../../../features/auth/authSlice'
import { Section } from "../../components/HomeSection.styled"
import { Grid, H2, Wrapper, Center, Img1, Img2, Img3, BGBox, Container, Sub, RightSide, Button, Logo, ButtonContainer, P, MainLogo, LoginButton } from './HomeSection1.styled'

function HomeSection1(): JSX.Element {
    const user = useAppSelector(getUserInfo)

    return (
        <Section>
            <LoginButton to="/login">{user ? "Dashboard" : "Zaloguj Się"}</LoginButton>
            <RightSide>
                <BGBox></BGBox>
                <Img1 src="/assets/Homepage/img1.svg" />
                <Img2 src="/assets/Homepage/img3.svg" />
                <Img3 src="/assets/Homepage/img2.svg" />
            </RightSide>

            <Grid>
                <Wrapper>
                    <Container>

                        <Center>
                            <MainLogo src="/assets/Homepage/logo.webp" alt="Logo" aria-label="Logo" />
                        </Center>

                        <section>
                            <H2 fontWeight="700" fontSize="38px" marginTop="20px">
                                Ł<H2 fontWeight="700" fontSize="38px" color="green">app</H2>ka&nbsp;
                                – pomóż zwierzakom za pomocą jednego kliknięcia!
                            </H2>
                        </section>

                        <Sub>
                            Odpowiadamy na potrzeby bezbronnych zwierząt, ułatwiając ich adopcje oraz opiekowanie się nimi.
                        </Sub>

                        <ButtonContainer>
                            <Button>
                                <Logo src="/assets/svg/appstore.svg" aria-label="Logo" />
                                <div>
                                    <P>Download on the</P>
                                    <P weight="bold">App Store</P>
                                </div>
                            </Button>

                            <Button>
                                <Logo src="/assets/svg/googleplay.svg" />
                                <div>
                                    <P>Get it on</P>
                                    <P weight="bold">Google Play</P>
                                </div>
                            </Button>
                        </ButtonContainer>

                    </Container>
                </Wrapper>
            </Grid>
        </Section>
    )
}

export default HomeSection1
