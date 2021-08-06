import React from 'react'
import { Section } from "../../components/HomeSection.styled"
import { Grid, Wrapper } from './HomeSection1.styled'

function HomeSection1(): JSX.Element {
    return (
        <Section>
            <Grid>
                <Wrapper>
                    <div>
                        <img src="assets/svg/logo.svg"></img>
                        <h2>Ł</h2>
                        <h2>app</h2>
                        <h2>ka</h2>
                    </div>
                </Wrapper>
                <Wrapper>

                </Wrapper>
            </Grid>
        </Section>
    )
}

export default HomeSection1
