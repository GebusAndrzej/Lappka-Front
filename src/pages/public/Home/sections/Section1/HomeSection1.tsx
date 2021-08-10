import React from 'react'
import { Section } from "../../components/HomeSection.styled"
import { Grid, H2, Wrapper, Center, Img1, Img2, Img3, BGBox, Container, Sub, RightSide, Button, Logo, ButtonContainer, P } from './HomeSection1.styled'

function HomeSection1(): JSX.Element {
    return (
        <Section>

            <RightSide>
                <BGBox></BGBox>
                <Img1 src="/assets/svg/img1.svg" />
                <Img2 src="/assets/svg/img3.svg" />
                <Img3 src="/assets/svg/img2.svg" />
            </RightSide>

            <Grid>
                <Wrapper>
                    <Container>

                        <Center>
                            <img src="/assets/svg/logo.svg" alt="Logo" aria-label="Logo" />
                            <H2 fontWeight="500" fontSize="38px">Ł</H2>
                            <H2 fontWeight="500" fontSize="38px" color="green">app</H2>
                            <H2 fontWeight="500" fontSize="38px">ka</H2>
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
