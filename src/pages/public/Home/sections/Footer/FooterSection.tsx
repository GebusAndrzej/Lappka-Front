import React from 'react'
import { Section } from "../../components/HomeSection.styled"
import { ColorChange } from '../Section3/HomeSection3.styled'
import { FooterText, GridContainer, GridItem, Link, Logo, LogoContainer, LogoText, Spacer } from './FooterSection.styled'

function FooterSection(): JSX.Element {
    return (
    <Section itemBackground="white">
        <GridContainer>
            <GridItem marginSet="0px">
            <FooterText>© 2021 All rights reserved.</FooterText>
            </GridItem>
            <GridItem>
                <LogoContainer>
                    <Logo src="/assets/svg/logo.svg" alt="Logo" />
                    <LogoText>Ł<ColorChange>app</ColorChange>ka</LogoText>
                </LogoContainer>
            </GridItem>
            <GridItem marginSet="0 0 0 auto">
                <FooterText><Link href="#">Regulamin</Link></FooterText>
                <Spacer></Spacer>
                <FooterText><Link href="#">Polityka Prywatności</Link></FooterText>
            </GridItem>
        </GridContainer>
    </Section>
    )
}

export default FooterSection