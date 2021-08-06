import React from 'react'
import { Section } from "../../components/HomeSection.styled"
import { Grid, H2, Wrapper, Center, Img1, Img2, Img3, BGBox } from './HomeSection1.styled'

function HomeSection1(): JSX.Element {
    return (
        <Section>
            <Grid>
                <Wrapper>
                    <Center>
                        <img src="/assets/svg/logo.svg" />
                        <H2>Ł</H2>
                        <H2 color="green">app</H2>
                        <H2>ka</H2>
                    </Center>

                    <section>
                        <h2>
                            <H2>Ł</H2>
                            <H2 color="green">app</H2>
                            <H2>ka &nbsp;</H2>
                            <H2> – pomóż zwierzakom za pomocą jednego kliknięcia!</H2>

                        </h2>
                    </section>
                    <p>
                        Odpowiadamy na potrzeby bezbronnych zwierząt, ułatwiając ich adopcje oraz opiekowanie się nimi.
                    </p>
                </Wrapper>
                <Wrapper>
                    <Img1 src="/assets/svg/img1.svg" />
                    <div>
                        <Img2 src="/assets/svg/img3.svg" />
                        <Img3 src="/assets/svg/img2.svg" />
                    </div>
                    <BGBox></BGBox>
                </Wrapper>
            </Grid>
        </Section>
    )
}

export default HomeSection1
