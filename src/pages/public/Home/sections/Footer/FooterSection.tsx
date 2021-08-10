import React from 'react'
import { Section } from "../../components/HomeSection.styled"
import { GridContainer, GridItem } from './FooterSection.styled'

function FooterSection(): JSX.Element {
    return (
    <Section itemBackground="white">
        <GridContainer>
            <GridItem>1</GridItem>
            <GridItem>2</GridItem>
            <GridItem>3</GridItem>

        </GridContainer>
    </Section>
    )
}

export default FooterSection