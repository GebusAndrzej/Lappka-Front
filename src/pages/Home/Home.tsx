import React from 'react'
import { Section } from "./components/HomeSection.styled"
import HomeSection1 from './sections/Section1/HomeSection1';
import HomeSection2 from './sections/Section2/HomeSection2';

function Home(): JSX.Element {
    return (
        <>
        <HomeSection1></HomeSection1>
        <HomeSection2></HomeSection2>
        </>
    )
}

export default Home
