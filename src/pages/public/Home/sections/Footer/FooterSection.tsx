import React from 'react'
import { Section } from "../../components/HomeSection.styled"
import { GridContainer, GridItem, Logo, LogoContainer } from './FooterSection.styled'

function FooterSection(): JSX.Element {
    return (
    <Section itemBackground="white">
        <GridContainer>
            <GridItem marginSet="0px">
                1123
            </GridItem>
            <GridItem>
                <LogoContainer>
                    <Logo><img src="/assets/svg/logo.svg" alt="Logo" aria-label="Logo" /></Logo>
                </LogoContainer>
            </GridItem>
            <GridItem marginSet="0 0 0 auto">3123

            </GridItem>
        </GridContainer>
    </Section>
    )
}

export default FooterSection