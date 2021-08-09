import React from 'react'
// import { Section } from "./components/HomeSection.styled"
import HomeSection1 from './sections/Section1/HomeSection1';
import HomeSection2 from './sections/Section2/HomeSection2';
import HomeSection3 from './sections/Section3/HomeSection3';
import HomeSection4 from './sections/Section4/HomeSection4';

function Home(): JSX.Element {
    return (
        <>
            <HomeSection1></HomeSection1>
            <HomeSection2></HomeSection2>
            <HomeSection3></HomeSection3>
            <HomeSection4></HomeSection4>
        </>
    )
}

export default Home
